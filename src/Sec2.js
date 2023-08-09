import React from "react";
import { useState,useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiJira,
  DiGithub,
  DiHtml5,
  DiCss3,
  DiMysql
} from "react-icons/di";
import { SiPytorch, SiFirebase, SiTensorflow,SiC } from "react-icons/si";


const Sec2 = () => {
  
  return (
    <div className="Sec2">
      <h1 className="project-heading myfont text-orange-400 text-center pb-2">Tech Stack</h1>
      <Row className="row-box mx-auto d-block flex items-center " style={{paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiReact />
        </Col>
      </Row>
      <Row className="row-box mx-auto d-block flex items-center " style={{paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons border-4">
          <SiTensorflow />
        </Col>

        <Col xs={4} md={2} className="tech-icons border-4">
          <SiFirebase />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <SiPytorch />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <SiC />
        </Col>
        <Col xs={4} md={2} className="tech-icons border-4">
          <DiMysql />
        </Col>
      </Row>
    </div>
  );
};

export default Sec2;
