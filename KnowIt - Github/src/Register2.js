import React from 'react'
import './Register.css'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'

const Register2 = () => {
  return (
    <div class="body3" style={{background:"-webkit-linear-gradient(135deg,#71b7e6,#59b66f)"}}>
<Link to='/home'>
    <ButtonGroup>
    <Button style={{position:"relative",bottom:"310px",right:"250px"}} startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button>
    </ButtonGroup>
</Link>
  <div class="container2" style={{height:"570px"}}>
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Team Name</span>
            <input type="text" placeholder="Enter your Team name" required/>
          </div>
          <div class="input-box">
            <span class="details">Team Leader's Name</span>
            <input type="text" placeholder="Enter your Leader's name" required/>
          </div>
          <div class="input-box">
            <span class="details">Team Leader's Email</span>
            <input type="text" placeholder="Enter your Leader's email" required/>
          </div>
          <div class="input-box">
            <span class="details">Team Leader's Phone Number</span>
            <input type="text" placeholder="Enter your Leader's number" required />
          </div>
          <div class="input-box">
            <span class="details">College Name</span>
            <input type="text" placeholder="Enter your college name" required/>
          </div>
          <div class="input-box">
            <span class="details">Degree</span>
            <input type="text" placeholder="Enter the degree pursued" required/>
          </div>
          <div class="input-box">
            <span class="details">Team Size</span>
            <input type="text" placeholder="2-6*" required/>
          </div>
          <div class="input-box">
            <span class="details">Your problem statement</span>
            <input type="text" placeholder="Enter your problem statement"  required/>
          </div>
          
         
        </div>
        <br/>
        <br/>
        <div class="button">
        <Button onClick={()=>{ alert('Registered Successfully'); }} style={{ background:" -webkit-linear-gradient(135deg, #71b7e6, #59b66f)", transform:"scale(0.99)",width:"120px",height:"50px" ,fontSize:"larger",border:"3px solid transparent",marginBottom:"30px"}}>Register</Button>
        </div>
        <br/>
      </form>
    </div>
  </div>
  </div>


  )
}

export default Register2
