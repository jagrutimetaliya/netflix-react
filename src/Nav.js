import React,{useState, useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false)
    const transitionNavBar = () => {
        if(window.scrollY > 100 ){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" title="logo" width="200px"/>
            <img className="nav__avtar" src="https://www.clipartkey.com/mpngs/m/46-461682_kawaii-puccioso-cute-love-japan-cute-chibi-dinosaur.png" alt="avtar" title="avtar" width="200px"/>
            </div>
        </div>
    )
}

export default Nav
