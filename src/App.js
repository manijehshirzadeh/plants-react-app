import { useState, useEffect } from "react";
import "./App.css";
import Plant from "./Plant";
import AddNewPlant from "./AddNewPlant";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";

function App() {
  const [plantsList, setPlantsList] = useState([]);
  useEffect(() => {
    supabase
      .from("plants")
      .select()
      .then((data) => {
        console.log(data);
        setPlantsList(data.body);
      });
  }, []);
  const handleAdd = (newPlant) => {
    console.log(newPlant);
    let newPlantsList = [...plantsList, newPlant];
    console.log(newPlantsList);
    setPlantsList(newPlantsList);
  };

  return (
    <BrowserRouter>
      <div className="App" style={{ padding: "10px 50px" }}>
        <Switch>
          <Route path="/create">
            <AddNewPlant />
          </Route>
          <Route path="/">
            <>
              {plantsList.map((plant) => (
                <Plant
                  key={plant.name}
                  name={plant.name}
                  species={plant.species}
                  instruction={plant.instruction}
                />
              ))}
              <Link to={{ pathname: "/create" }}>
                <button className="btn btn-primary">Add a New Plant</button>
              </Link>
            </>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
