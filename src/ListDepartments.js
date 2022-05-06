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
    const filteredDepartments = this.state.data.filter(
      (dep) => dep.nom.indexOf(this.state.value) !== -1
    );
    const listDpts = filteredDepartments.map((departement) => (
      <li className="elementDeChaqueDpts">
        <span className="noms">{departement.nom} </span>
        <span className="codes">({departement.code})</span>
        <span className="codeRegions">{departement.codeRegion}</span>
      </li>
    ));
    return (
      <div className="Resultat">
        <form>
          <label>
            Recherche :
            <input type="text" name="name" value={this.state.data.nom} />
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
}
export default ListDepartments;
