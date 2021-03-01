import React from 'react' ;
import { motion } from 'framer-motion' ;

function Profile_base()
{
    return(
        <div className="profile-base">
            <div className="base-item">
                <motion.div // Code img
                    initial = {{
                                    opacity: 0,
                                    x: -300
                              }}
                    animate = {{
                                    opacity: 1,
                                    x: 0
                              }}
                    transition = {{
                                    duration: 2
                                 }}
                >
                    <img src="/images/code.png" width="100px" height="100px" className="img-code"/>
                </motion.div>

                <motion.div // Web img
                    initial = {{
                                    opacity: 0,
                                    scale: 0 
                              }}
                    animate = {{
                                    opacity: 1,
                                    scale: 1
                              }}
                    transition = {{
                                    duration: 2
                                 }}
                >
                    <img src="/images/web.png" width="125px" height="125px" className="img-web"/>
                </motion.div>

                <motion.div //Desktop img
                    initial = {{ 
                                    opacity: 0,
                                    y: -300
                               }}
                    animate = {{
                                    opacity: 1,
                                    y: 0
                              }}
                    transition = {{
                                    duration: 1
                                 }}
                >
                    <img src="/images/desktop.png" width="250px" height="250px" className="img-desktop"/>
                </motion.div>

                <motion.div // Window img
                    initial = {{
                                    opacity: 0,
                                    x: 300 
                              }}
                    animate = {{
                                    opacity: 1,
                                    x: 0
                              }}
                    transition = {{
                                    duration: 1.5
                                 }}
                >
                    <img src="/images/window.png" width="100px" height="100px" className="img-window"/> 
                </motion.div>

                <motion.div // Smartphone img
                    initial = {{
                                    opacity: 0,
                                    y: -300 
                              }}
                    animate = {{
                                    opacity: 1,
                                    y: 0
                              }}
                    transition = {{
                                    duration: 0.75
                                 }}
                >    
                    <img src="/images/smartphone.png" width="50px" height="50px" className="img-phone" />
                </motion.div>   

            </div>
            <div className="base"> </div>
        </div>   
    )           
}

export default Profile_base ;
