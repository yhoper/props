import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <h6>
            Nombre: {props.name}
            </h6>
            <h6>
            Edad: {props.age}
            </h6>
        </div>
    )
}

export default Saludo
