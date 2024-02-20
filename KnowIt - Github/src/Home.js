import React from 'react';
import './App.css';
import gmail from './images/Gmail.png';
import linkedin from './images/Linkedin.png';
import telegram from './images/Telegram.png';
import youtube from './images/Youtube.png';
import c_icon from './images/c_icon.png';
import h_icon from './images/h_icon.png';
import w_icon from './images/w_icon.png';
import cf_icon from './images/cf_icon.png';
import p_icon from './images/p_icon.png';
import knowitlogo from './images/knowitlogo.png';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


const theme=createTheme({
    palette:{
      primary:{
      main:'#f1f1f2',
    },
    },
});
const Home = () => {
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
    <div class="whole">

        <div class="logo">
            <img src={knowitlogo} alt='text'/>
        </div>

        <h1>Know it</h1>

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
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button startIcon={<LogoutOutlinedIcon/> } variant='contained' color='primary'>Logout</Button>
        </ButtonGroup>
        </Link>
        </Typography>
        </Popover>
        </ul>
        </nav>
        </div>

        <div class="innovation">
            <img src="https://245.tech/wp-content/uploads/2022/04/163-scaled.jpg" alt='s'/>
            <h5 style={{position:"absolute",top:"34%",left:"60%",textAlign:"right",lineHeight:"60px"}}>We connect People with People,<br/> People with ideas and<br/> People with Opportunities.</h5>
        </div>

        <h4 style={{color:"#180a82"}}><br/>&nbsp;&nbsp;&nbsp;&nbsp;Techno-PediaLearn A to Z of the coding world with this to-the-point programming compilation!</h4>
        <br/>
        <br/>
        <br/>



        <div className='row'>

            <div className='card' style={{backgroundColor:"#f7c8e2"}}>
            <img src='https://images.hiverhq.com/blog/wp-content/uploads/2017/04/tr:h-360,w-362,pr-true,cm-pad_resize,bg-FFF4F6/Customer-feedback-1-1.jpg'style={{width:"245px",borderRadius:"15px"}} alt='t'/>
            <p style={{fontSize:"22px"}}>Rate your experience with us!</p>
            <Rating name="size-large" defaultValue={0} size="large" />
            </div>

            <div class="card" style={{background:"#B0F1F6"}} >
            <img src='https://dipl-pariwisata.usu.ac.id/images/about-us-title-2.png' style={{width:'300px',borderRadius:'15px'}} alt='t'/>
            <p style={{fontSize:"22px"}}>KnowIt enables companies to engage with students in an interactive way to discover and assess the best talent through non-tech and skill-based assessments, hackathons and other gamified engagements like competitions, workshops,etc.</p>
            </div>

            <div class="card" style={{backgroundColor:"rgb(240, 175, 248)"}}>
            <img src='https://i.pinimg.com/736x/55/ec/01/55ec010abf9255f63b0082e8fbcd5e33.jpg' style={{width:"225px",borderRadius:"15px"}} alt='t'/>
            <p style={{fontSize:"22px",marginBottom:"10px"}}>Subscribe to our NewsLetter to get more Updates!</p>
            <Button variant="contained" color="secondary" onClick={()=>{ alert('Thanks for Subscribing! Watch out for updates in your mail! :)'); }}>Subscribe</Button>
            </div>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <h4 style={{textAlign:"center"}}>Participate</h4><br/>
        <p style={{textAlign:"center"}}>EXPLORE ALL OUR EVENTS!</p><br/>

        <div className='participate'>
            
            <Link to='/competition'>
            <div className='comp'>
            <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-competitions-dance-flaticons-lineal-color-flat-icons-2.png" alt='text'/>
            <p>COMPETITIONS</p>
            </div>
            </Link>

            <Link to='/hackathon'>
            <div className='comp'>
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-hackathon-computer-science-flaticons-flat-flat-icons.png" alt='text'/>
            <p>HACKATHONS</p>
            </div>
            </Link>

            <Link to='/workshop'>
            <div className='comp'>
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-workshop-team-building-flaticons-flat-flat-icons.png" alt='text'/>
            <p>WORKSHOPS</p>
            </div>
            </Link>
            
            <Link to='/festival'>
            <div className='comp'>
            <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-music-festival-vacation-planning-guys-trip-flaticons-flat-flat-icons.png" alt='text'/>
            <p>CULTURALS</p>
            </div>
            </Link>

            <Link to='/festival'>
            <div className='comp'>
            <img src="https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/2x/external-quiz-education-smashingstocks-circular-smashing-stocks.png" alt='text'/>
            <p>QUIZZES</p>
            </div>
            </Link>

            <Link to='/festival'>
            <div className='comp'>
            <img src="https://img.icons8.com/fluency/2x/week-view.png" alt='text'/>
            <p>OTHERS</p>
            </div>

            </Link>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='nav-container'>
          <p style={{color:"white"}}>Rate us</p>
          <div class="rate">
          <input type="radio" id="star5" name="rate" value="5" />
          <label for="star5" title="5! :D">5 stars</label>
          <input type="radio" id="star4" name="rate" value="4" />
          <label for="star4" title="4! :)">4 stars</label>
          <input type="radio" id="star3" name="rate" value="3" />
          <label for="star3" title="3 :|">3 stars</label>
          <input type="radio" id="star2" name="rate" value="2" />
          <label for="star2" title="2 :/">2 stars</label>
          <input type="radio" id="star1" name="rate" value="1" />
          <label for="star1" title="1 :(">1 star</label>
          </div>

          <div class="media1" style={{position:"relative",left:"33%"}}>
          <img src={gmail}/>
          <img src={linkedin} alt='text'/>
          <img src={telegram} alt='text'/>
          <img src={youtube} alt='text'/>
          </div>
        </div>
        
        
    
            
    </div>
  )
}

export default Home
