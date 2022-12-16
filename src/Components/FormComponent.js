import React from "react";
import { useState } from "react";
//import TableData from "./TableData";
import "./styles.css";

function FormComponent() {
  const [isShown, setIsShown] = useState(false);
  const [usersData, setUsersData] = useState([]);

  function TableData({ data }) {
    return (
      <div>
        <div>
          {data &&
            data.map((item, id) => (
              <div
                key={item.id}
                style={{
                  width: 250,
                  height: 250,
                  marginTop: 10,
                  marginLeft: 40,
                  backgroundColor: "powderblue"
                }}
              >
                <div align="center">
                  {" "}
                  <img
                    id="img1"
                    src={item.Profile.value}
                    alt="alt"
                    style={{
                      width: 100,
                      height: 100,
                      marginTop: 30
                    }}
                  />
                </div>
                <div align="center">{item.name.value}</div>
                <div align="center">{item.Email.value}</div>
                <div align="center">{item.Contact.value}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  const [currentUser, setCurrentUser] = useState({
    name: { error: false, value: "" },
    comment: { error: false, value: "" },
    Email: { error: false, value: "" },
    Contact: { error: false, value: "" },
    Profile: { error: false, value: "" }
  });

  function handleAddNewUser(e) {
    // add new user data

    const updateUsers = [
      // copy the current users state
      ...usersData,
      currentUser
    ];
    // update the state to the updatedUsers
    //console.log("current->", currentUser.name.value === "");

    setUsersData(updateUsers);
  }

  function handleNameChange(e) {
    console.log(e.target.value);
    setCurrentUser({
      ...currentUser,
      name: { ...currentUser.name, value: e.target.value }
    });
  }
  function handleEmailChange(e) {
    setCurrentUser({
      ...currentUser,
      Email: { ...currentUser.Email, value: e.target.value }
    });
  }
  function handleContactChange(e) {
    setCurrentUser({
      ...currentUser,
      Contact: { ...currentUser.Contact, value: e.target.value }
    });
  }
  function handleProfileChange(e) {
    setCurrentUser({
      ...currentUser,
      Profile: { ...currentUser.Profile, value: e.target.value }
    });
  }
  function handle(e) {
    setIsShown(true);
    //return <TableData data={usersData} />;
  }
  return (
    <div className="box1">
      <div className="box2">
        <form>
          <label>Please Enter your Name</label>
          <input
            margin="dense"
            fullWidth={true}
            value={currentUser.name.value}
            onChange={handleNameChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <br />
          <label>Please Enter your EmailId</label>

          <input
            margin="dense"
            fullWidth={true}
            value={currentUser.Email.value}
            onChange={handleEmailChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <br />
          <label>Enter your Contact Number</label>
          <input
            margin="dense"
            fullWidth={true}
            value={currentUser.Contact.value}
            onChange={handleContactChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <br />
          <label>Paste your Profile Pic Url</label>
          <input
            margin="dense"
            fullWidth={true}
            value={currentUser.Profile.value}
            onChange={handleProfileChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
        </form>
        <div
          align="center"
          style={{
            marginRight: 65
          }}
        >
          {" "}
          <button
            onClick={() => {
              handleAddNewUser();
              handle();
            }}
          >
            {" "}
            Submit
          </button>{" "}
        </div>
      </div>

      {isShown && <TableData data={usersData} />}
    </div>
  );
}

export default FormComponent;
