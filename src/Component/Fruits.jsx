import React from "react";

function Fruits({FruitsInfo, fruitDelete}) {

  return (
    <div>
      <li key={FruitsInfo.id}>
        {FruitsInfo.nom}{" "}
        <button onClick={() =>fruitDelete(FruitsInfo.id)}>Effacer</button>{" "}
      </li>
    </div>
  );
}

export default Fruits;
