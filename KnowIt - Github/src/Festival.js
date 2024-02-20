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
import knowitlogo from './images/knowitlogo.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
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

const Festival = () => {

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
    <div className='whole3'>
      <Link to='/home'>
      <div class="logo">
            <img src={knowitlogo} alt='text'/>
        </div>
        <h1 style={{color:"black"}}>Know it</h1>
        </Link>
        <div className='nav-container' style={{backgroundColor:" rgb(71, 3, 82)"}}>
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
        <h5 class="h55" style={{textAlign:"center"}}>UPCOMING&nbsp;COLLEGE FESTIVALS</h5><br/>
   
    <h6 class="h66" style={{textAlign:"center"}}>Offline Fests</h6>
    <br/><br/><br/>
    <div class="container1">
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638eda8469e0e_unstop_-_landing_banner_web_-_with_dates__prizes-compressed.jpg?d=1920x418" alt='t'/>
            <h3>Transcend 2023</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>SIBM,Pune</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(31,125,207)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>




        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/images/opportunity_banner/d2c-festivals/festivals_02.jpg?d=1920x557" alt='t'/>
            <h3>Konflux</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>IBS ,Mumbai</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>7 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(123, 13, 157)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dce092ee2f_dhruva_unstop_banner_unstop_logo1.png?d=1920x418" alt='t'/>
            <h3>Dhruva 2023</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>IIM, Thiruchirapalli</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(102, 20, 5)"}}>
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
    
    
    <h6 class="h66" style={{textAlign:"center"}}>Hybrid Fests</h6>
    <div class="container1" style={{paddingTop:"60px"}}>
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/63924dc4c92b4_breaking_case_6.0__5_.png?d=1920x418" alt='t'/>
            <h3>Nishtha 5.0</h3>
            <p> IIM, Tiruchirappalli</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(25, 12, 109)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dd96e6e89c_udgam_banner_2.png?d=1920x418" alt='t'/>
            <h3>UDGAM ’23</h3>
            <p>IIT, Guwahati</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(0, 2, 19)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dc3eb08846_revelation_23_consolidated_event_banners___4_.jpg?d=1920x418" alt='t'/>
            <h3>Revelation 2023</h3>
            <p>SIBM Bangalore</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3.5px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
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

export default Festival
