import React, { useState } from "react";
import { Button } from "./Button";
import '../App.css';
import './HeroSection.css'
// import modal video
import ModalVideo from 'react-modal-video';
import '../modalVideo.scss';

function HeroSection() {

  const [isOpen, setOpen] = useState(false);


  return (
  
    <div className="home hero-container">
      {/* <video src="./videos/video-2.mp4" autoPlay loop muted /> */}
      
      <h1>ADVETURE AWAITS</h1>
      <p>What are you waiting for?</p>

      <div className="hero-btns">
        <Button
          className="btns"
          to="/sign-up"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
 
        <Button
          className="btns"
          to='#'
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => setOpen(true)}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>

        {/* modal video */}
        <ModalVideo
              channel='youtube'
              autoplay
              isOpen={isOpen}
              videoId='nLeiVZ9BDKA'
              onClose={() => setOpen(false)}
            />
      </div>
    </div>
  );
}

export default HeroSection;
