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
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { ButtonGroup } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import knowitlogo from './images/knowitlogo.png'
import './Hackathon.css';

const theme=createTheme({
  palette:{
    primary:{
    main:'#f1f1f2',
  },
  },
});

const Hackathon = () => {
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
  
    <div class="whole3">
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button startIcon={<LogoutOutlinedIcon/> } variant='contained' color='primary'>Logout</Button>
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
       
        <h5 class="h55" style={{textAlign:"center"}}>UPCOMING&nbsp;HACKATHONS</h5><br/>
    <h6 class="h66 "style={{textAlign:"center"}}>Offline Hackathons</h6><br/>

    <br/><br/><br/>

    <div class="container1">
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/63930acae9e1c_bitathon.png?d=1920x557" alt='t'/>
            <h3>Bitathon</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Goa Institute of Management,Goa</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>29 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(103, 142, 135)"}}>
            <Link to='/register2'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>




        <div class="card1">
            <img src="https://jithack-2022.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F345ef08b7f424aceae18fc8d9d05634a%2Fassets%2Fcover%2F151.png&w=1440&q=100" alt='t'/>
            <h3>JIT Hack</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Jyothi College of Technology,Karnataka</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>8 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(13, 8, 57)"}}>
            <Link to='/register2'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>

        <div class="card1">
            <img src="https://techacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fc4bf626538a645aea8e67809e91f7e37%2Fassets%2Fcover%2F115.png&w=1440&q=100" alt='t'/>
            <h3>TecHacks 3.0</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Chitkara University,Punjab</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>18 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(59, 91, 197)"}}>
            <Link to='/register2'>
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
    <h6 class="h66" style={{textAlign:"center"}}>Online Hackathons</h6>
    <div class="container1" style={{paddingTop:"60px"}}>
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/638dfaee3d871_capture-the-flag.png?d=1920x557" alt='t'/>
            <h3>Capture the Flag</h3>
            <p>Shaastra 2023</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>1 month left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(225, 204, 159)"}}>
            <Link to='/register2'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6391a8f5a9636_pyhack-22-enhancing-productivity-one-program-at-a-time.png?d=1920x557" alt='t'/>
            <h3>Py.Hack ’22</h3>
            <p>Cohesive</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>18 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(202, 104, 77)"}}>
            <Link to='/register2'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/638db4e25d370_tata-crucible-hackathon-2022.jpeg?d=340x195" alt='t'/>
            <h3>Tata Crucible Hackathon 2022</h3>
            <p>Tata</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3.5px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>22 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(208, 195, 75)"}}>
            <Link to='/register2'>
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

export default Hackathon
