import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  }
});

function TableData({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {data &&
          data.map((item, id) => (
            <Typography key={item.id}>
              <Typography align="left">{item.Profile.value}</Typography>
              <Typography align="left">{item.Email.value}</Typography>
              <Typography align="left">{item.Contact.value}</Typography>
              <img id="img1" src={item.Profile.value} alt="alt" />
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
}

export default TableData;
