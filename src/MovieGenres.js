import React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class MovieGenres extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [], value: "", infos: false, genreInfos: [], dataf : [], img:"", infof: false, infoFilm:[]};
      }
    
      componentDidMount() {
        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=b95a398c6c65c248eab3893cd6e36e2b")
          .then((dataGenres) => dataGenres.json())
          .then((dataGenres) => this.setState({ data: dataGenres.genres }));
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b")
            .then((dataFilms) => dataFilms.json())
            .then((dataFilms) => this.setState({dataf: dataFilms.results}))
      }
    
      handleChangeInputSearch(e) {
        const value = e.target.value;
        this.setState({ value });
      }
    
      handleClickInfos(genre) {
        this.setState({ infos: true, genreInfos: genre });
      }
    
      handleClickRetour() {
        this.setState({ infos: false, genreInfos: "" });
      }
      onClickImg(film) {
        this.setState({infof: true, img: film.poster_path, infoFilm:film});
      }
      handleClickRetourFilm() {
          this.setState({infof:false, img:"", infoFilm:[]});
      }
    
      render() {
        if (this.state.data.length === 0) {
          return "Loading...";
        }
    
        const lowerCaseValue = this.state.value.toLowerCase();
        const filteredGenres = this.state.data.filter(
          (genre) => genre.name.toLowerCase().indexOf(lowerCaseValue) !== -1
        );
        const listGenres = filteredGenres.map((genre) => (
          <li className="elementDeChaqueGenre">
            <span className="noms">{genre.name} </span>

            <button
              variant="outlined"
              color="success"
              className="dmdInfos"
              onClick={() => this.handleClickInfos(genre)}
            >
              Accès aux films d'/de {genre.name}
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
                    value={this.state.data.name}
                    onChange={(e) => this.handleChangeInputSearch(e)}
                  />
                </label>
              </form>
              <div className="Retour">
                <h4>Liste des genres</h4>
                <div className="Lists">
                  <ul className="tout">{listGenres}</ul>
                </div>
              </div>
            </div>
          );
        }
        const filteredFilms = this.state.dataf.filter(
          (film) => film.genre_ids.includes(this.state.genreInfos.id)
        );
        const listFilms = filteredFilms.map((film) => (
          <li className="elementDeChaqueGenre">
            <span className="noms">{film.original_title} </span>
            <button className="infosFilms" onClick={() => this.onClickImg(film)}>Affiche de {film.original_title}</button>
        </li>
        ));
        if(this.state.infof) {
        return (
            <div className="Resultats">
            <div>Voici l'affiche de {this.state.infoFilm.original_title}.</div>
            <div><img src={"https://image.tmdb.org/t/p/w500/"+this.state.img}/></div>
            <div>Résumé du film : <br /> {this.state.infoFilm.overview} </div>
            <button onClick={()=> this.handleClickRetourFilm()}>Retour</button>
            </div>
        );
        }
        return (
          <div>
            Voici des informations sur le {this.state.genreInfos.name}, comme un florilège de films de ce genre.
            <br />
            <div>{listFilms}</div>

            <button onClick={() => this.handleClickRetour()}>Retour</button>
          </div>
        );
        

      }
}

export default MovieGenres;