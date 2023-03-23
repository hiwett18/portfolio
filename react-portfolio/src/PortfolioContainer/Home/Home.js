import React from "react";
import Profile from "./Profile.js";
import Footer from "./Footer/Footer.js";
import "./Home.css";
import Social from "../Social/Social.jsx";
import Skills from "../Skills/Skills.jsx";
import ProjectsPage from "../Projects/ProjectsPage.jsx";


export default function Home(){
    return (
        <div className="home-container">
            <Profile />
            <Skills />
            <ProjectsPage />
            <Social />

        </div>
    )
}