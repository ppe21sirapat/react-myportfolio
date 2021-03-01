import { motion } from 'framer-motion' ;
import { useState } from 'react';
import { BsFillChatFill } from 'react-icons/bs' ;

function Profile_image() 
{
  const [contactText,setContactText] = useState('Contact Me')

  const contactClick = () => {
      setContactText('ppe21sirapat@gmail.com')
  }
  
  return(
    <motion.div  
      className="profile-box"
      initial = {{
                  opacity: 0,
                  x: 70
                }}
      animate = {{
                  opacity: 1,
                  x: 0
                }}
      transition = {{
                      duration: 1
                   }}
    >
      <div className="profile-card">
        <div className="card-cover">
          <img src="/images/card-cover.jpg"  width="100%" height="100%" />
        </div>
        
          <img src="/images/profile_img.jpg" className="profile-img" />

        <div className="card-content">
            <p> Sirapat Sukprasert </p>
            <p> You can call me P. | 21/04/1995 </p>
        </div>

        <div className="card-footer">
            <div className="contact" onClick={() => contactClick()}> <BsFillChatFill size="25px"/>
              <p> {contactText} </p>
            </div>
        </div>
      </div>
    </motion.div>
  ) 
}

export default Profile_image ;
