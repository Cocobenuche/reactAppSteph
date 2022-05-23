import "./styles.css";
import ShoppingList from "./ShoppingList";
import Connection from "./Connection";
import Home from "./Home";
import ListDepartments from "./ListDepartments";
import MovieGenres from "./MovieGenres";
import MeteoNantes from "./MeteoNantes";
import Meteo from "./Meteo";
import { Routes, Route, useNavigate } from "react-router-dom";
import {HomeIcon} from "@mui/icons-material/Home";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Chip, Box } from "@mui/material";
import { AccountCircleOutlined, GroupsOutlined } from "@mui/icons-material";

export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="App">
      <h1 className="appTitle">World of likes</h1>
      <h5>Le premier réseau idéal pour une soirée RPG and Chill.</h5>

      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Chip
        icon={<GroupOutlinedIcon />}
        label="Friends"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Chip
        icon={<AccountCircleOutlinedIcon />}
        label="Profil"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/list-departments" element={<ListDepartments />} />
          <Route path="/moviegenres" element={<MovieGenres />} />
          <Route path="/meteonantes" element={<MeteoNantes />} />
          <Route path="/meteo" element={<Meteo />} />
        </Routes>
      </Box>
    </div>
  );
}
