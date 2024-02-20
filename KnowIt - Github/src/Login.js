import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import gmail from './images/Gmail.png';
import image from './images/image.jpg';
import linkedin from './images/Linkedin.png';
import telegram from './images/Telegram.png';
import youtube from './images/Youtube.png';
import knowitlogo from './images/knowitlogo.png';
import { Button} from '@material-ui/core';
import { TextField } from '@mui/material';
const Login = () => {
  return (
    <div className='body1'>
        <div class="nav1">
            <div class="Box">
            <img src={knowitlogo} alt="Know it"/>
            </div>
        </div>
        <div class="h1">
            <h1 style={{color:"white",position:"absolute",left:"2.5%"}}>Know It</h1>
        </div>
        <div class="h33">
        <h3>WELCOME!</h3>
        </div>


        <div class="Outline">
        <div class="container">
            <div class="drop">
                <div class="content">
                <div class="profile">
                <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"alt="Login"/>
                </div>
            <div class="h2">
                <h2>Log&nbsp;In</h2>
            </div>
            <form>
                <TextField required label="UserName"  variant="standard" />
                <TextField required label="Password" type="password" variant="standard" />
                <Link to ='/home'><Button variant='contained' color='primary'>Login</Button></Link>
            </form>
            </div>
            </div>
        </div>
        </div>

        <div class="image">
        <img src={image} alt='TEXT'/>
        </div>
        
        <div class="media">
        <img src={gmail} alt='text'/>
        <img src={linkedin} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    </div>
  )
}

export default Login
