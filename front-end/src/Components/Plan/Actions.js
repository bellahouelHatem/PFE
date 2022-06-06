import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { dateFnsLocalizer } from "react-big-calendar";
import { Calendar } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import FormAction from "./Action/FormAction";
import axios from "axios";

import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import PageServiceProvider from "../dashboards/PageServiceProvider";
import jwtDecode from "jwt-decode";
const today =format(new Date(), 'yyyy-MM-dd');
var x=[]
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const url='http://localhost:8084/api/Action'
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
function Actions() {
    const [newEvent, setNewEvent] = useState({id:"",title:"",startDate:"",endDate:"",type:""});
    const onChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
      };
    const [state,setState]=useState();

    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showInsp,setShowInsp]=useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      const Dtoken = jwtDecode(token)
     const Cid =Dtoken["sub"];
    axios.get(url+"s/"+Cid).then((response) => {
      x=[];
      const y = response.data
      console.log(y)
        y.map((Action)=> x = [...x,
          {id:Action.id,
            title:Action.title,
            startDate:new Date(Date.parse(Action.startDate)),
            endDate:new Date(Date.parse(Action.endDate)),
            type:Action.description

          }])
            console.log(x)
            setState(x)
    });
    
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

      if (window.confirm('Are you sure you wish to update this item?')){
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
      const ondelete =(e)=>{
        const x =url+"/"+newEvent.id
        axios.delete(x)
        window.location.reload(true);
    }

    return (
        <>
        <PageServiceProvider/>
        <div >
          
    
      {/*Calendar ....................................................................................... */}
        <Calendar allDayAccessor= {true}  onSelectEvent={event=>handleShowInsp(event)} showAllEvents={true}  localizer={localizer} events={state} startAccessor="startDate" endAccessor="endDate" style={{ height: 1000,margin: "50px" }} />
      {/*Calendar ....................................................................................... /*/}

       {/* Edit Modal................................................................................     */}
        <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
            <Modal.Title>
                update Action
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="app" >
        <form className="formInput" onSubmit={handleSubmit}>
        <label>title</label>
        <input onChange={(e)=>onChange(e)} name="title" type= "text" errorMessage="required" label= "Title" required value={newEvent.title}></input>
        <label>Start Date</label> 
           <input onChange={(e)=>onChange(e)} name="startDate" type= "date" min ={ today} placeholder= "End Date"berrorMessage="required"label= "End Date" required value={newEvent.startDate} ></input>
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
               Action
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
            <label>Description</label>
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

export default Actions;