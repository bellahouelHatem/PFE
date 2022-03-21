import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardGroup,
    Button,
    Row,
    Col,
} from "reactstrap";
import Cards from "./Cards";
import React, { Component } from 'react';

import bg1 from "../Images/bg/bg1.jpg";
import bg2 from "../Images/bg/bg2.jpg";

  const BlogData = [
    {
      image: bg1,
      title: "Safety standards Form",
      subtitle: "34 questions",
      description:
        "We can add description if needed",
      btnbg: "primary",
      link: "/SafetyStandardsForm"
    },
    {
      image: bg2,
      title: "Lets be simple blog",
      subtitle: "2 comments, 1 Like",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      btnbg: "primary",
      link: "/SafetyStandardsForm"
    },
  ];

  const StaticForms = () => {
    return (
        <div>
            <h1 className="mb-3">Form Cards</h1>
            <Row>
            {BlogData.map((blg, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
                <Cards
                    image={blg.image}
                    title={blg.title}
                    subtitle={blg.subtitle}
                    text={blg.description}
                    link={blg.link}
                    color={blg.btnbg}
                />
            </Col>
            ))}
            </Row>
      </div>
  );
};

export default StaticForms;