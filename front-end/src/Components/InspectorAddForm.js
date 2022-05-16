const InspectorAddForm = () =>{
    return (
        <div>
          <Row>
          <Col xs="12" md="8">
            <Card>
              <CardTitle tag="h1" className="border-bottom p-3 mb-0">
              Add inspector
              </CardTitle>
              <CardBody>
                <Form>
                    <div sm="6" lg="6" xl="3" id={index} >
                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                ******
                            </CardTitle>
                            <CardBody>
                                <FormGroup>
                                    <Input id={"input"+id} name={qt.name} type="textarea" placeholder="Enter text" onChange={(e)=>onChange(e)} />
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </div>
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
}

export default InspectorAddForm;