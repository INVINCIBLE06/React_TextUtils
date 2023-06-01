import React, { useState } from 'react'

export default function About()
{
    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () =>
    {
        if(myStyle.color === 'black')
        {
            setMyStyle({
                color : 'white',
                backgroundColor : 'black',
                border : '1px solid white'
            })
            setBtnText("Enable Light Mode")
        }
        else
        {
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
    return(
        <div className='container'>
            <p>I am Saurabh lalit Pande from Nagpur, Maharastra. Which is primarly known for its oranges.</p>
        </div>
    )
}; 