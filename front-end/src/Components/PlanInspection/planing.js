import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "react-big-calendar";
import { Button, Modal } from "react-bootstrap";
import FormInspecteur from "./Inspecteur/FormInspecteur";


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start:"2022-04-15",
        end: new Date(2022, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(202, 6, 23),
    },
];

function Planing() {
    const [show, setShow] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents, newEvent]);
    }
    const handleShow = () => setShow(true);
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
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close Button
                </Button>
        </Modal.Footer>
    </Modal>
      
        <Calendar localizer={localizer} events={events } startAccessor="start" endAccessor="end" style={{ height: 500,margin: "50px" }} />

        
        </div>
    );
}

export default Planing;
