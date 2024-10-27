import React from 'react'




export default function Research(props) {
    const commonStyle = {
        backgroundColor: props.mode === 'light' ? '#ffffff' : '#4d4c4b',
        color: props.mode === 'light' ? 'black' : 'white',
        fontWeight: 600,
        fontFamily: '"Lora", serif'
      }
  return (
    <div className="container" style={{paddingTop: '1.5em'}}>
    
    <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Research Interests</h2>
    
  
  <ul style={{fontFamily: '"Lora", serif',fontWeight: 600}}>
    <li>
  <div>
    <p>Data Analytics</p>
  </div>
  </li>
  <li>
  <div>
    <p>Optimization</p>
  </div>
  </li>
  <li>
  <div>
    <p>Cloud Computing</p>
  </div>
  </li>
  <li>
  <div>
    <p>Computer Networks</p>
  </div>
  </li>
  </ul>
  

       
    
    <br></br>
    <div className="container my-4" >
        <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Research Supervision</h2>
        <div className="table-responsive my-4">
    <table className="table table-bordered text-center" style={{borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}}>
            <thead>
                <tr>
                    <th className="col-1" style={commonStyle}>S. No.</th>
                    <th className="col-2" style={commonStyle}>Degree</th>
                    <th className="col-3" style={commonStyle}>Completed</th>
                    <th className="col-4" style={commonStyle}>Ongoing</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td style={commonStyle}>1</td>
                    <td style={commonStyle}>Ph.D.</td>
                    <td style={commonStyle}> - </td>
                    <td style={commonStyle}>3</td>
                </tr>
                <tr>
                    <td style={commonStyle}>2</td>
                    <td style={commonStyle}>B.Tech (Final Project)</td>
                    <td style={commonStyle}>16</td>
                    <td style={commonStyle}>1</td>
                </tr>
                <tr>
                    <td style={commonStyle}>3</td>
                    <td style={commonStyle}>B.Tech (Hons. Project)</td>
                    <td style={commonStyle}>2</td>
                    <td style={commonStyle}>1</td>
                </tr>
                <tr>
                    <td style={commonStyle}>4</td>
                    <td style={commonStyle}>M.Tech</td>
                    <td style={commonStyle}>6</td>
                    <td style={commonStyle}>1</td>
                </tr>
                <tr>
                    <td style={commonStyle}>5</td>
                    <td style={commonStyle}>Summer Internships</td>
                    <td style={commonStyle}>8</td>
                    <td style={commonStyle}>7</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    <div className="container" >
        <h2 style={{fontFamily: '"Lora", serif',fontWeight: 500}}>Publications</h2>
        <h5 style={{fontFamily: '"Old Standard TT", serif'}}>Research Publications (as of Jul’24)</h5>
        <div className="table-responsive my-4" >
    <table className="table table-bordered text-center " style={{borderColor: props.mode === 'light' ? '#D3D3D3' : '#4d4c4b'}}>
        <tbody>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>International Journal</td>
                    <td className="col-4" style={commonStyle}>35</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>International Conference</td>
                    <td className="col-4" style={commonStyle}>32</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>Book Chapters</td>
                    <td className="col-4" style={commonStyle}>11</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>SCI indexed</td>
                    <td className="col-4" style={commonStyle}>7</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>SCOPUS indexed</td>
                    <td className="col-4" style={commonStyle}>69</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>SCOPUS Citations</td>
                    <td className="col-4" style={commonStyle}>908 (h-index: 18)</td>
                </tr>
                <tr>
                    <td className="col-8 fw-bolder" style={commonStyle}>Google Scholar Citations</td>
                    <td className="col-4" style={commonStyle}>1381 (h-index: 20)</td>
                </tr>
                
            </tbody>
        </table>
        </div>
        <p style={{fontWeight: 600,fontFamily: '"Lora", serif'}}>Scopus Author ID - 37020706700</p>
        <p style={{fontWeight: 600,fontFamily: '"Lora", serif'}}>ResearcherID - J-9089-2014</p>
        <p style={{fontWeight: 600,fontFamily: '"Lora", serif'}}>Google Scholar ID - 8gAYw4MAAAAJ</p>
        <p style={{fontWeight: 600,fontFamily: '"Lora", serif'}}>For a complete Publication list, please visit, <a href="https://www.scopus.com/authid/detail.uri?authorId=37020706700">Scopus</a> (or) <a href="https://scholar.google.co.in/citations?user=8gAYw4MAAAAJ&hl=en">Google Scholar</a></p>
    </div>
    </div>
  )
}
