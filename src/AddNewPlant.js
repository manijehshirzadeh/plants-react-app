import { useState } from "react";
import { useHistory } from "react-router-dom";
function AddNewPlant(props) {
  const history = useHistory();
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
    setName("");
    setSpecies("");
    setInstruction("");
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter plant name"
          value={name}
          onChange={handleNameChange}
        />{" "}
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter plant species"
          value={species}
          onChange={handleSpeciesChange}
        />{" "}
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          type="text"
          placeholder="Enter watering instructions"
          rows="3"
          value={instruction}
          onChange={handleInstruction}
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Add New Plant
      </button>
    </form>
  );
}
export default AddNewPlant;
