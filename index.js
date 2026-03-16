'use strict';
//state-which rick and morty are we on//

//Variables
const output = document.querySelector("#output");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let rickAndMortyId = 1; 
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
          const rick = await getInformation(
            "https://rickandmortyapi.com/api/character/" + rickAndMortyId);
            console.log(rick);
        });
        next.addEventListener("click", async () => {
            rickAndMortyId++
          const rick = await getInformation(
            "https://rickandmortyapi.com/api/character/" + rickAndMortyId
          );
          console.log(rick);
        });
    } catch (error) {
        console.error(error)
    }
}
main();