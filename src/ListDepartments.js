import * as React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class ListDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], value: "", infos: false, dptInfos: [] };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((dataDepartment) => dataDepartment.json())
      .then((dataDepartment) => this.setState({ data: dataDepartment }));
  }

  handleChangeInputSearch(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleClickInfos(dep) {
    this.setState({ infos: true, dptInfos: dep });
  }

  handleClickRetour() {
    this.setState({ infos: false, dtpInfos: "" });
  }

  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }

    const lowerCaseValue = this.state.value.toLowerCase();
    const filteredDepartments = this.state.data.filter(
      (dep) => dep.nom.toLowerCase().indexOf(lowerCaseValue) !== -1
    );
    const listDpts = filteredDepartments.map((dep) => (
      <li className="elementDeChaqueDpts">
        <span className="noms">{dep.nom} </span>
        <span className="codes">({dep.code})</span>
        <span className="codeRegions">{dep.codeRegion}</span>
        <button
          variant="outlined"
          color="success"
          className="dmdInfos"
          onClick={() => this.handleClickInfos(dep)}
        >
          Plus d'informations sur le {dep.code}
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
                value={this.state.data.nom}
                onChange={(e) => this.handleChangeInputSearch(e)}
              />
            </label>
          </form>
          <div className="Retour">
            <h4>Liste des départements</h4>
            <div className="Lists">
              <ul className="tout">{listDpts}</ul>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        Voici des informations sur le {this.state.dptInfos.nom}. Son code postal
        est le {this.state.dptInfos.code}, et il est situé dans la région{" "}
        {this.state.dptInfos.codeRegion}.
        <br />
        <button onClick={() => this.handleClickRetour()}>Retour</button>
      </div>
    );
  }
}
export default ListDepartments;
