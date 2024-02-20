import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';
import c_icon from './images/c_icon.png';
import h_icon from './images/h_icon.png';
import w_icon from './images/w_icon.png';
import cf_icon from './images/cf_icon.png';
import p_icon from './images/p_icon.png';
import gmail from './images/Gmail.png';
import linkedin from './images/Linkedin.png';
import telegram from './images/Telegram.png';
import youtube from './images/Youtube.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import knowitlogo from './images/knowitlogo.png'
import { ButtonGroup } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import './Hackathon.css';

const theme=createTheme({
    palette:{
      primary:{
      main:'#f1f1f2',
    },
    },
  });

const Workshop = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


  return (
    <div className='whole2'>
      <Link to='/home'>
       <div class="logo">
            <img src={knowitlogo} alt='text'/>
        </div>
        <h1 style={{color:"white"}}>Know it</h1>
        </Link>
        <div className='nav-container'>
        <nav>
        <ul>
        <li><Link to='/competition'><img src={c_icon} alt='text'/>COMPETITIONS</Link></li>
        <li><Link to='/hackathon'><img src={h_icon} alt='text'/>HACKATHONS</Link></li>
        <li><Link to='/workshop'><img src={w_icon} alt='text'/>WORKSHOPS</Link></li>
        <li><Link to='/festival'><img src={cf_icon} alt='text'/>COLLEGE FESTIVALS</Link></li>
        <ThemeProvider theme={theme}>
        <li><Link  onClick={handleClick}><img src={p_icon} alt='text'/>MY PROFILE</Link></li>
        </ThemeProvider>

        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p:3 }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <AccountCircleSharpIcon sx={{ fontSize: 60 }}/>
        <li style={{textAlign:"center"}}>user_01</li>
        <li style={{textAlign:"center"}}>user01cbe@gmail.com</li>
        <Link to='/'>
        <ButtonGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button startIcon={<LogoutOutlinedIcon/> } variant='contained' color='primary'>Logout</Button>
        </ButtonGroup>
        </Link>
        </Typography>
      </Popover>
      </ul>
        </nav>
        </div>
        <br/>
        <div class="logo2">
        &nbsp;
            <ButtonGroup>
            <Link to='/home'><Button startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button></Link>
            </ButtonGroup>
        </div>
        
        <h5 style={{textAlign:"center"}}>UPCOMING&nbsp;WORKSHOPS</h5><br/>
   

    <h6 style={{textAlign:"center"}}>Offline Workshops</h6>
    <br/><br/><br/>

    <div class="container1">
        <div class="card1">
            <img src="https://cpimg.tistatic.com/07574419/b/5/International-Conference-on-Optical-Photonic-Engineering.png" alt='t'/>
            <h3>icOPEN 2023</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Holiday Inn,Singapore Atrium</p>
            <p>Registration Fee: $150</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>11 months left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(225, 204, 159)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>



        <div class="card1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Zt65zVcv20xvs7Ls955OrICfvamrAiAszULbWXoH0ELS247C1HACOmqj1kMROxPBc2E&usqp=CAU" alt='t'/>
            <h3>ICMAA 2023</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Royal Princess Larn Luang ,Bankok</p>
            <p>Registration fee :$220</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>2 months left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(31,125,207)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>
        
        <div class="card1">
            <img src="https://ehospice.com/wp-content/uploads/2022/03/IAPCON-2023.jpg" alt='t'/>
            <h3>IAPCON 2023</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>NIMHANS Convention Centre,Bangalore</p>
            <p>Registration fee: <CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>2000</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>2 months left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(225, 204, 159)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
   
    <h6 style={{textAlign:"center"}}>Online Workshops</h6>
    <div class="container1" style={{paddingTop:"60px"}}>
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6389b1c30dd16_cxo-summit.jpg?d=340x195" alt='t'/>
            <h3>CXO Summit</h3>
            <p>TeXLence 2022</p>
            <p>Registration fee:<CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>599</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>5 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(216, 58, 87)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/638f46608396c_technical-workshop.png?d=1920x557" alt='t'/>
            <h3>Technical Workshop</h3>
            <p>Fluxus</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>18 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(29, 19, 75)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/635c2d3c81659_digital-marketing-at-iit-bombay.png?d=340x195" alt='t'/>
            <h3>Digital Marketing Workshop</h3>
            <p>TechFest</p>
            <p>Registration Fee:<CurrencyRupeeIcon style={{position:"relative",top:"3.5px"}}/>1190</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>6 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(25, 12, 109)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="media1">
        <img src={gmail} alt='text'/>
        <img src={linkedin} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    </div>
  )
}

export default Workshop
