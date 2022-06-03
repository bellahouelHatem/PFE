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
  import jwtDecode from "jwt-decode";
import PageInspector from "../dashboards/PageInspector";
import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
    
    var ContextOfTheOrganization = [
      {
        id: 1,
        question: "1. Have all external and internal matters been identified that are important to the organisation's goals and the fulfilment of customer satisfaction and the strategic administration of the company?",
        name: "question1",
        resp:""
      },
      {
        id: 2,
        question: "2. Is your QMS implemented and does it include a description of the required processes and their sequence and interaction?",
        name: "question2",
        resp:""
  
      },
      {
        id: 3,
        question: "3. Have the criteria been determined to control these processes and their interaction?",
        name: "question3",
        resp:""
  
      },
      {
        id: 4,
        question: "4. Have the relevant needs and expectations of the parties involved been determined for the QMS?",
        name: "question4",
        resp:""
      },
      {
        id: 5,
        question: "5. Have all the responsibilities, methods, measurement procedures and related performance indicators necessary to ensure effective operation and control been put in place?",
        name: "question5",
        resp:""
      },
      {
        id: 6,
        question: "6. Has the scope of the QMS been defined taking into account all external and internal issues, the needs of the parties involved and the scope of the products and services?",
        name: "question6",
        resp:""
      },
    ];
  
    var Leadership = [
      {
        id: 7,
        question: "1. Have the demands for the QMS been integrated into the business processes and has the management supported process awareness?",
        name: "question7",
        resp:""
      },
      {
        id: 8,
        question: "2. Have the guidelines and objectives for the QMS, which are based on the strategic orientation of the organisation, been defined and communicated?",
        name: "question8",
        resp:""
      },
      {
        id: 9,
        question: "3. Has the company defined and communicated the responsibilities and authorities necessary for the effective operation of the QMS?",
        name: "question9",
        resp:""
      },
      {
        id: 10,
        question: "4. Does management feel responsible for the effectiveness of the QMS?",
        name: "question10",
        resp:""
      },
      {
        id: 11,
        question: "5. Have customer requirements and applicable legal and regulatory requirements been identified, met and communicated throughout the organization?",
        name: "question11",
        resp:""
      },
      {
        id: 12,
        question: "6. Are the risks and opportunities relevant to the QMS known?",
        name: "question12",
        resp:""
      },
      {
        id: 13,
        question: "7. Have the objectives been defined together with the appropriate departmental and personal levels of the company?",
        name: "question13",
        resp:""
      },
    ];
  
    var Planning = [
      {
        id: 14,
        question: "1. Is there a fixed method for determining the need for modifications to the QMS and checking their implementation?",
        name: "question14",
        resp:""
      },
      {
        id: 15,
        question: "2. Have the hazards and opportunities to be addressed to assure that the QMS can achieve its intended result(s) been identified?",
        name: "question15",
        resp:""
      },
      {
        id: 16,
        question: "3. Has the company planned measures to deal with these risks and opportunities and included them in the system processes?",
        name: "question16",
        resp:""
      },
    ];
  
    var Support = [
      {
        id: 17,
        question: "1. Is the monitoring or measurement to demonstrate the conformity of products and services related to specific requirements?",
        name: "question17",
        resp:""
      },
      {
        id: 18,
        question: "2. Has the company identified and provided the necessary resources to establish, implement, maintain and continuously improve the QMS (including human, environmental and infrastructure requirements)?",
        name: "question18",
        resp:""
      },
      {
        id: 19,
        question: "3. Has it been determined which information must be documented to comply with the required standards and which information is necessary for the effective implementation and operation of the QMS?",
        name: "question19",
        resp:""
      },
      {
        id: 20,
        question: "4. Has the company identified the knowledge required to operate its processes and to achieve conformity of products and services and introduced a learning process?",
        name: "question20",
        resp:""
      },
      {
        id: 21,
        question: "5. Has the company ensured that the employees who have an influence on the QMS have appropriate education, training or experience? Have measures been taken to ensure that these employees can acquire the necessary competence?",
        name: "question21",
        resp:""
      },
    ];
  
    var Operation = [
      {
        id: 22,
        question: "1. Is there a defined process to provide products and services that meet the requirements specified by the customer?",
        name: "question22",
        resp:""
      },
      {
        id: 23,
        question: "2. Are changes planned?",
        name: "question23",
        resp:""
      },
      {
        id: 24,
        question: "3. Are outsourced processes controlled and monitored?",
        name: "question24",
        resp:""
      },
      {
        id: 25,
        question: "4. Do you design and develop products or services?",
        name: "question25",
        resp:""
      },
      {
        id: 26,
        question: "5. Are the changes implemented in a controlled manner and steps are taken to mitigate adverse effects?",
        name: "question26",
        resp:""
      },
      {
        id: 27,
        question: "6. Is there a predefined process for reviewing information about products and services, inquiries, contracts or order processing and communicating with customers?",
        name: "question27",
        resp:""
      },
      {
        id: 28,
        question: "7. Is this verification carried out before the company undertakes to supply products and services?",
        name: "question28",
        resp:""
      },
      {
        id: 29,
        question: "8. Is it ensured that externally provided processes, products and services meet the specified requirements?",
        name: "question29",
        resp:""
      },
      {
        id: 30,
        question: "9. Have criteria been established for the evaluation, selection, monitoring of performance and re-evaluation of external providers?",
        name: "question30",
        resp:""
      },
      {
        id: 31,
        question: "10. Do the provide products and services the existence of documented information describing the characteristics of the products and services?",
        name: "question31",
        resp:""
      },
      {
        id: 32,
        question: "11. Do the provide products and services monitoring and analysis activities at proper stages to verify that the criteria for the control of processes and process outputs and the acceptance criteria for products and services are met?",
        name: "question32",
        resp:""
      },
      {
        id: 33,
        question: "12. Do the provide products and services monitoring and analysis activities at appropriate stages to confirm that standards for control of methods and process results, and approval criteria for products and services, have been reached?",
        name: "question33",
        resp:""
      },
      {
        id: 34,
        question: "13. Do the provide products and services the provision of recorded information defining the activities to be completed and the results to be reached?",
        name: "question34",
        resp:""
      },
      {
        id: 35,
        question: "14. Do the provide products and services the availability of reported information that defines the activities to be performed and the results to be achieved?",
        name: "question35",
        resp:""
      },
      {
        id: 36,
        question: "15. Do the provide products and services information on the competence of the persons performing the tasks?",
        name: "question36",
        resp:""
      },
      {
        id: 37,
        question: "16. Do the provide products and services the people implementing the tasks are qualified?",
        name: "question37",
        resp:""
      },
      {
        id: 38,
        question: "17. Is the property of customers or external suppliers used in the performance of the product or service?",
        name: "question38",
        resp:""
      },
      {
        id: 39,
        question: "18. Does the company have adequate methods to assure traceability during the operational method?",
        name: "question39",
        resp:""
      },
      {
        id: 40,
        question: "19. Is there a demand for handling the products and services after delivery, such as guarantee, sustaining services, recycling or final disposal?",
        name: "question40",
        resp:""
      },
      {
        id: 41,
        question: "20. Are these established and managed?",
        name: "question41",
        resp:""
      },
      {
        id: 42,
        question: "21. Are any nonconforming method outputs arranged so as to avert their unintended use?",
        name: "question42",
        resp:""
      },
    ];
  
    var PerformanceEvaluation = [
      {
        id: 43,
        question: "1. Has it authenticated when the outcomes from observation and measurement shall be investigated and evaluated?",
        name: "question43",
        resp:""
      },
      {
        id: 44,
        question: "2. Have methods of observing customer perceptions of the provision of products and services been set?",
        name: "question44",
        resp:""
      },
      {
        id: 45,
        question: "3. Has an offer to perform management reviews been organised and performed?",
        name: "question45",
        resp:""
      },
      {
        id: 46,
        question: "4. Has the company set a process for an internal inspection of the QMS?",
        name: "question46",
        resp:""
      },
      {
        id: 47,
        question: "5. Has the company defined what needs to be observed and measured and the methods for monitoring, measurement, analysis and evaluation, to assure valid outcomes?",
        name: "question47",
        resp:""
      },
      {
        id: 48,
        question: "6. Has it fixed the demand or opportunities for developments within the QMS and how these will be put into management reviews?",
        name: "question48",
        resp:""
      },
    ];
  
    var Improvement = [
      {
        id: 49,
        question: "1. Does the company operate proper processes for handling nonconformities and the associated improving actions?",
        name: "question49",
        resp:""
      },
      {
        id: 50,
        question: "2. Has the company decided on how it will discuss the necessity to continually develop the suitability, sufficiency, and effectiveness of the QMS?",
        name: "question50",
        resp:""
      },
      {
        id: 51,
        question: "3. Has the company determined and chose opportunities for development and implemented the required actions to meet customer demands and improve customer satisfaction?",
        name: "question51",
        resp:""
      },
    ];
  
  var Questions = [
    ContextOfTheOrganization,
    Leadership,
    Planning,
    Support,
    Operation,
    PerformanceEvaluation,
    Improvement,
  ];
  const ListQuestions = [
    "Context of the organization",
    "Leadership",
    "Planning",
    "Support",
    "Operation",
    "Performance evaluation",
    "Improvement"
  ]
  const languages = [
    {
      code: 'fr',
      name: 'Français',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'ger',
      name: 'deutsch',
      country_code: 'de',
    },
  ]
    
  const GAPConfirm = (props) => {
    const currentLanguageCode = cookies.get('i18next') || 'en'
const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
const { t } = useTranslation()
    const d = new Date().toISOString().slice(0, 10);
  
    const [formData,setformData] = useState({
    
    })
    const onChange=(e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
      }
      let state={show: true,};
      const onSubmit=()=>{
        this.setState({show:!state.show})
      };
    const [x,setX]=useState(Questions)
    function save(e)
     {setformData({...formData,"dateCreation":d})
     
   setformData({...formData,"idInspection":props.location.state.id})
      console.log(formData)
      const token =localStorage.getItem("token");
   const dtoken =jwtDecode(token);
   
  
    axios.put('http://localhost:8082/api/GAPAnalysisFormEtat/'+x.id).catch(err=>console.log(err.message));
    axios.put('http://localhost:8083/api/InspectionsStatu/'+props.location.state.id)
      
    
  }
    useEffect(()=>{
    //   const token = localStorage.getItem("token");
    //     if(token === null){
    //       props.history.push('/'); 
    //     }else{
    //       const Dtoken =jwtDecode(token) 
  
    //        if (Dtoken["iss"]=== "Administrator"){
    //          props.history.push('/PageAdmin');
    //       }else if(Dtoken["iss"]=== "ServiceProvider"){
    //         props.history.push('/PageServiceProvider');
    //   }}
    axios.get('http://localhost:8082/api/GAPAnalysisFormInsp/'+props.location.state.id).then(resp=>{
      const Form =resp.data
        var x =1
      {Questions.map((qts) => {
        qts.map((qt) => {
          
          qt.resp=Form["question"+x]
  console.log(qt.name+"   "+qt.resp)
  x++
        })
      })
    }setX(Form)
  })
    
    },[])
  
      return (
        <>
        <PageInspector/>
        <div>
          <Row>
          <Col xs="12" md="8">
            <Card>
              <CardTitle tag="h1" className="border-bottom p-3 mb-0">
              GAP Analysis Form Inspection
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
                            {t(qt.name)}
                            </CardTitle>
                            
                            {qt.resp=="Yes"&&<React.Fragment>
                              <CardBody className="">
                              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                              Yes
                            </CardTitle>
                             </CardBody></React.Fragment>}
                              {qt.resp==="NA"&&
                              <CardBody className="">
                               <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                              N/A
                            </CardTitle></CardBody>}
                              {qt.resp==="No"&&
                              <CardBody className="">
                               <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                              No
                            </CardTitle>
                              </CardBody>}
                            
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
    
    export default GAPConfirm;
    