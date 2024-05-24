import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="url" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum. Est, recusandae iure. Obcaecati voluptatum debitis alias ex distinctio soluta nobis minus provident quam mollitia ad, reiciendis illo exercitationem quas.
          </p>
          <p>We aer all in 2024</p>
          <p>We are working on MERn STACK PROJECT</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum quia perspiciatis laboriosam alias ipsa asperiores? Labore, assumenda facilis? Exercitationem mollitia eum quaerat nam corporis voluptas labore nostrum, sapiente quisquam!
          </p>
          <p>Lorem ispum dolor sit amet</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  )
}

export default Biography