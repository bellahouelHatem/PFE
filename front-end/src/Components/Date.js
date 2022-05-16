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
import React from "react";

const Date_picker = (props) => {
    return (
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            {props.question}
          </CardTitle>
          <CardBody className="">
            <FormGroup check>
                <Input name="radio1" type="radio" />{" "}
                <Label check>Yes</Label>
            </FormGroup>
            <FormGroup>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>
                You can add an image as a reference
              </FormText>
            </FormGroup>
          </CardBody>
        </Card>
    );
  };
  
  export default Date_picker;