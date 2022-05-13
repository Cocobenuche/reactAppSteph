import React, { Component } from "react";

class MeteoNantes extends React.Component{
    constructor(props){
    super(props);
    this.state={
        items:[],
        today:[],
        inputSearchValue:"",
        isSubmited:false,
        lien:""

    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    }


    handleChangeInput(e) {
        const { value } = e.target;
        this.setState({
          inputSearchValue: value,
          lien:"https://www.prevision-meteo.ch/services/json/"+value
        });
    }
    handleSubmit(){
        this.setState({
          isSubmited: true
        });
 
            fetch(this.state.lien)
            .then((data) => data.json())
            .then((data) => {
            this.setState({
                items: data.city_info,
                today: data.current_condition
            });
            });
    }
    goBack(){
        this.setState({
            isSubmited : false,
            lien:"",
            items:[],
            today:[],inputSearchValue:""
        })
    }

    render(){
        const {items, today,inputSearchValue,isSubmited,lien}=this.state;

        return(
        <div>
            <h1>Données météo</h1>
            <label for="city">Choisissez une ville : </label>
                <input
                id="city"
                type="text"
                name="nom"
                onChange={this.handleChangeInput}            
                />
            <button onClick={() =>this.handleSubmit()}>Valider</button>

         {isSubmited &&(
         <>
         <div className="resultats">
         <h1>{items.name} :</h1>
         <h5>Le soleil se lève à {items.sunrise} et se couche à {items.sunset}.</h5>
         <h6>Il fait actuellement {today.tmp} degrés, et le ciel est {today.condition}.</h6>
         <button onclick={() => this.goBack()}>Retour</button>
         </div>
         </>)
         
         }
     
   </div>
    )    
}
}
export default MeteoNantes;