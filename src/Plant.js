function Plant(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.species}</p>
      <p>{props.instruction}</p>
    </div>
  );
}

export default Plant;
