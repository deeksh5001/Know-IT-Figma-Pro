import React from 'react'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
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
import knowitlogo from './images/knowitlogo.png';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import './Hackathon.css'

const theme=createTheme({
  palette:{
    primary:{
    main:'#f1f1f2',
  },
  },
});


const Competition = () => {
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
      <Link to='/home'><div class="logo">
        <img src={knowitlogo} alt='text'/>
      </div>
      <h1 style={{color:"white"}}>Know it</h1>
      </Link>
      

      <div className='nav-container'>
        <nav>
        <ul>
        <li><Link to='/competition'><img src={c_icon} alt='text'/>COMPETITIONS&nbsp;</Link></li>
        <li><Link to='/hackathon'><img src={h_icon} alt='text'style={{width:"33px"}}/>HACKATHONS&nbsp;</Link></li>
        <li><Link to='/workshop'><img src={w_icon} alt='text' style={{width:"33px"}}/>WORKSHOPS&nbsp;</Link></li>
        <li><Link to='/festival'><img src={cf_icon} alt='text'/>COLLEGE FESTIVALS&nbsp;</Link></li>
        <ThemeProvider theme={theme}>
        <li><Link  onClick={handleClick}><img src={p_icon} alt='text' style={{position:"relative",top:"7px"}}/>MY PROFILE</Link></li>
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
        <Typography sx={{ p:4 }}>
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

        <h5 style={{textAlign:"center"}}>UPCOMING&nbsp;COMPETITIONS</h5><br/>
  
        <h6 style={{textAlign:"center"}}>Offline Competitions</h6>
        <br/><br/>

        <div class="container1">
        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/63917f0992d12_the-ultimate-rewind.png?d=1920x557" alt='t'/>
            <h3>The Ultimate Rewind</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>ICFAI Business School, Hyderabad</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>25 days left</p><br/>
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
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6392301e7ed44_talentstrat.png?d=1920x557" alt='t'/>
            <h3>TalentStrat</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>Indian Institute of Management,Kozhikode</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>16 days left</p><br/>
            <div class="x">
              <Link to='/register'>
              <Button color='primary' variant='contained'>
                    Register
              </Button>
              </Link>
            </div>
        </div>



        <div class="card1">
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6390e38e64541_ad-ancient.jpeg?d=1920x557" alt='t'/>
            <h3>Ad-Ancient</h3>
            <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"27px",height:"22px"}}/>ICFAI Business School, Hyderabad</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>26 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(225, 204, 159)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>
        </div>

        <br/><br/>
        <br/><br/>
        <br/><br/>
        <h6 style={{textAlign:"center"}}>Online Competitions</h6>


        <div class="container1" style={{paddingTop:"55px"}}>
        <div class="card1">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_10_HR_Concepts_And_Terms.jpg" alt='t'/>
            <h3>House of HR</h3>
            <p>Transcend 2023 Pre Buzz Events</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>7 days left</p><br/>
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
            <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6390e0b51d254_cesim-elite-optimus.png?d=1920x557" alt='t'/>
            <h3>Cesim Elite: Optimus</h3>
            <p>Backwaters'23</p>
            <p><CurrencyRupeeIcon style={{position:"relative",top:"3px"}}/>Free Registration!</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>16 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(106, 162, 125)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
            <br/>
        </div>

        <div class="card1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S2VBPsMdvtqufRdtxVRshj3j13eJdVzw4g&usqp=CAU" alt='t'/>
            <h3>Shoot-E-Preneur</h3>
            <p>Universal Business School, New Delhi</p>
            <p>Registration Fee:<CurrencyRupeeIcon style={{position:"relative",top:"3.5px"}}/>100</p>
            <p><AccessTimeIcon style={{position:"relative",top:"3.5px"}}/>4 days left</p><br/>
            <div class="x" style={{backgroundColor:"rgb(76, 194, 219)"}}>
            <Link to='/register'>
            <Button color='primary' variant='contained'>
                    Register
            </Button>
            </Link>
            </div>
        </div>
        </div>

        <br/><br/>
        <br/><br/>

        <div class="media1">
        <img src={gmail} alt='text'/>
        <img src={linkedin} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>

    </div>
    
  )
}

export default Competition
