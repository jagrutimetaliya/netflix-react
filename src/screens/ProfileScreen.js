import React from 'react'
import {useSelector} from 'react-redux';
import {selectUser} from "../features/userSlice";
import { auth } from '../firebase';
import Nav from '../Nav'
import './ProfileScreen.css'
function ProfileScreen() {
    const user = useSelector(selectUser)
    return (
        <div className="profileScreen">
            <Nav/>
            <div className="profileScreen__body">
                <h1> Edit Profile</h1>
                <div className="profileScreen__info">
                <img className="profileScreen__avtar" src="https://www.clipartkey.com/mpngs/m/46-461682_kawaii-puccioso-cute-love-japan-cute-chibi-dinosaur.png" alt="avtar" title="avtar" width="200px"/>
                </div>
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3> Plans  </h3>
                        <p>
                            
                        </p>
                        <button onClick={() => auth.signOut()} className="profileScreen_signOut"> Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
