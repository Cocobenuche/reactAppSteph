import React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class MovieDatabase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], value: "", infos: false, filmInfos: [] };
      }
    
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b")
          .then((dataFilms) => dataFilms.json())
          .then((dataFilms) => this.setState({ data: dataFilms }));
      }
    
    handleChangeInputSearch(e) {
        const value = e.target.value;
        this.setState({ value });
      }
    
    handleClickInfos(film) {
        this.setState({ infos: true, filmInfos: film });
      }
    
    handleClickRetour() {
        this.setState({ infos: false, filmInfos: "" });
      }
    render() {
        if (this.state.data.length === 0) {
            return "Loading...";
          }
      
          const filteredFilms = this.state.data.filter(
            (film) => film.results.name.toLowerCase().indexOf(lowerCaseValue) !== -1
          );
          const listFilm = filteredFilms.map((film) => (
            <li className="elementDeChaqueFilm">
              <span className="title">{film.results.original_title}</span>
              <button
                variant="outlined"
                color="success"
                className="dmdInfos"
                onClick={() => this.handleClickInfos(film)}
              >
                Plus d'informations sur le {film.results.name} :
              </button>
            </li>
          ));

          if (!this.state.infos) {
            return (
              <div className="Resultat">
                <form>
                  <label>
                    Recherche :
                    <input
                      type="text"
                      value={this.state.data.results.original_title}
                      onChange={(e) => this.handleChangeInputSearch(e)}
                    />
                  </label>
                </form>
                <div className="Retour">
                  <h4>Liste des films</h4>
                  <div className="Lists">
                    <ul className="tout">{listFilm}</ul>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div>
              Voici des informations sur le {this.state.filmInfos.original_title}.
              <br />
              <button onClick={() => this.handleClickRetour()}>Retour</button>
            </div>
          );
        }
}

export default MovieDatabase;