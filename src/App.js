import React, { useContext } from "react";
import { Typography, AppBar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import VideoPlayer from "./components/VideoPlayer";
import Sidebar from "./components/Sidebar";
import Notifications from "./components/Notifications";
import Chat from "./components/Chat";
import { SocketContext } from "./Context";

const useStyles = makeStyles((theme) => ({
  appBarWrapper: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  appBar: {
    width: "596px",
    borderRadius: 5,
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
}));

const App = () => {
  const { callAccepted, callEnded } = useContext(SocketContext);
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.appBarWrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            Custom Video Chat
          </Typography>
        </AppBar>
      </Box>
      <Box className={classes.wrapper}>
        <Box>
          <VideoPlayer />
          <Sidebar>
            <Notifications />
          </Sidebar>
        </Box>
        <Box>{callAccepted && !callEnded && <Chat />}</Box>
      </Box>
    </div>
  );
};

export default App;
