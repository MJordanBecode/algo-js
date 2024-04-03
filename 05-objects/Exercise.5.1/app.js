
function askTvSerie(){
    let serie ={
        serie_name: "",
        production_year: "",
        actor: []
 
    };

    serie.serie_name =  prompt("Enter your Name");

    serie.production_year =  prompt("Enter your Name");

    let ActorCount= parseInt(prompt("How much actor do you like ? "));

    for(let i = 0; i < ActorCount;i++){
        let actorName = prompt("Name of the Actor "+ (i + 1) +" :");
        serie.actor.push(actorName);
    }
    
    console.log(serie);
    return serie;
  }
  let tvSerie = askTvSerie();
  
  console.log(JSON.stringify(tvSerie));
 