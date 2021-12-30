export function Plant(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>{props.instruction}</p>
    </div>
  );
}
