function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

function clickBerries(url) {
    $.get( url, function( data ) {
        
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayBerries(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickBerries(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickBerries(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}



function displayBerries(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Firmness : "+data.firmness.name+"</li>";

            for(let i = 0; i < data.flavors.length; i++ ) {
                reponse+="<li>Flavor : "+data.flavors[i].flavor.name+" and Potency :  "+data.flavors[i].potency+"</li>";
            }

            reponse+="<li>Item : "+data.item.name+" and Natural Gift Power : "+data.natural_gift_power+"</li>";
            reponse+="<li>Natural Gift Type : "+data.natural_gift_type.name+" and Smoothness : "+data.smoothness+"</li>";
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}


function clickContest(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayContest(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickContest(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickContest(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayContest(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Berry Flavor : "+data.berry_flavor.name+"</li>";

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+" and Color :  "+data.names[i].color+"</li>";
            }

            
           
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickEncounters(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayEncounters(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickEncounters(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickEncounters(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayEncounters(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+"</li>";
            }
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickEvolution(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayEvolution(\""+data.results[i].url+"\")'>"+(+i+1)+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickEvolution(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickEvolution(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayEvolution(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Specie name : "+data.chain.species.name+"</li>";

            for(let i = 0; i < data.chain.evolves_to.length; i++ ) {
                
            
            reponse+="<li>Evolves to : "+data.chain.evolves_to[i].species.name+"</li>";
            reponse+="<li>Min Level : "+data.chain.evolves_to[i].evolution_details[i].min_level+"</li>";
            }
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickGames(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayGames(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickGames(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickGames(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayContest(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Berry Flavor : "+data.berry_flavor.name+"</li>";

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+" and Color :  "+data.names[i].color+"</li>";
            }

            
           
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickItems(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayItems(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickItems(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickItems(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayContest(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Berry Flavor : "+data.berry_flavor.name+"</li>";

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+" and Color :  "+data.names[i].color+"</li>";
            }

            
           
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickLocations(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayLocations(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickLocations(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickLocations(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayContest(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Berry Flavor : "+data.berry_flavor.name+"</li>";

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+" and Color :  "+data.names[i].color+"</li>";
            }

            
           
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickMachines(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayMachines(\""+data.results[i].url+"\")'>"+(+i+1)+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickMachines(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickMachines(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayMachines(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Item : "+data.item.name+"</li>";
            reponse+="<li>Move : "+data.move.name+"</li>";
            reponse+="<li>Version group : "+data.version_group.name+"</li>";
            
            reponse+="</ul>";
            $("#detail").html(reponse);

    });
}

function clickMoves(url) {
    $.get( url, function( data ) {
        console.log(data)
        let reponse = "<ul>"
        for(let i = 0; i < data.results.length; i++ ) {
            //$("liste").html("<li></li>")
            reponse+="<li onclick='displayMoves(\""+data.results[i].url+"\")'>"+data.results[i].name+"</li>";
        }
        reponse+="</ul>";

        reponse+="<div class='container'>"
        if(data.previous === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickMoves(\""+data.previous + "\")'>Précédent</div>"
        }

        if(data.next === null) {
            reponse+= "<div></div>"
        } else {
            reponse+="<div class='btn' onclick='clickMoves(\""+data.next + "\")'>Suivant</div>"
        }

        reponse+="</div>"
        
        $( "#liste" ).html(reponse);
    });
}

function displayContest(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);
        
            reponse+="<li>Berry Flavor : "+data.berry_flavor.name+"</li>";

            for(let i = 0; i < data.names.length; i++ ) {
                reponse+="<li>Name : "+data.names[i].name+" and Color :  "+data.names[i].color+"</li>";
            }

            
           
            reponse+="</ul>";
            $("#detail").html(reponse);

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
        
        $( "#liste" ).html(reponse);
    });
}

function displayPokemons(url) {

    $.get( url, function( data ) {
        let reponse = "<ul>"
        console.log(data);

        for(let i = 0; i < data.forms.length; i++ ) {
            reponse+="<li>Form : "+data.forms[i].name+"</li>";
        }
        for(let i = 0; i < data.game_indices.length; i++ ) {
            reponse+="<li>Version : "+data.game_indices[i].version.name+"</li>";
        }
        for(let i = 0; i < data.moves.length; i++ ) {
            reponse+="<li>Move : "+data.moves[i].move.name+"</li>";
        }
        for(let i = 0; i < data.stats.length; i++ ) {
            reponse+="<li>Base stat : "+data.stats[i].base_stat+"</li>";
            reponse+="<li>Stat : "+data.stats[i].stat.name+"</li>";
        }
        for(let i = 0; i < data.types.length; i++ ) {
            reponse+="<li>Base stat : "+data.types[i].type.name+"</li>";
        }

        reponse+="<img class='pokemon' src=\""+data.sprites.front_default+"\">";

        reponse+="</ul>"
        $("#detail").html(reponse);

    });
}