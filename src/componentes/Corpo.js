import React from 'react'
import News from './News'

export default function Corpo(){
    const num = '300'
    return(
        <section>
            <News casos={num}/>
            <News casos={num}/>
            <News casos={num}/>
        </section>
    )
}