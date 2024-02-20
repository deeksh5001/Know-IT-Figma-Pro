import React from 'react'
import './Register.css'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';


const Register = () => {
  return (
    <div class="body3">
<Link to='/home'>
    <ButtonGroup>
    <Button style={{position:"relative",bottom:"310px",right:"250px"}} startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button>
    </ButtonGroup>
</Link>
     
  <div class="container2">
    <div class="title">Registration</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name"  required/>
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" />
          </div>
          <div class="input-box">
            <span class="details">College Name</span>
            <input type="text" placeholder="Enter your college name" />
          </div>
          <div class="input-box">
            <span class="details">Degree</span>
            <input type="text" placeholder="Enter the degree pursued" />
          </div>
          <div class="input-box">
            <span class="details">Year of studying</span>
            <input type="text" placeholder="Enter the Year of studying" />
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <br/>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-4" required/>
          <input type="radio" name="gender" id="dot-5"/>
          <input type="radio" name="gender" id="dot-6"/>
          <span class="gender-title">Event type</span>
          <div class="category">
            <label for="dot-4">
            <span class="dot four"></span>
            <span class="gender">Competitions</span>
            </label>
            <label for="dot-5">
            <span class="dot five"></span>
            <span class="gender">Workshops</span>
            </label>
            <label for="dot-6">
            <span class="dot six"></span>
            <span class="gender">College Festivals</span>
            </label>
          </div>
          
        </div>
        <br/>
        <br/>
        <div class="button">
        <Button onClick={()=>{ alert('Registered Successfully'); }} style={{ background:" -webkit-linear-gradient(135deg, #71b7e6, #9b59b6)", transform:"scale(0.99)",width:"120px",height:"50px" ,fontSize:"larger",border:"3px solid transparent"}}>Register</Button>
        </div>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Register
