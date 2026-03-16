'use strict';
//state-which rick and morty are we on//

//Variables
const output = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let rickAndMortyId = 1; 

function render(rick){
    const id = document.createElement("p");
    const name = document.createElement("p");
    const species = document.createElement("p");
    const origin = document.createElement("p");
    const img = document.createElement("img");

    id.textContent = rick.id
    name.textContent = rick.name
    species.textContent = rick.species
    origin.textContent = rick.origin.name
    img.src = rick.image
    img.alt = rick.name

    output.textContent = ""
    output.appendChild(id);
    output.appendChild(name);
    output.appendChild(species);
    output.appendChild(origin);
    output.appendChild(img);
}
//Function for API
async function getInformation(url){
    try {
        const res = await fetch(url)
        if(res.status !== 200){
            throw new Error("Failed to fetch information");
        }
        const rick = await res.json();
        return rick; 
    } catch (error) {
        console.error(error)
    }
};
//Main Function

async function main(){
    try {
        const rick = await getInformation(
          "https://rickandmortyapi.com/api/character/" + rickAndMortyId);
          console.log(rick)
        prev.addEventListener("click", async () => {
           if(rickAndMortyId < 2){
            return
           } rickAndMortyId--
          const rick = await getInformation(
            "https://rickandmortyapi.com/api/character/" + rickAndMortyId);
            console.log(rick);
            render(rick)
        });
        next.addEventListener("click", async () => {
            rickAndMortyId++
          const rick = await getInformation(
            "https://rickandmortyapi.com/api/character/" + rickAndMortyId);
            console.log(rick);
            render(rick)
        });
    } catch (error) {
        console.error(error)
    }
}
main();
