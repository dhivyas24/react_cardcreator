import React from "react";
import { useState } from "react";
import { TextArea } from "@react-ui-org/react-ui";

import Button from "@material-ui/core/Button";
import TableData from "./TableData";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "1em"
  }
}));

function FormComponent() {
  const [usersData, setUsersData] = useState([
    {
      name: { value: "" },
      comment: { value: "" },
      Email: { value: "" },
      Contact: { value: "" },
      Profile: { value: "" }
    }
  ]);
  const [currentUser, setCurrentUser] = useState({
    name: { error: false, value: "" },
    comment: { error: false, value: "" },
    Email: { error: false, value: "" },
    Contact: { error: false, value: "" },
    Profile: { error: false, value: "" }
  });

  function handleAddNewUser(e) {
    // add new user data
    e.preventDefault();
    const updateUsers = [
      // copy the current users state
      ...usersData,
      currentUser
    ];
    // update the state to the updatedUsers
    console.log("current->", currentUser.name.value === "");

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
  return (
    <Card variant="outlined">
      <h3>Share your experiences</h3>
      <form>
        <div>
          <label>Please Enter your Name</label>
          <TextField
            margin="dense"
            fullWidth={true}
            value={currentUser.name.value}
            onChange={handleNameChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <label>Please Enter your Email Id</label>
          <TextField
            margin="dense"
            fullWidth={true}
            value={currentUser.Email.value}
            onChange={handleEmailChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <label>Enter your Contact Number</label>
          <TextField
            margin="dense"
            fullWidth={true}
            value={currentUser.Contact.value}
            onChange={handleContactChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
          <label>Paste your Profile Pic Url</label>
          <TextField
            margin="dense"
            fullWidth={true}
            value={currentUser.Profile.value}
            onChange={handleProfileChange}
            name="name"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
      </form>

      <Button
        type="Post"
        onClick={handleAddNewUser}
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
      <TableData data={usersData} />
    </Card>
  );
}

export default FormComponent;
