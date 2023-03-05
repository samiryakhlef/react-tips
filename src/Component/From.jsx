import React, { useState } from "react";


function From({handleAdd}) {

    const [newFruit, setNewFruit] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    //j'ajoute les nouvelles value
    const id = new Date().getTime();
    const nom = newFruit;
    //je push les nouvelle valeur
    const fruitAjouter = { id, nom };
    handleAdd(fruitAjouter)
    // je set la copy
    //je vide l'input
    setNewFruit("");
  };

  const handleChange = (event) => {
    setNewFruit(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={newFruit}
        type="text"
        placeholder="ajouter un fruit..."
        onChange={handleChange}
      />
      <button>Ajouter un fruits</button>
    </form>
  );
}

export default From;
