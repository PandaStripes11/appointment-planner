import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  //* State variable for contacts
  const [contacts, setContacts] = useState([])

  //* State variable for appointments
  const [appointments, setAppointments] = useState([])

  /* ROUTES */
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //* Create New Contact Function
  const createNewContact = (name, phone, email) => {
    setContacts(prev => {
      return [
        ...prev,
        {
          name: name,
          phone: phone,
          email: email,
        }
      ]
    })
  }

  //* Create New Appointment Function
  const createNewAppointment = (contact, title, date, time) => {
    setAppointments(prev => {
      return [
        ...prev,
        {
          contact: contact,
          title: title,
          date: date,
          time: time,
        }
      ]
    })
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
              contact={contacts}
              createNewContact={createNewContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments}
              createNewAppointment={createNewAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
