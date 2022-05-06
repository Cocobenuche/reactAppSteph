import React from "react";

class ListDepartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((dataDepartment) => dataDepartment.json())
      .then((dataDepartment) => this.setState({ data: dataDepartment }));
  }
  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }

    const listNomsDpts = this.state.data.map((departement) => (
      <li>{departement.nom}</li>
    ));
    const listCodesDpts = this.state.data.map((departement) => (
      <li>{departement.code}</li>
    ));
    const listCodesRegionsDpts = this.state.data.map((departement) => (
      <li>{departement.codeRegion}</li>
    ));
    const listDpts = this.state.data.map((departement) => (
      <li className="elementDeChaqueDpts">
        <span className="noms">{departement.nom} </span>
        <span className="codes">({departement.code})</span>
        <span className="codeRegions">{departement.codeRegion}</span>
      </li>
    ));
    return (
      <div className="Resultat">
        <form className="Recherche">
          <label>
            Recherche :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Filtrer" />
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
}
export default ListDepartments;
