import React from "react";
import bg_video from "./asset/bg_video.mp4";
import "./Sec1.css";
import { useState,useEffect } from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import profile_pic from './asset/profile_pic.png';
import Tilt from 'react-parallax-tilt';
import {FaInstagram,FaLinkedin,FaPhone,FaGithub} from 'react-icons/fa';
import {CgMail} from 'react-icons/cg';
import { scroller } from "react-scroll";


const Sec1 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Computer Science Engineer", "Data Scientist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const scrollTo = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      delay: -2,
      smooth: "easeInOutQuart",
    });
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="Sec1">
      <div className="overlay"></div>
      <video src={bg_video} autoPlay muted loop />
      <div className="profile_pic">
        <Tilt>
        <img src={profile_pic}/>
        </Tilt>
      </div>
      <div className="trackVisibility">
      <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Danush Athithya`}<br/>I'm a <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm looking forward to collaborate and work on realtime projects and gain experience.</p>
                  <button onClick={() => scrollTo("Sec4")}>Let’s Connect <ArrowRightCircle size={25} /> </button>
                  <div className="hold-icons">
                  <a href="https://www.linkedin.com/in/danush-athithya-439406213/" target="_blank">
                    <FaLinkedin className="in-icons" size={40} style={{borderRadius:"20%",color: "blue", fontSize: "1.5em",backgroundColor:"white"}}/>
                  </a>
                  <a href="https://www.instagram.com/danushathithya_rk/" target="_blank">
                    <FaInstagram className="in-icons" size={40} style={{borderRadius:"20%",color: "pink", fontSize: "1.5em",backgroundColor:"white"}} />
                  </a>
                  <a href="mailto:danushathithya.24cs@licet.ac.in" target="_blank">
                    <CgMail className="in-icons" size={40} style={{borderRadius:"20%",color: "red", fontSize: "1.5em",backgroundColor:"white"}} />
                  </a>
                  <a href="tel:9884439612" target="_blank">
                    <FaPhone className="in-icons" size={40} style={{borderRadius:"20%",color: "green", fontSize: "1.5em",backgroundColor:"white"}} />
                  </a>
                  <a href="https://github.com/DanushAthithya" target="_blank">
                    <FaGithub className="in-icons" size={40} style={{borderRadius:"20%",color: "black", fontSize: "1.5em",backgroundColor:"white"}} />
                  </a>
                  </div>
              </div>}
      </TrackVisibility>
      </div>
    </div>
  );
};

export default Sec1;
