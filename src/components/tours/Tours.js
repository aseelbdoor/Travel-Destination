import './Tours.css';

function Tours(prop) {
  return (
    <div className="top">
      <div className="title"><h1>{prop.name}</h1></div>
      <div className="card">
        <div className="photo"><img src={prop.image} alt={prop.name} /></div>
        <div className="content">
          <p>{prop.info}</p>
          <p>Trip price : {prop.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Tours;