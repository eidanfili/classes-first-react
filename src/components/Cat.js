import React from "react";

export default function Cat() {
  return (
    <div className="cat">
      <h1></h1>
      <p></p>
    </div>
  );
}

// async function getCats() {
//   const catsFetch = await fetch("https://catfact.ninja/breeds");
//   // console.log(catsFetch);
//   catData = await catsFetch.json();
//   console.log(catData.data);
//   catData.data.forEach((element) => {
//     var catBreed = document.createElement("div");
//     catBreed.classList.add("breed");
//     catBreed.textContent = `this cat is the: ${element.breed}, and it is from ${element.country}`;
//     mainContainer.appendChild(catBreed);
//     console.log(catBreed);
//   });
// }
// getCats();
