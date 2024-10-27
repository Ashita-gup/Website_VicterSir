import React from 'react'

export default function Projects(props) {
  
  return (
    
       
        <div className="container my-4">
        <h3 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Research Funding Sanctioned
        </h3>
        <div className="container my-3 table-responsive table-bordered text-center">
        <table className="table table-hover table-bordered " style={{fontFamily: '"Lora", serif',fontWeight: 600,borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}} >
  <thead>
    <tr>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>S.No</th>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Project Funding
      Agency</th>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Project Title </th>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Funding in Rs.</th>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Status</th>
      <th scope="col" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>1</th>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>SERB CRG, Govt. of India</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>AI-based Mobility Model for AFVs to optimize route using the prevailing Fuel Infrastructure in India</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>23 Lakhs</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>On-going</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>PI</td>
    </tr>
    <tr>
      <th scope="row" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>2</th>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>MSME, Govt. of India </td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>AutoHire - An AI- Based Interview Solution</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>15 Lakhs</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>On-going</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>PI</td>
    </tr>
    <tr>
      <th scope="row" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>3</th>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>AICTE ATAL </td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>AICTE ATAL FDP on Sensor Data Analytics</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>93000</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Completed </td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Coordinator</td>
    </tr>
    <tr>
      <th scope="row" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>4</th>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Volkswagen Germany, German Centre for Artificial Intelligence</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Foundation AI FORA, Joint Collaborative Project of 5 nations (Germany, Estonia, USA, China, India) </td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>250 Lakhs</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>In progress</td>
      <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Team Member</td>
    </tr>
  </tbody>
</table>
</div>

        <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Consultancy</h2>
        <div className="table-responsive my-4">
    <table className="table table-bordered text-center " style={{fontFamily: '"Lora", serif',fontWeight: 600,borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}}>
            <thead>
                <tr>
                    <th className="col-1" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>SN</th>
                    <th className="col-2" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Client Name</th>
                    <th className="col-3" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Topic of Work</th>
                    <th className="col-4" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Cost</th>
                    <th className="col-5" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Tenure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>1</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>NeST Digital, Ernakulam</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Technical Training in Enterprise Software and Data Engineering</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>~ 3 Lakhs INR</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Completed 
                    (6 Months)</td>
                </tr>
            </tbody>
        </table>
        </div>
        <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Patents</h2>
        <div className="table-responsive my-4">
    <table className="table table-bordered text-center " style={{fontFamily: '"Lora", serif',fontWeight: 600,borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}}>
            <thead>
                <tr>
                    <th className="col-1" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>SN</th>
                    <th className="col-2" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Patent</th>
                    <th className="col-3" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Date of
                    Application</th>
                    <th className="col-4" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>National /
                    International</th>
                    <th className="col-5" style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>1</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Smart Pulse Diagnostic Kit
                    (Appl No: 202241040965)</td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>August 2022 </td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Indian Patent </td>
                    <td style={{backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',color: props.mode === 'light' ? 'black' : 'white'}}>Published</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}
