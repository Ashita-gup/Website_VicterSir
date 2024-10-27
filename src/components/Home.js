import React from 'react'
import i1 from '../images/i_1.png';
import i2 from '../images/i_2.png';
import i3 from '../images/i_3.png';
import i4 from '../images/i_4.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import i6 from '../images/insta_image_website.jpg';
import i7 from '../images/X_image_website.png';
import i8 from '../images/victer_sir_home_page.jpg';


export default function Home(props) {
  return (
    <div className="container-fluid d-flex flex-column my-3 " style={{ minHeight: '100vh',gap: "300px",marginLeft: '0px',paddingLeft: '0px',marginRight: '0px',paddingRight: '0px'}}>
    <div className="container row mx-5 my-4 d-flex " style={{marginLeft: '0px',paddingLeft: '0px'}} >

    <div className="container col-md-4 my-3 " style={{marginLeft: '0px',paddingLeft: '0px'}}>
    <div className="card" style={{borderColor: props.mode === 'light' ? '#fef9f7' : '#4d4c4b'}}>
  <img src={i8} className="card-img-top" alt="..." />
  <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: props.mode === 'light' ? '#fef9f7' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white',borderColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',paddingBottom : '0px'}}>
    <h4 className="card-title" style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Dr. P. Victer Paul</h4>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Assistant Professor</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Faculty-in-Charge
    (Coding and Internships)</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Computer Science and Engineering</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Indian Institute of Information Technology Kottayam</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>(An Institution of National Importance,

Ministry of Education, Govt. of India)</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Valavoor P.O, Pala, Kottayam - 686635, Kerala, India.</p>
    <p className="card-text" style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Email:</p>
    <p style={{fontSize : "0.97em",fontFamily: '"Lora", serif',fontWeight: 600}}>Hello @: 00 91 04822202165</p>
  </div>
  <div className="card-footer d-flex justify-content-around">
        <a href="https://www.facebook.com/victer.paul.9" style={{ color: '#3b5998' }}>
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
        <a href="https://x.com/victer25" style={{ color: '#1DA1F2' }} >
          <img src={i7} alt="X" style={{ width: '1.2em', height: '1.2em' }} />
        </a>
        <a href="https://www.instagram.com/victer_paul/" className="instagram-icon icon">
          <img src={i6} alt="Instagram" style={{ width: '1.2em', height: '1.2em' }}/>
        </a>
        <a href="https://www.linkedin.com/in/dr-p-victer-paul-5ab77255/" style={{ color: '#0077b5' }} className="icon" >
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.youtube.com/user/victerpaul" style={{ color: '#FF0000' }}>
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
</div>
    </div>



    <div className="container col-md-6 ">
      <br></br>
    <blockquote className="blockquote mb-0 text-center">
      <p style={{fontFamily: '"Cinzel", serif',fontWeight: 600}}>A teacher presents the past,</p>
      <p style={{fontFamily: '"Cinzel", serif',fontWeight: 600}}>reveals the present and</p>
      <p style={{fontFamily: '"Cinzel", serif',fontWeight: 600}}>creates the future.</p>
      <footer className="blockquote-footer" style={{fontFamily: '"Allura", cursive',fontSize: "1.5em",color: props.mode === 'light' ? 'black' : 'white',fontWeight: 500 }}> Anonymous</footer>
    </blockquote>
    <br></br>
    <br></br>
    <br></br>
    <h2 style={{fontFamily: '"Old Standard TT", serif',fontWeight: 600}}>Welcome,</h2><br></br>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 600}}>Dr. P. Victer Paul is working as Assistant Professor in the Department of Computer Science and Engineering at Indian Institute of Information Technology Kottayam, Kerala, India, an Institute of National Importance of India.</p><br></br>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 600}} className="my-3">He has completed his Ph.D. in the Department of Computer Science (2015) from Pondicherry Central University, Pondicherry, India. He has done his B.Tech. in Information Technology (2007) from SMVEC and M.Tech. in Network and Internet Engineering (2011) from Pondicherry Central University, Pondicherry, India.</p><br></br>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 600}} className="my-3">He is a recipient of eminent INSPIRE fellowship from Department of Science and Technology, New Delhi. He is a University Gold medalist and University Rank holder in M.Tech and B.Tech studies respectively. He has also received “TCS Best Student Award 2010” from TCS for academic excellence at Pondicherry Central University, Puducherry.</p><br></br>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 600}} className="my-3">He has 8+ years of academic & industrial experience and published over 90 research articles in various International Journals & Conferences. Currently, he is working in the fields of Optimization algorithms, Cloud Computing and Data Analytics.</p>
    </div>




    <div className="container col-md-2 d-flex flex-column my-4 justify-content-end  " style={{paddingRight: "0px",marginRight: "0px"}} >
     
      <div className="card mb-3 my-2"style={{width: "18rem"}} >
  <div className="card-body" style={{padding: 0}}>
    <img src={i1} className="card-img-top img-fluid" alt=""/>
  </div>
</div>
<br></br><br></br>
<div className="card text-center mb-3 my-4" style={{width: "18rem"}}>
  <div className="card-body" style={{padding: 0}}>
    <img src={i2} className="card-img-top img-fluid" alt=""/>
  </div>
</div>
<br></br><br></br>
<div className="card text-center mb-3 my-4" style={{width: "18rem"}}>
  <div className="card-body" style={{padding: 0}}>
   <img src={i3} className="card-img-top img-fluid" alt=""/>
  </div>
</div>
<br></br><br></br>
<div className="card text-end my-4" style={{width: "18rem"}}>
  <div className="card-body" style={{padding: 0}}>
    <img src={i4} className="card-img-top img-fluid" alt=""/>
  </div>
</div>
    </div>
    </div>
    </div>
  )
}
