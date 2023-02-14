import React from "react";
import Contact from "./contact";
import contacts from "./contacts";
import Avatar from "./avatar";
import "../styles.css"

function Carddata(data) {
  return (
    <Contact
      key={data.id}
      name={data.name}
      photo={data.imgURL}
      mob={data.phone}
      email={data.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar photo={contacts[0].imgURL} />
      {contacts.map(Carddata)}

      {/* <Contact
        name={contacts[0].name}
        photo={contacts[0].imgURL}
        mob={contacts[0].phone}
        email={contacts[0].email}
      />
      <Contact
        name={contacts[1].name}
        photo={contacts[1].imgURL}
        mob={contacts[1].phone}
        email={contacts[1].email}
      />
      <Contact
        name={contacts[2].name}
        photo={contacts[2].imgURL}
        mob={contacts[2].phone}
        email={contacts[2].email} */}
      {/* /> */}
    </div>
  );
}

export default App;
