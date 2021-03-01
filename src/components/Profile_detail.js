import {useSpring, animated} from 'react-spring' ;
import Introduce from 'react-typing-effect' ;

function Profile_detail()
{
    const detail_animation = useSpring({
                                            from: {
                                                     opacity: 0,
                                                     width: '0%',
                                                     height: '0px'
                                                  },
                                            to: {
                                                    opacity: 1,
                                                    width:'90%',
                                                    height:'450px'
                                                }
                                      }) 

    return <animated.div className="profile-detail" style={detail_animation}>
          <div className="bar"> 
               <button className="circle-1"> </button>
               <button className="circle-2"> </button>
               <button className="circle-3"> </button>
          </div>
          <div className="tag-box">
               <p className="detail-tag"> &lt;Hello&gt; </p>
          </div>
                <div className="detail-text-box">
                    <Introduce text={'I am Sirapat Sukprasert .'} speed={100} eraseDelay={999999} className="profile-detail-text" />
                </div>
          <div className="tag-box">
               <p className="detail-tag"> &lt;/Hello &gt; </p>
          </div>                     
           </animated.div>
}

export default Profile_detail ;
