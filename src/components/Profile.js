import React from 'react' ;
import Profile_image from './Profile_image' ;
import Profile_detail from './Profile_detail' ;
import Profile_base from './Profile_base' ;

function Profile()
{   
    return(       
        <div className="profile-bar">
            <Profile_detail />
            <Profile_image /> 
            <Profile_base />
        </div>
    )
}

export default Profile ;