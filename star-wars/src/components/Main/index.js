import React from "react";
console.log("@main.index.js");
let starWarsApi = `https://swapi.dev/api/people`;
let lukeSkywalker = "obi";
fetch(starWarsApi)
  .then((response) => response.json())
  .then((data) => {
    console.log("inside fetch");
    console.log(data);
    lukeSkywalker = data.results[0].name;
    console.log(lukeSkywalker);
    document.getElementById("luke").innerHTML = lukeSkywalker;
  });

function Main() {
  return (
    <section>
      <h1>Star Wars Section</h1>
      <h1 id="luke"></h1>
    </section>
  );
}

export default Main;
