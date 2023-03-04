
import React from 'react'
import Onboarding from '././Onboarding.gif'
import './front.css'
const Front = () => {
  return (
    <div>
<div className='containers' >

<p className='slogan'>Innovate; Ideate ; Implement; <br></br>
<span className='sub-text'>
Create Meaningful IP within 60 Days</span></p>

<img src='https://i.ibb.co/8Yy7j9R/Onboarding.gif'style={{height:680,justifyContent:"flex-end",paddingRight:100}}   ></img>

</div>
<div style={{display:"flex",justifyContent:"center"}} >
<button className="btn">Contact us</button>
<button className="btn1">Read more... <img src="https://www.arved.it/wp-content/uploads/2020/05/scroll-down.gif" style={{width:29,marginLeft:0,marginRight:3, flexDirection:"row"}} /></button>

</div>
</div>
  )
}

export default Front