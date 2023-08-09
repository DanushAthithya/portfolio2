import React, { useState,useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "./logo.png";


const Sec5 = () => {

  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright ">
          <h3>Copyright 2023 © DARK</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Danush Athithya</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons ">
              <a
                href="https://github.com/DanushAthithya"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineGithub size={30} style={{backgroundColor:"white",borderRadius:"50%"}} />
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="https://www.linkedin.com/in/danush-athithya-439406213/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn size={30} style={{color:"black",padding:"10%",backgroundColor:"white",borderRadius:"10%"}}/>
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="mailto:danushathithya.24cs@licet.ac.in"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineMail size={30} style={{color:"black",padding:"10%",backgroundColor:"white",borderRadius:"50%"}}/>
              </a>
            </li>
            <li className="social-icons ">
              <a
                href="tel:9884439612"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlinePhone size={30} style={{color:"black",padding:"10%",backgroundColor:"white",borderRadius:"50%"}}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/danushathithya_rk/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineInstagram size={30} style={{color:"black",padding:"10%",backgroundColor:"white",borderRadius:"50%"}}/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Sec5;
