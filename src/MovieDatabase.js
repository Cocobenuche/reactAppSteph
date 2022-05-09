import * as React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class MovieDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], value: "", infos: false, filmInfos: [] };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((dataFilm) => dataFilm.json())
      .then((dataFilm) => this.setState({ data: dataFilm }));
  }

  handleChangeInputSearch(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleClickInfos(film) {
    this.setState({ infos: true, filmInfos: dep });
  }

  handleClickRetour() {
    this.setState({ infos: false, filmInfos: "" });
  }
  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }

    const lowerCaseValue = this.state.value.toLowerCase();
    const filteredFilms = this.state.data.filter(
      (dep) => film.nom.toLowerCase().indexOf(lowerCaseValue) !== -1
    );
    const listFilms = filteredFilms.map((film) => (
      <li className="elementDeChaqueFilm">
        <span className="noms">{film.nom} </span>
        <span className="codes">({film.code})</span>
        <span className="codeRegions">{film.codeRegion}</span>
        <button
          variant="outlined"
          color="success"
          className="dmdInfos"
          onClick={() => this.handleClickInfos(dep)}
        >
          Plus d'informations sur le {film.code}
        </button>
      </li>
    ));
  }
}

export default MovieDatabase;
