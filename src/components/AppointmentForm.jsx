import React, { lazy, useState } from "react";

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

  return (
    <>
      <div className="container form-component appointment-form">
        <h2>Appointment</h2>
        <form>
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
              onChange={(event) => { const [firstName, lastName] = event.target.value.split("");
                setDoctorFirstName(firstName);
                setDoctorLastName(lastName);
              }}
              disabled={!department}
            >
              <option >Select Doctor</option>
              {doctors}
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default AppointmentForm;
