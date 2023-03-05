import React from "react";
import { useState } from "react";
function Compteur() {
  const [compteur, setCompteur] = useState(0);

  const add = () => {
    setCompteur(compteur + 1);
  };
  return (
    <div className="App">
      <h1>compteur:{compteur}</h1>
      <button onClick={add}>Change</button>
    </div>
  );
}

export default Compteur;
