import React from 'react'

import img3 from '../images/victer_sir.webp';




export default function Loading(props) {
  return (
    <div className="background-container">
      <div className="content">
    <div className="container my-4">
    <div className="container">
    <div className="row">
    <div className="col-sm-3 mb-3 mb-sm-0">
      <div className="card" style={{margin: 0, padding: 0,height: "100%",objectFit: "cover",flex: 1 }}>
        <div className="card-body" style={{margin: 0, padding: 0}} >
         
          <img src={img3} className="card-img-top img-fluid" style={{objectFit: "cover",display: "block",height: "100%"}} />
          
        </div>
      </div>
    </div>
    <div className="col-sm-9">
      <div className="card" style={{backgroundColor: props.mode === 'light' ? '#f5e7e0' : '#1a1918',color: props.mode === 'light' ? 'black' : 'white'}}>
        <div className="card-body">
        
    <h3 style={{fontFamily: "'Libre Bodoni', serif",fontWeight: 700}}>Dr P. Victer Paul</h3>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Assistant Professor, Department of Computer Science and Engg.
    </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Head, Data Analytics and Business Decisions Research Group, IIITK
    </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Indian Institute of Information Technology Kottayam 
    </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Valavoor P.O, Pala </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Kottayam - 686635, Kerala, India.
    </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Email: victerpaul at iiitkottayam dot ac.in / victerpaul at gmail dot com
    </p>
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Hello @: 00 91 04822202165 (or) +91 9944913170
    <p style={{fontFamily: '"Lora", serif',fontWeight: 700}}>Scholars / Interns / Collaborators keenly interested in the core areas of research can communicate through email.
    </p>
</p>
  
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  )
}
