import {
    Row,
    Col,
} from "reactstrap";
import Cards from "./Cards";
import React, { Component } from 'react';

import bg1 from "../../Images/bg/bg1.jpg";
import bg2 from "../../Images/bg/bg2.jpg";
import App from "../../App";

  const BlogData = [
    {
      image: bg1,
      title: "Iso 31000 Risk Management Checklist",
      subtitle: "32 questions",
      description:
        "An ISO 31000 Risk Management Checklist is a self-assessment tool to help identify, assess, and reduce external and internal factors which could harm the organization. It's a framework for designing, implementing, and maintaining a risk management system on a company-wide level, useful for internal audits.​",
      btnbg: "primary",
      link: "/RiskManagementForm"
    },
    {
      image: bg2,
      title: "ISO 9001:2015 GAP Analysis Checklist",
      subtitle: "51 questions",
      description:
        "An ISO 9001 gap analysis is an objective evaluation of your organization’s current arrangements against the ISO 9001 requirements of the standard. An ISO Gap Analysis can be an ideal place to start when implementing a new standard in your organization.",
      btnbg: "primary",
      link: "/GAPAnalysisForm"
    },
  ];

  const StaticForms = () => {
    return (
      <>
      <App/>
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
      </>
  );
};

export default StaticForms;