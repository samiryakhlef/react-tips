import React, { useState } from 'react'
import Fruits from './Fruits'
import Form from './From'

function List() {

  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricots" },
    { id: 2, nom: "Melon" },
    { id: 3, nom: "Pastèque" },
  ])

  const handleDelete = (id) => {
    console.log("id:", id);
    // copie du state 
    const fruitsCopy = [...fruits]
    //agir sur le state 
    const fruitsCopyUpdated = fruitsCopy.filter(fruit => fruit.id !== id)
    //modifier le state
    setFruits(fruitsCopyUpdated)
  }

  const handleAdd = (fruitAjouter) => {
    const fruitCopy = [...fruits];
    fruitCopy.push(fruitAjouter);
    setFruits(fruitCopy);
  }


  return (
    <div>
      <h1>Lists de fruits</h1>
      <ul>
        {fruits.map((fruit) =>
          <Fruits FruitsInfo={fruit} fruitDelete={handleDelete} /> //<li key={fruit.id}>{fruit.nom} <button onClick={() => handleDelete(fruit.id)}>Effacer</button> </li>
        )}
      </ul>
      <Form handleAdd={handleAdd} />
    </div>
  )
}

export default List

//gestion des formulaires