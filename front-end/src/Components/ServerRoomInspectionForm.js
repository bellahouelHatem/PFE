import {
  Button,
  ButtonGroup,
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
  } from "reactstrap";
  import React, { useState } from "react";
  
  const PhysicalSecurity = [
    {
      question: "1. There are no external windows",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "2. Are all windows fitted with Cyclone/security screens?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "3. Are all doors of solid core construction?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "4. Was the door closed and locked on arrival?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "5. Does the server room door have a clearly visible sign indicating that access is restricted to authorised persons only?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "6. Is there a form of controlled entry to the server room, such as a card reader?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "7. Have the audit or access control lists been checked for unauthorised persons having access to the room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "8. If yes, indicate the names of persons with unwanted access to the server room.",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "9. Do only authorised persons have access to the server room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "10. Is the server monitored by CCTV?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "11. Where is the CCTV located?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "12. Is the only access to the room through secured room/building?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "13. Does the building have 24-hour security?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
  ];

  const BuildingFacilities = [
    {
      question: "1. Does the server room have backup power?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "2. What is the run time of the generator?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "3. When was the generator last tested?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "4. Does the server room have a UPS installed?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "5. What is the brand, serial number etc of the UPS?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "6. UPS run time",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "7. Date UPS last tested",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "8. Are there any issues?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "9. Does server room have adequate air conditioning?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "10. Is there a fire suppression system?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "11. Is the suppression system gas or water based?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "12. Date system last tested",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "13. Does the room have adequate fire and environment monitoring in place?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "14. Date last tested",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "15. Is the server room located on the ground floor of building?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "16. Is the server floor higher than the floor outside the room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "17. Is electrical and electronic equipment located on raised pedestals to protect from damage during floods etc.?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "18. Is a telephone extension available in the room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "19. What is the telephone number?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "20. Is the server room free from fire hazards for example materials such as cardboard boxes and paper?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
  ];
  
  const ICTInfrastructure = [
    {
      question: "1. Are racks secured to prevent them from getting knocked over?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "2. Are racks secured against mild seismic activity??",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "3. Is adequate cabinet security ensured?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "4. Do all servers have front and rear doors fitted?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "5. Are the server doors closed and locked?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "6. Is there sufficient space between racks and walls to enable doors to be opened and work to be undertaken?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "7. What percentage of the rack capacity is currently being utilized, in percentage?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "8. Is there space for additional cabinets?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "9. Is the cabling organised and clearly labelled?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "10. Are the servers secured by passwords and inaccessible to unauthorised persons?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "11. Are the servers clearly labelled?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "12. List of the servers present",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
  ];

  const DisasterRecovery = [
    {
      question: "1. Is there an up-to-date list of ICT contacts available in the server room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "2. Are backup tapes stored in the server room?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "3. Are the tapes stored in a fire-proof?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "4. Is the backup tape safe closed and locked?",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
  ];

  const OverallAssessment = [
    {
      question: "1. Overall assessment of the physical security of the room",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "2. Overall assessment of the physical facilities in the room",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
    {
      question: "3. Overall assessment of the ICT infrastructure",
      firstChoice: "Yes",
      secondeChoice:"No",
    },
];

const Questions = [
  PhysicalSecurity,
  BuildingFacilities,
  ICTInfrastructure,
  DisasterRecovery,
  OverallAssessment,
];
const ListQuestions = [
  "Physical Security",
  "Building Facilities",
  "ICT Infrastructure",
  "Disaster Recovery",
  "Overall Assessment",
]

const d=new Date().toISOString().slice(0, 10);

function save(e)
 {
  var data = JSON.stringify(this.state.form.actions.getData('json', true))  
  var body = {form : data,
   type: this.state.type,
   titre: this.state.titre,
   dateCreation:d
  }
  fetch('http://localhost:8081/api/Form',{
    method:'POST',
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify(body)})
 .then(res=>{alert("5edmet")})
}
  
const ServerRoomInspectionForm = () => {
  /* handleElement(){}
  handleKey(){} */
  const onSubmit=()=>{
    this.setState({show:!state.show})
    //this.setState(prevState =>({show:!prevState.show}))
    //state.show=!state.show;
  };
  let state={show: true,};
  
    return (
      <div>
        <Row>
        <Col xs="12" md="8">
          <Card>
            <CardTitle tag="h1" className="border-bottom p-3 mb-0">
            Server Room Inspection
            </CardTitle>
            <CardBody>
              <Form>
                {Questions.map((qts, index) => (
                  <div>
                    <Button className="btn" color="primary" size="lg" block onClick={onSubmit}>
                      {ListQuestions[index].toString()}
                    </Button>
                    {state.show ?
                    qts.map((qt, index) => (
                      
                      <div sm="6" lg="6" xl="3" key={index} myClick={onSubmit.bind}>
                        <Card>
                          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            {qt.question}
                          </CardTitle>
                          <CardBody className="">
                            <FormGroup check>
                                <Input name="radio1" type="radio" />{" "}
                                <Label check>{qt.firstChoice}</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input name="radio1" type="radio" />{" "}
                                <Label check>{qt.secondeChoice}</Label>
                            </FormGroup>
                            <FormGroup>
                              <Input id="exampleFile" name="file" type="file" />
                              <FormText>
                                You can add an image as a reference
                              </FormText>
                            </FormGroup>
                          </CardBody>
                        </Card>
                      </div>
                    ))
                  :<h6>selket</h6>
                  }
                  </div>
                ))}
  
                <Button id= 'save' onClick={(e) => save(e)} type="button" class="btn btn-primary">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
        </Row>
      </div>
    );
  };
  
  export default ServerRoomInspectionForm;
  