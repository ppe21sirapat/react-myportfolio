import React from 'react' ;
import Zoom from 'react-reveal/Zoom' ;

function Skill() 
{
    return(
        <Zoom>
        <div className="skill">
            <div className="skill-icon"> 
                <p style={{fontSize:"72px",marginTop:"30px",marginLeft:"50px"}}> Skill </p>
                <div className="skill-bar-box">
                    <div className="skill-bar">  <div className="skill-value" style={{width:"80%",height:"100%",backgroundColor:"crimson"}}></div> </div>
                    <div className="skill-bar"> <div className="skill-value" style={{width:"60%",height:"100%",backgroundColor:"orange"}}></div> </div>
                    <div className="skill-bar"> <div className="skill-value" style={{width:"75%",height:"100%",backgroundColor:"dodgerblue"}}></div> </div>
                    <div className="skill-bar"> <div className="skill-value" style={{width:"45%",height:"100%",backgroundColor:"lightseagreen"}}></div> </div>
                </div>
                <div className="skill-item">
                    <img src="/images/html-5.png" width="100px" height="100px"/>
                    <img src="/images/css.png" width="100px" height="100px"/>
                    <img src="/images/php.png" width="100px" height="100px"/>
                    <img src="/images/database.png" width="100px" height="100px"/>
                    <img src="/images/adobe-ps.png" width="100px" height="100px"/>
                    <img src="/images/adobe-ai.png" width="100px" height="100px"/>
                </div>
            </div>
            <div className="skill-detail">
                <Zoom right delay={500} duration={1000}>
                <div className="skill-detail-box"> 
                    <div className="skill-detail-header">
                       <div className="header-text"> <h2> Programming </h2> </div>
                    </div>
                    <p style={{marginTop:"50px"}}> - HTML / CSS (Responsive Web Design) </p>
                    <p> - PHP / SQL (CRUD to database,MySQL) </p>
                    <p> - Javascript (Jquery,AJAX,React) </p>
                    <p> - GIT (Basic Git Command)</p>
                </div>
                </Zoom>
                <Zoom right delay={1500} duration={1000}>
                <div className="skill-detail-box">
                    <div className="skill-detail-header">
                        <div className="header-text"> <h2> Graphic </h2> </div>
                    </div>
                <p style={{marginTop:"50px"}}> - Photoshop (Diecut/Retouch image) </p>
                <p> - Illustrator (Draw/Draft vector image) </p>
                </div> 
                </Zoom>
            </div>
        </div>
        </Zoom>
    )
}

export default Skill ;