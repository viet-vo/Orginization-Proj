import React from "react";
import { Button } from "@material-ui/core";
import Sidebar from "../../Sidebar"

export default function MainPage() {
  return (
    <div>
      <Sidebar />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}
