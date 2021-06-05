import React from 'react'

const Comentario = (props) => {
    return (
        <div class="media">
        <img class="mr-3" src={props.img} width="64px" alt="Generic placeholder image"/>
        <div class="media-body">
        <h5 class="mt-0">{props.title}</h5>
        {props.text}
        </div>
        </div>
        )
    }
    
    export default Comentario
    