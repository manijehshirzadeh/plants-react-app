import { useState } from "react";
import "./App.css";
import Plant from "./Plant";
import AddNewPlant from "./AddNewPlant";

let initialPlantsList = [
  {
    name: "Rose",
    species: "This is very beautiful flower and has many colours",
    instruction: "To water twice per day",
  },
  {
    name: "Sunflower",
    species:
      "a genus comprising about 70 species of annual and perennial flowering plants in the daisy family Asteraceae.",
    instruction: "To water twice per day",
  },
  {
    name: "Lilly",
    species:
      "The lily is incredible for pollinators, attracting insects with its large colorful flowers and tasteful nectar. Certain species of lily are pollinated by wind, while others are pollinated by bees! Lilies have large petals that can be white, yellow, orange, red, purple or pink in color. They can even have freckles!",
    instruction: "To water once per day",
  },
];

function App() {
  const [plantsList, setPlantsList] = useState(initialPlantsList);
  const handleAdd = (newPlant) => {
    console.log(newPlant);
    let newPlantsList = [...plantsList, newPlant];
    console.log(newPlantsList);
    setPlantsList(newPlantsList);
  };
  return (
    <div className="App" style={{ padding: "10px 50px" }}>
      {plantsList.map((plant) => (
        <Plant
          key={plant.name}
          name={plant.name}
          species={plant.species}
          instruction={plant.instruction}
        />
      ))}
      <AddNewPlant onAdd={(newPlant) => handleAdd(newPlant)} />
    </div>
  );
}

export default App;
