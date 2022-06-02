import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { dateFnsLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import FormInspecteur from "./Inspection/FormInspection";
import axios from "axios";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "../../App";
import PageServiceProvider from "../dashboards/PageServiceProvider";
import jwtDecode from "jwt-decode";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
const today =format(new Date(), 'yyyy-MM-dd');
var x=[]
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const url='http://localhost:8083/api/Inspection'
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
function PlaningInsp() {
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
    axios.get(url+"sP/"+Cid).then((response) => {
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
    const handleShowAdd = (event) => setShowAdd(true) ;
    const handleShowEdit = (event) => setShowEdit(true);
    const handleShowInsp = (event)=>{setShowInsp(true);
      console.log(event)
       const startDate =event.startDate.toLocaleDateString('en-CA');
       const endDate =event.endDate.toLocaleDateString('en-CA');
      setNewEvent({id:event.id,title:event.title,startDate:startDate,endDate:endDate,type:event.type});
      console.log(newEvent)
      
    }
    
    const handleCloseAdd = () => setShowAdd(false);
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
        <PageServiceProvider/>
        <div >
          <Button onClick={handleShowAdd} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>{t("AddNI")}</span></Button>
     {/* add Modal..........................      */}
    <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
            <Modal.Title>
                {t("AddNI")}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormInspecteur/>
        </Modal.Body>
    </Modal>
     {/* add Modal........................../*/}
    
      {/*Calendar ....................................................................................... */}
        <Calendar allDayAccessor= {true}  onSelectEvent={event=>handleShowInsp(event)} showAllEvents={true}  localizer={localizer} events={state} startAccessor="startDate" endAccessor="endDate" style={{ height: 1000,margin: "50px" }} />
      {/*Calendar ....................................................................................... /*/}

       {/* Edit Modal................................................................................     */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
            <Modal.Title>
                update Inspection
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="app" >
        <form className="formInput"  onSubmit={handleSubmit} >
        <label>title</label>
        <input onChange={(e)=>onChange(e)} name="title" type= "text" errorMessage="required" label= "Title" required value={newEvent.title}></input>
          <label>Start Date</label> 
           <input onChange={(e)=>onChange(e)} name="startDate" type= "date" min ={today} placeholder= "End Date"berrorMessage="required"label= "End Date" required value={newEvent.startDate}></input>
           {newEvent.startDate&&(<React.Fragment>
          <label>End Date</label>
            <input onChange={(e)=>onChange(e)} name="endDate" type= "date" min ={newEvent.startDate} placeholder= "End Date" errorMessage="required" label= "End Date" required value={newEvent.endDate} ></input>
            </React.Fragment>)}
            <button  className="button">Submit</button> 
         </form>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
    </Modal>
    {/* Edit Modal............................................................................................../*/}
    <Modal show={showInsp} onHide={handleCloseInsp}>
        <Modal.Header closeButton>
            <Modal.Title>
                 Inspection
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="app" >
        <form className="formInput" >
        <label>title</label>
        <p>{newEvent.title}</p>
          <label>Start Date</label> 
          <p>{newEvent.startDate}</p>
            <label>End Date</label>
            <p>{newEvent.endDate}</p>
            <label>Type</label>
            <p>{newEvent.type}</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button className="buttonEdit" onClick={handleClick}>Edit</Button>
            <Button className="buttonDelete"onClick={(e)=>{ if (window.confirm('Are you sure you wish to delete this item?'))ondelete(e)}} >delete</Button>
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

export default PlaningInsp;