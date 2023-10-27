"use strict";

console.log("----------------------------------------");
console.log("Fetch Poke JSON");




const saludo = document.querySelector("#saludo")



fetch("./bulbasaur.json")
    .then(response => {
        if (response.ok)
            return response.json()
        else
            throw new Error(response.status);
    })
    .then(data => {

        const tabla = document.createElement("table");

        const sn = data.stats.map(function (statname) {
            return statname.stat.name;
        });

        const val = data.stats.map(base => base.base_stat);

        const pokemon = document.querySelector("#pokeName");
        const pokeType1 = document.querySelector("#pokeType1");
        const pokeType2 = document.querySelector("#pokeType2");
        const pokeStats = document.querySelector("#pokeStats");

        const cuadrilla = document.createElement("table");
        const columna = document.createElement("tr");


        sn.forEach(names => {
            const nombre = document.createElement("th");
            nombre.textContent = names;
            columna.appendChild(nombre);
        });

        cuadrilla.appendChild(columna);


        const bases = document.createElement("tr");

        val.forEach(baseval => {
            const statval = document.createElement("th");
            statval.textContent = baseval;
            bases.appendChild(statval);
        });
      
        cuadrilla.appendChild(bases);
      
          
        pokeStats.appendChild(cuadrilla);
    



        const nombre = data.name
        const primerTipo = data.types[0].type.name
        const segundoTipo = data.types[1].type.name

        
        pokemon.textContent = nombre;
        pokeType1.textContent = primerTipo;
        pokeType2.textContent = segundoTipo;
    
    })
    .catch(err => {
        console.error("ERROR:")
    })
    .finally(() => saludo.innerText = "TERMINAMOS");