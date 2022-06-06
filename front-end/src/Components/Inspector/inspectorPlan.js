import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { dateFnsLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import jwtDecode from "jwt-decode";
import PageInspector from "../dashboards/PageInspector";
import { Link } from "react-router-dom";

const today =format(new Date(), 'yyyy-MM-dd');
var x=[]
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const url='http://localhost:8083/api/InspectionsI'
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
function InspectorPlan() {
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
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
    const [newEvent, setNewEvent] = useState({id:"",title:"",startDate:"",endDate:"",type:""});
    const onChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
      };
    const [state,setState]=useState();


    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showInsp,setShowInsp]=useState(false);
    const ondelete =(e)=>{
        const x =url+"/"+newEvent.id
        axios.delete(x)
        window.location.reload(true);
    }

    useEffect(() => {
      const token = localStorage.getItem("token");
        const Dtoken = jwtDecode(token)
       const Cid =Dtoken["sub"];
       console.log(Cid)
    axios.get(url+"/"+Cid).then((response) => {
      x=[];
      const y = response.data
      console.log(y)
        y.map((Inspection)=> x = [...x,
          {id:Inspection.id,
            title:Inspection.title,
            startDate:new Date(Date.parse(Inspection.startDate)),
            endDate:new Date(Date.parse(Inspection.endDate)),
            type:Inspection.type

          }])
            console.log(x)
            setState(x)
    }).catch(err=>console.log(err));
    
    }, []);
    
    //Modal show and close methode ...............................................
    const handleShowEdit = (event) => setShowEdit(true);
    const handleShowInsp = (event)=>{setShowInsp(true);
      console.log(event)
       const startDate =event.startDate.toLocaleDateString('en-CA');
       const endDate =event.endDate.toLocaleDateString('en-CA');
      setNewEvent({id:event.id,title:event.title,startDate:startDate,endDate:endDate,type:event.type});
      console.log(newEvent)
      
    }
    const handleCloseEdit = () => setShowEdit(false);
    const handleCloseInsp =()=>setShowInsp(false);
    //Modal show and close methode .............................................../
const handleClick=()=>{
  handleCloseInsp();
  handleShowEdit();

}
   
    const handleSubmit = (e) => {
      if (window.confirm('Are you sure you wish to delete this item?')){
        e.preventDefault();
        const x =url+"/"+newEvent.id
          const body = {
            title : newEvent.title,
            startDate:newEvent.startDate,
            endDate:newEvent.endDate          
          }
          console.log(body)
          axios.put(x,body).catch(err=>console.log(err))
          window.location.reload(true);}
      };

    return (
        <>
        <PageInspector/>
        <div >
      {/*Calendar ....................................................................................... */}
        <Calendar allDayAccessor= {true}  onSelectEvent={event=>handleShowInsp(event)} showAllEvents={true}  localizer={localizer} events={state} startAccessor="startDate" endAccessor="endDate" style={{ height: 1000,margin: "50px" }} />
      {/*Calendar ....................................................................................... /*/}
<Modal show={showInsp} onHide={handleCloseInsp}>
        <Modal.Header closeButton>
            <Modal.Title>
                 {t("inspection")}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="app" >
        <form className="formInput" >
        <label>{t("title")}</label>
        <p>{newEvent.title}</p>
          <label>{t("Start_Date")}</label> 
          <p>{newEvent.startDate}</p>
            <label>{t("end_Date")}</label>
            <p>{newEvent.endDate}</p>
            <label>{t("Type")}</label>
            <p>{newEvent.type}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             {newEvent.type === "GAPAnalysis"&&
            <Link to={{pathname:"/GAPAnalysisForm",state:newEvent.id}}><button class="btn btn-primary">{t("conduct")}</button></Link>
            }
            {newEvent.type === "RiskManagement"&&
            <Link to={{pathname:"/RiskManagementForm",state:newEvent.id}}><button class="btn btn-primary">{t("conduct")}</button></Link>
            }{(newEvent.type != "RiskManagement"&&newEvent.type != "GAPAnalysis")&&
            <Link to={{pathname:"/DynamicFormType",state:{id:newEvent.id,type:newEvent.type}}}><button class="btn btn-primary">{t("conduct")}</button></Link>
            }
            </div>
           </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
    </Modal>
        
        </div>
        </>
    );
}

export default InspectorPlan;