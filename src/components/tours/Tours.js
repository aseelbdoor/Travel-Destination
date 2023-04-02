import './Tours.css';

function Tours(prop) {
  let data = prop.data;
  return (
    <main>
      {
        data.map((element) => {
          return (
            <div className="top">
              <div className="title"><h1>{element.name}</h1></div>
              <div className="card">
                <div className="photo"><img src={element.image} alt={element.name} /></div>
                <div className="content">
                  <p>{element.info}</p>
                  <p>Trip price : {element.price}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </main>
  );
}

export default Tours;