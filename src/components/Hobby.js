import React from 'react' ;
import Zoom from 'react-reveal/Zoom' ;
import Flip from 'react-reveal/Flip';

const frameDot = () => {
    return(   
        <div className="frame-dot">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>  
    )
}

function Hobby() 
{
    return(
        <Zoom>
        <div className="hobby">
            <div className="hobby-icon">
                <p style={{fontSize:"72px",marginTop:"30px",marginLeft:"50px"}}> Hobby </p>
                <Zoom left delay={1000} duration={1000}>
                <p style={{fontSize:"40px",marginTop:"10px",marginLeft:"250px"}}> Photograph </p>
                </Zoom>
                <img src="/images/mirrorless.png" width="400px" height="400px" className="img-mirrorless"/>
            </div>
            <div className="hobby-detail">
                <Flip top delay={2000} duration={1000}>
                <div className="flim">
                    <div className="frame-left">
                        {frameDot()}
                    </div>
                    <div className="flim-body">
                        <div className="image-box">
                            <img src="/images/hobby/1.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/2.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/3.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/4.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/5.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/6.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/7.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/8.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/9.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/10.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/11.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/12.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/13.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/14.jpg" width="700px" height="400px"/>
                        </div>
                        <div className="image-box">
                            <img src="/images/hobby/15.jpg" width="700px" height="400px"/>
                        </div>
                    </div>
                    <div className="frame-right">
                        {frameDot()}
                    </div>
                </div>
                </Flip>
            </div>
        </div>
        </Zoom>
    )
}

export default Hobby ;