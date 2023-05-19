let json = document.getElementById("json");

function crearComponente(obj){
    const {category,score,icon,color}=obj;
    let div= document.createElement("div");
    json.append(div);
    div.className="dato"
    div.innerHTML=`
    <div class="name">
        <img src="${icon}" alt="${category}">
        <p class="${color}">${category}</p>
    </div>
    <div class="score">
        <p>${score}<span>  /100</span></p>
    </div>
    `
}
function optenerData() {
    let url = "data.json";
    fetch(url)
  .then(response => response.json())
  .then(data => data.forEach(element => {
    crearComponente(element)
  }));

}
optenerData();