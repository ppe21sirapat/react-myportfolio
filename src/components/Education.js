import React from 'react' ;
import Zoom from 'react-reveal/Zoom' ;
import Bounce from 'react-reveal/Bounce' ;
import RubberBand from 'react-reveal/RubberBand' ;

function Education()
{
        return(
            <Zoom>
            <div className="education">
                <div className="education-timeline">
                    <p style={{fontSize:"72px",marginTop:"30px",marginLeft:"50px"}}> Education </p>
                    <div className="line"> 
                        <RubberBand delay={1000} duration={1000}>
                            <div className="line-point-1">

                            </div>
                        </RubberBand>
                        <RubberBand delay={2000} duration={1000}>
                            <div className="line-point-2">

                             </div>
                        </RubberBand>
                    </div>
                </div>

                <div className="education-detail">
                    <div className="education-text">
                        <Bounce left delay={1500} duration={1000}>
                        <div className="time"> 
                            <p> 2010 - 2013 </p>
                            <p> St.Joan of Arc catholic high school <br/> (Major: Art-math) </p>
                        </div>
                        </Bounce>
                        <Bounce left delay={2500} duration={1000}>
                        <div className="time">
                            <p> 2013 - Present </p>
                            <p> Srinakharinwirot University <br/> (Major: Computer For Communication) </p>
                        </div>
                        </Bounce>
                    </div>
                </div>
            </div>
            </Zoom>
        )
}

export default Education ;