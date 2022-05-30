import {
  Button,
    Card,
    Row,
    Col,
    CardTitle,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";
import React, { useEffect, useState } from "react"; 
import axios from "axios";
import App from "../../App"
import jwtDecode from "jwt-decode";
import PageInspector from "../dashboards/PageInspector";
  
  const Framework = [
    {
      id: 1,
      question: "1. Mandate and Commitment Have you: (a) defined and endorsed a risk management policy (b) determined risk performance indicators (c) aligned risk objectives and indicators to organizational objectives and indicators (d) ensured legal and regulatory compliance",
      name: "question1"
    },
    {
      id: 2,
      question: "2. Organization and its context in designing your risk framework have you: (a) evaluated external context (b) evaluated internal context",
      name: "question2"

    },
    {
      id: 3,
      question: "3. Does your policy include: (a) rationale for managing risk (b) accountabilities (c) how conflict of interest is dealt with (d) links between organizations objectives and risk policy (e) commitment to resource risk management (f) how risk performance managed, measured and reported (g) commitment to review and improve the policy",
      name: "question3"

    },
    {
      id: 4,
      question: "4. Have you established accountability, authority and competence for managing risk?",
      name: "question4"
    },
    {
      id: 5,
      question: "5. Do you: (a) identify risk owners (b) identify responsibility for your framework (c) identify risk responsibilities (d) establish performance measures and reporting and escalation processes (e) ensure appropriate levels of recognition",
      name: "question5"
    },
    {
      id: 6,
      question: "6. Is risk management embedded into your practices and processes in a way that is relevant, effective and efficient?",
      name: "question6"
    },
    {
      id: 7,
      question: "7. Have you allocated appropriate resources for risk management?",
      name: "question7",
    },
    {
      id: 8,
      question: "8. Including a consideration of: (a) people (b) organizational processes, methods and tools (c) documented processes and procedures (d) information and knowledge management systems (e) training",
      name: "question8",
    },
    {
      id: 9,
      question: "9. Reporting Have you established internal communication and reporting mechanisms for risk management?",
      name: "question9"

    },
    {
      id: 10,
      question: "10. Reporting Have you determined and implemented how you will communicate with external stakeholders?",
      name: "question10"
    },
    {
      id: 11,
      question: "11. In implementing your framework can you show you have: (a) applied risk management policy to organizational processes (b) complied with legal and regulatory requirements (c) ensured decision making is aligned with risk management processes (d) held information and training sessions (e) communicated and consulted with stakeholders",
      name: "question11"
    },
    {
      id: 12,
      question: "12. Do you: (a) measure risk management performance against indicators (b) measure progress against risk management plans (c) review whether the framework and policy are still appropriate (d) report on risk (e) review the effectiveness of the framework Do you continually improve the risk policy, framework, plans?",
      name: "question12"

    },
  ];

  const Process = [
    {
      id: 13,
      question: "1. General Is the risk management process: (a) an integral part of management (b) embedded in culture and practices (c) tailored to your organisation",
      name: "question13"
    },
    {
      id: 14,
      question: "2. Can you demonstrate communication and consultation with external and internal stakeholders at all stages of the risk management process?",
      name: "question14"
    },
    {
      id: 15,
      question: "3. Can you demonstrate you have considered internal and external context, factors and how they relate to the scope of the particular risk management process?",
      name: "question15"
    },
    {
      id: 16,
      question: "4. Have you defined the criteria to be used to evaluate the significance of risk?",
      name: "question16"
    },
    {
      id: 17,
      question: "5. Have you identified sources of risk, areas of impact and their causes and potential consequences?",
      name: "question17"
    },
    {
      id: 18,
      question: "6. Have you applied risk identification tools and techniques?",
      name: "question18"
    },
    {
      id: 19,
      question: "7. Do you use people with appropriate knowledge for risk identification?",
      name: "question19"
    },
    {
      id: 20,
      question: "8. Do you have processes to consider causes and sources of risks, their consequences and the likelihood of the consequences to occur?",
      name: "question20"
    },
    {
      id: 21,
      question: "9. Do you compare the level of risk found during analysis process to your risk criteria to determine the need for treatment or further analysis?",
      name: "question21"
    },
    {
      id: 22,
      question: "10. Options Do you have processes for selecting treatment options that consider stakeholders, legal, regulatory and context?",
      name: "question22"
    },
    {
      id: 23,
      question: "11. Do you have processes to identify new risks introduced through treatment?",
      name: "question23"
    },
    {
      id: 24,
      question: "12. Does the treatment plan identify priority order for risk treatments?",
      name: "question24"
    },
    {
      id: 25,
      question: "13. Plans Do you document how your risk treatment will be implemented?",
      name: "question25"
    },
    {
      id: 26,
      question: "14. Do you include: (a) reasons for selection and expected benefits (b) responsibilities (c) proposed actions (d) resource requirements (e) performance measures (f) reporting and monitoring requirements (g) timing",
      name: "question26"
    },
    {
      id: 27,
      question: "15. Have you included regular checks or surveillance in your risk processes at all levels?",
      name: "question27"
    },
    {
      id: 28,
      question: "16. Have you defined responsibilities for monitoring and review?",
      name: "question28"
    },
    {
      id: 29,
      question: "17. Do you check progress of risk treatment plans?",
      name: "question29"
    },
    {
      id: 30,
      question: "18. Do you report results of monitor and review?",
      name: "question30"
    },
    {
      id: 31,
      question: "19. Are your processes traceable?",
      name: "question31"
    },
    {
      question: "20. Have you retained suitable records?",
      name: "question32"
    },
  ];

const Questions = [
  Framework,
  Process,
];
const ListQuestions = [
  "Framework",
  "Process"
]

  
const RiskManagementForm = (props) => {
  const d = new Date().toISOString().slice(0, 10);

  const [formData,setformData] = useState({
  
  })

  
  
  function save(e)
   {setformData({...formData,"dateCreation":d})
   setformData({...formData,"idInspection":props.location.state})
   const token =localStorage.getItem("token");
   const dtoken =jwtDecode(token);
   
    console.log(formData)
   axios.post('http://localhost:8082/api/RiskManagementForm',formData).then(()=>{
     axios({method:'PUT',
   url:'http://localhost:8081/api/inspector/'+dtoken["sub"],
   headers:{
       'Authorization':'Bearer '+token}});
       axios.put('http://localhost:8083/api/Inspections/'+props.location.state).catch(err=>console.log(err))})
   
}
  
  let state={show: true,};
  const onSubmit=()=>{
    this.setState({show:!state.show})
  };

  const onChange=(e)=>{
    setformData({...formData,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    const token = localStorage.getItem("token");
      if(token === null){
        props.history.push('/'); 
      }else{
        const Dtoken =jwtDecode(token) 

         if (Dtoken["iss"]=== "Administrator"){
           props.history.push('/PageAdmin');
        }else if(Dtoken["iss"]=== "ServiceProvider"){
          props.history.push('/PageServiceProvider');
    }}
  },[])

    return (
      <>
      <PageInspector/>
      <div>
        <Row>
        <Col xs="12" md="8">
          <Card>
            <CardTitle tag="h1" className="border-bottom p-3 mb-0">
            ISO 31000 Risk Management Inspection
            </CardTitle>
            <CardBody>
              <Form>
                {Questions.map((qts, index) => (
                  <div>
                    <Button className="btn" color="primary" size="lg" block  onClick={onSubmit}>
                     {ListQuestions[index].toString()}
                    </Button>
                    {state.show ?

                    qts.map((qt, index) => (
                      <div sm="6" lg="6" xl="3" id={index} >
                        <Card>
                          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            {qt.question}
                          </CardTitle>
                          <CardBody className="">
                            <FormGroup check>
                                <Input value="Yes" name={qt.name} type="radio" onChange={(e)=>onChange(e)}/>
                                <Label check>Yes</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input value="No" name={qt.name} type="radio" onChange={(e)=>onChange(e)}/>
                                <Label check>No</Label>
                            </FormGroup>
                            <FormGroup check>
                                <Input value="NA" name={qt.name} type="radio" onChange={(e)=>onChange(e)}/>
                                <Label check>N/A</Label>
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
      </>
    );
  };
  
  export default RiskManagementForm;
  