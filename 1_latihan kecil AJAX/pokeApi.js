const container = document.querySelector('.fetch-data');
container.addEventListener('click', async function fetchData(){
    const response = await fetch( "https://pokeapi.co/api/v2/pokemon/pikachu", {
        method: "GET"
    }); //method ini akan mereturn data dari API jika 'resolve'
    updateUI(response);
});

async function updateUI(response){
    const json = await response.json() //ubah data ke bentuk json
    const id = json.id; //akan menyimpan nilai id = 25
    const name = json.name; //akan menyimpan name = "pikachu"
    const type = json.types[0].type.name; //mereturn type = electric
    const img = json.sprites.front_default; //mereturn img = front_default

    const pokeContainer = document.querySelector('.poke-container');
    const newDiv = document.createElement("div");
    const newID = document.createElement("p");
    const newType = document.createElement("p");
    const newIMG = document.createElement("img");

    newIMG.setAttribute("src", img);
    newID.innerHTML = `${id}: ${name}`;
    newType.innerHTML = `type: ${type}`;

    newID.classList.add("id-name");
    newType.classList.add("type");
    newDiv.classList.add("electric");

    newDiv.append(newID);
    newDiv.append(newIMG);
    newDiv.append(newType);

    pokeContainer.append(newDiv);
};