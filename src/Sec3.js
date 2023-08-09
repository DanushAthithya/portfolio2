import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "./Particle";
import water from "./asset/water.avif";
import air from "./asset/air.jpg";
import cart from "./asset/market.webp";
import crude from "./asset/crude_oill.webp";
import stock from "./asset/stock.avif";
import covid from "./asset/covid.jpeg";
import sports from "./asset/sports.png";

const Sec3 = () => {
  
  return (
      <Container  className="Sec3">
        <h1 className="project-heading myfont text-center">My Projects</h1>

        <Row className="proj-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={water}
              isBlog={false}
              title="Water Potability Prediction"
              description="Our project aims to assess water quality in a specific region by examining various physical, chemical and biological parameters."
              ghLink="https://github.com/naanmudhalvan-SI/PBL-NT-GP--1568-1680517007/tree/main"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={crude}
              isBlog={false}
              title="Crude Oil Price Prediction"
              description="A model that predicts future crude oil prices based on the
              historic data on crude oil prices and other factors."
              ghLink="https://github.com/DanushAthithya/CrudeOilPricePredictionFinal"
            />
          </Col>
          </Row>
          <Row className="proj-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={sports}
              isBlog={false}
              title="Tri2Champ"
              description="It is a commercial sports website with various functions like auth,profile setup,adding event,enrolling in event,adding images to gallery,payment etc."
              ghLink="https://www.tri2champ.com/"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={cart} 
              isBlog={false}
              title="Shopping Based Project"
              description="An application that makes our shopping experience smoother and
              faster."
            />
          </Col>
          </Row>
          <Row className="proj-row" style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="StockistAI"
              description="It is a stock prediction application that uses ML models considering parameters like historic price,volume,recession and other factors."
              ghLink="https://github.com/DanushAthithya/StockistAI"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={air}
              isBlog={false}
              title="Air Quality Index Prediction"
              description="It uses ML models to predict air quality considering factors like historic air quality index,geography of the city and other factors."
            />
          </Col>
        </Row>
      </Container>
      
  );
};

export default Sec3;
