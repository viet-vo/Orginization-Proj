import React from "react";
import { Button } from "@material-ui/core";
import Sidebar from "../../Sidebar"

const MainPage = () => {
  return (
    <div>
      <Sidebar />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default MainPage;