function Plant(props) {
  return (
    <div className="card" style={{ marginBottom: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.species}</h6>
        <p className="card-text">{props.instruction}</p>
      </div>
    </div>
  );
}

export default Plant;
