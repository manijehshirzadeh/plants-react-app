import { useState } from "react";

function AddNewPlant(props) {
  //   console.log(props);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [instruction, setInstruction] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpeciesChange = (e) => {
    setSpecies(e.target.value);
  };
  const handleInstruction = (e) => {
    setInstruction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newPlant = { name: name, species: species, instruction: instruction };
    props.onAdd(newPlant);
    console.log({ name: name, species: species, instruction: instruction });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter plant name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Enter plant species"
        value={species}
        onChange={handleSpeciesChange}
      />
      <textarea
        type="text"
        placeholder="Enter watering instructions"
        rows="3"
        value={instruction}
        onChange={handleInstruction}
      />
      <button type="submit">Add New Plant</button>
    </form>
  );
}
export default AddNewPlant;
