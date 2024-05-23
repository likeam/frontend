import axios from "axios";
import React, { lazy, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [hasVisited, setVisited] = useState(false);

  const departmentArray = [
    "Pediatrics",
    "Neurology",
    "Cardiology",
    "Gynaecology",
    "Orthopedics",
    "Urology",
    "Psych",
    "Radiology",
    "Dermology",
    "Anesthesiology",
    "ENT",
    "Dentistry",
    "Gastroenterology",
    "Oncology",
  ];

  const [doctors, setDoctrs] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/user/doctors",
        { withCredentials: true }
      );
      setDoctrs(data.doctor);
      console.log(data.doctor);
    };
    fetchDoctors();
  }, []);

  const handleAppointment = async (event) => {
    event.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/appointment",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointmentDate,
          department,
          doctorFirstName,
          doctorLastName,
          adress,
          hasVisited: hasVisitedBool,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setDoctorFirstName("");
      setDoctorLastName("");
      setAdress("");
      setVisited("");
    } catch (error) {
      toast.error(error.respone.data.message);
    }
  };

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form onSubmit={handleAppointment}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              type="text"
              placeholder="NIC"
              value={nic}
              onChange={(event) => setNic(event.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <select
              value={gender}
              onChange={(event) => setGender(event.target.value)}
            >
              <option> Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              type="date"
              placeholder="Appointment Date"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
            />
            <select
              value={department}
              onChange={(event) => {
                setDepartment(event.target.value);
                setDoctorFirstName("");
                setDoctorLastName("");
              }}
            >
              {departmentArray.map((department, i) => {
                return (
                  <option value={department} key={i}>
                    {department}
                  </option>
                );
              })}
            </select>
            <select
              value={`${doctorFirstName} ${doctorLastName}`}
              onChange={(event) => {
                const [firstName, lastName] = event.target.value.split("");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option value="">Select Doctor</option>
              {doctors
                .filter((doctor) => doctor.doctorDepartment === departmen)
                .map((doctor, index) => (
                  <option
                    value={`${doctor.firstName} ${doctor.lastName}`}
                    key={index}
                  >
                    {doctor.firstName} {doctor.lastName}
                  </option>
                ))}
            </select>
          </div>
          <textarea
            placeholder="Adresse"
            rows="10"
            value={adress}
            onChange={(event) => setAdress(event.target.value)}
          />
          <div
            style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <p style={{ marginBottom: 0 }}>Have you visited before?</p>
            <input
              type="checkbox"
              value={hasVisited}
              onChange={(event) => setVisited(event.target.checked)}
              style={{ width: "25px", flex: "none" }}
            />
          </div>
          <button style={{ margin: "0 auto" }}>GET APPOINTMENT</button>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
