import {
  Card,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import React from "react";

const FohBoh = [
  {
    question: "1. Are lights, signage, doors, awning & pavement clean and in good working order?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "2. Are door mat and entrance clean and tidy?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "3. Are floor, walls & skirting and edges clean and debris free?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "4. Are Ceilings and A/C vents clean and dust free, all lights bulbs working?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "5. Are interior shelving, back panels & grills clean and debris free?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "6. Are high chairs clean and in good condition, with disclaimer attached?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "7. Are customer bins interior/exterior clean and debris free?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "8. Are condiment area stocked and clean, including Sriracha chilli sauce bottles?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "9. Are POS shelves clean and debris free?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "10. Is Hot Pie Oven lights on and working, clean and free of spillages, breakfast rolls are correctly timed no evidence of food expired?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "11. Is there evidence of grime/dirt to food surfaces/hand contact points?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "12. Are all light bulbs working?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "13. Is dry store area, packaging room and kitchen racking clean and in good repair?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "14. Is COSHH room/COSHH sink clean and tidy - COSHH room clearly identified?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "15. Are corridors, staircases clean & debris free?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "This is simple blog",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "16. Are kitchen bins clean inside / outside - changed regularly?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "17. Are Utensils & equipment Scoops, Knifes, Scales, Shakers Clean and free of food debris?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "18. Are chopping boards/rack/Knife rack clean and in good condition?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "19. Is microwave exterior, interior, insert and shelf clean, in good condition and all lights working/ insert available?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "20. Is smear, stain free exterior steel and condenser?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
];

const FHS = [
  {
    question: "1. Do we have evidence of food not labelled/incorrectly labeled?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "2. Do we have evidence of incorrect use of mis-use of scourers and cloths?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "3. Is any of the staff showing signs of illness?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "4. Is staff uniform worn correctly, clean and in good condition?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "5. Is hand wash sink with full facilities (hand wash soap, hot water and paper towel)?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "6. Is pest report not actioned within 24 hours and evidence of practices that could attract or harbour pests?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "7. Reheat core temperature of 80C or hotter reached except where stated otherwise",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "8. Is high-risk (previously chilled) foods at more than 8 degc for not longer than 4 hours?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "9. Is Food Safety and Health and Safety policies pointed out by shop staff, on-line of hard copy?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "10. Check with 1 Member of the team - the correct contact time for Sanitiser?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "11. Check with 1 Member of the team - the location of the Fire Assembly point?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "12. Check with 1 Member of the team - the procedure for reporting an accident?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "13. Check with 1Member of the team - to explain where to find Allergies and Intolerance information?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
  {
    question: "14. Check with 1 Member of the team - the temperature a fridge should operate at?",
    firstChoice: "Yes",
    secondeChoice:"No",
  },
];

const SafetyStandardsForm = () => {
  return (
    <div>
        <Card>
          <CardTitle tag="h1" className="border-bottom p-3 mb-0">
            Safety Standards
          </CardTitle>
          <CardBody>
            <Form>
              <h3>FOH/BOH</h3>
              {FohBoh.map((qt, index) => (
                <div sm="6" lg="6" xl="3" key={index}>
                  <FormGroup tag="fieldset" >
                      <h6>{qt.question}</h6>
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
                  </FormGroup>
                </div>
              ))}

              <h3>Food and Health Safety</h3>
              {FHS.map((qt, index) => (
                <div sm="6" lg="6" xl="3" key={index}>
                  <FormGroup tag="fieldset" >
                      <h6>{qt.question}</h6>
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
                  </FormGroup>
                </div>
              ))}


              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
    </div>
  );
};

export default SafetyStandardsForm;
