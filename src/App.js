import "./styles.css";
import ShoppingList from "./ShoppingList";
import Connection from "./Connection";
import Home from "./Home";
import ListDepartments from "./ListDepartments";
import MovieDatabase from "./MovieDatabase";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { Chip, Box } from "@mui/material";

export default function App() {
  const navigate = useNavigate();

  function handleClickHome() {
    navigate("/");
  }

  return (
    <div className="App">
      <h1 className="appTitle">App of Small Apps</h1>
      <h5>Ceci est le site de Corentin.</h5>

      <Chip
        icon={<HomeIcon />}
        label="Home"
        variant="outlined"
        onClick={handleClickHome}
      />

      <Box sx={{ mt: 2 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/connection" element={<Connection />} />
          <Route path="/list-departments" element={<ListDepartments />} />
          <Route path="/movie-database" element={<MovieDatabase />} />
        </Routes>
      </Box>
    </div>
  );
}
