function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  function displayPokemons(url) {

    $.get( url, function( data ) {
        let reponse = ""
        console.log(data);

        reponse+="<img class='pokemon' src=\""+data.sprites.front_default+"\">";

        $(".image").html(reponse);

        let reponse2 = "<ul>";

        reponse2+= "<li>Order : "+data.order+"</li>";

        for(let i = 0; i < data.forms.length; i++ ) {
            reponse2+="<li>Pokemon : "+data.forms[i].name+"</li>";
        }

        reponse2+= "<li>Heigth : "+data.height+" ft</li>";
        reponse2+= "<li>Weight : "+data.weight+" pounds</li>";

       
        for(let i = 0; i < data.types.length; i++ ) {
            reponse2+="<li>Base stat : "+data.types[i].type.name+"</li>";
        }

        reponse2+="</ul>"
        $(".intel").html(reponse2);

    });
}

function clickPokemon(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayPokemons(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickPokemon(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickPokemon(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( ".poke" ).html(reponse);
    });
}