import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard(props) {
  return (
    <Card className="project-card-view pb-2">
      <Card.Img variant="top" src={props.imgPath} className="proj-card-img" alt="card-img"  />
      <Card.Body>
        <Card.Title className="card-title"  style={{fontSize:"18px",textAlign:"center"}} >{props.title}</Card.Title>
        <Card.Text className="card-text" style={{ textAlign: "justify" , paddingLeft: "5vh", paddingTop: "3vh",paddingRight: "5vh",fontSize:"13px"}}>
          {props.description}
        </Card.Text>
        <Button className="flex justify-center card-button" variant="primary" style={{fontSize:"25px",marginTop:"3%"}} href={props.ghLink} target="_blank">
          <BsGithub style={{display:"inline-block"}} /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;