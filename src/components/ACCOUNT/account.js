import React, { useState, useEffect } from 'react'
import './account.css'
import NavBar2 from '../HOME/NAV BAR/navbar2'
import Footer from '../HOME/FOOTER/footer'
import Background from '../HOME/BACKGROUND/background'
import { useParams } from "react-router-dom";
function Account(match) {
    const [avatar, setAvatar] = useState(null)
    const [user, setUser] = useState({})
    const { id } = useParams();
    function uploadAvatar(e) {
        const image = e.target.files[0]

        var url = URL.createObjectURL(image)

        setAvatar(url)

    }

    useEffect(() => {
        fetch('http://localhost:3000/accounts/BLVRU$R220012022225232431')
            .then(response => response.json())
            .then(json => setUser(json))
    })

    const style = {
        backgroundImage: `url(${avatar})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <section className='Account'>
            <NavBar2 />
            <Background/>
            <div className='account-body'>
                <div className='profile-pic-box'>
                    <div className='profile-pic' style={style}>  
                    </div>
                    <div id='edit-propic'>
                        {(avatar == null) ? <p className='pic-action'>Upload a profile picture</p> : <p className='pic-action'>Change profile picture</p>}
                        <input type="file" id="upload-photo" onChange={uploadAvatar} />
                    </div>
                    
                </div>
                <div className='profile'>
                    <div className='full-name'>{user.firstName} {user.lastName}</div>
                    <div className='user-name'>User Name: @{user.userName}</div>
                    <div className='user-email'>Email : {user.email}</div>
                    <div className='edit-profile'>Edit</div>
                    
                </div>
            </div>
            <div className='st-ft'><Footer /></div>

        </section>
    )
}

export default Account