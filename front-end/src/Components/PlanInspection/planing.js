import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import FormInspecteur from "./Inspecteur/FormInspecteur";
import axios from "axios";
const today =format(new Date(), 'yyyy-MM-dd');

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const url='http://localhost:8082/api/Inspection'
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});
function Planing() {
    const [values, setValues] = useState({
    });
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    const [state,setState]=useState();
    const [show, setShow] = useState(false);
 useEffect(() => {
    axios.get(url).then((response) => {
        setState(response.data);
        console.log(state)
      });
    }, []);
    const [newEvent, setNewEvent] = useState({title:"",startDate:"",endDate:""});
    const handleShow = (event) => {setShow(true)
        setNewEvent(event)
    }
    ;
    const handleClose = () => setShow(false);

   
   

    return (
        <div className="App">
          <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
          
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Add Employee
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormInspecteur/>
        </Modal.Body>
    </Modal>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                update Inspection
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="formInput">
        <label>title</label>
        <input name="title"
          type= "text"
          errorMessage="required"
          label= "Title"
          required
          value={newEvent.title}></input>
          <label>Start Date</label>
           <input name="startDate"
          type= "date"
          min ={ today}
          placeholder= "End Date"
          errorMessage="required"
          label= "End Date"
          required
          value={newEvent.startDate}></input>
          <label>End Date</label>
            <input name="EndDate"
          type= "date"
          min ={ today}
          placeholder= "End Date"
          errorMessage="required"
          label= "End Date"
          required
          value={newEvent.endDate}>
          </input>
          
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
    </Modal>
      
        <Calendar  onSelectEvent={event=>handleShow(event)} showAllEvents={true}  localizer={localizer} events={state} startAccessor="startDate" endAccessor="endDate" style={{ height: 1000,margin: "50px" }} />

        
        </div>
    );
}

export default Planing;
