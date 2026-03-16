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
prev.addEventListener("click", async ()=>{
    console.log("click prev");
});
next.addEventListener("click", async ()=>{
    console.log("click next");
});

async function main(){
    try {
        const rick = await getInformation(
          "https://rickandmortyapi.com/api/location/" + rickAndMortyId);
        console.log("ready to fetch")
    } catch (error) {
        console.error(error)
    }
}
main();