import React from "react";
import HomeBG from '../../assets/HomeBG.png';
import Footer from "../Footer";
import Navbar from '../Navbar';
import './Home.css';

export default function Home(){
    
    return (
        <div>
            <Navbar />
            <div className="homeContainer"  style={{ backgroundImage: `url(${HomeBG})` }} >
                <h1>You got the travel plans, we got the travel vans</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <button>Find Your Van</button>
            </div>
            <Footer />
        </div>
        
    )
}