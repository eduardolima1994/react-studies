import React from "react";

export default function News(props){
    return(
        <section>
            <p>NOTÍCIAS</p>
            <p>Novos casos de covid: {props.casos}</p>
        </section>
    )
}