import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    marginLeft: "10px",
    padding: "10px",
    width: "400px",
    height: "640px",
  },
  chat: {
    height: "550px",
    width: "390px",
    paddingTop: "10px",
  },
  textArea: {
    display: "flex",
    width: "390px",
  },
  textField: {
    width: "300px !important",
  },
  massage: {
    fontSize: "large",
    display: "block",
    paddingBottom: "10px",
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [massages, setMassages] = useState([]);
  const [newMassage, setNewMassage] = useState("");

  const handleSubmit = () => {
    setMassages([...massages, newMassage]);
  };
  return (
    <Paper className={classes.chatContainer}>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography variant="h6">Send massages</Typography>
        </Box>
        <Box className={classes.chat}>
          {massages.map((massage) => (
            <Typography variant="body" className={classes.massage}>
              {massage}
            </Typography>
          ))}
        </Box>
        <Box className={classes.textArea}>
          <TextField
            onChange={(e) => setNewMassage(e.target.value)}
            variant="filled"
            className={classes.textField}
            sx={{ width: "500px" }}
          />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            send
          </Button>
        </Box>
      </Grid>
    </Paper>
  );
};

export default Chat;
