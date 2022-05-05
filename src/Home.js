import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

class Home extends React.Component {
  render() {
    return (
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Link to="/shopping-list">Shopping list</Link>
        <Link to="/connection">Connection</Link>
        <Link to="/list-departments">Liste des départements</Link>
      </Box>
    );
  }
}

export default Home;
