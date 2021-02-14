import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Raw from "./Raw";
import "./HomeScreen.css";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>

            <Banner/>
            <Raw/>
        </div>
    )
}

export default HomeScreen
