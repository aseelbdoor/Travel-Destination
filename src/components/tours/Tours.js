import './Tours.css';

function Tours(prop) {
  let data = prop.data;
  return (
    <main>
      {
        data.map((element) => {
          return (
            <div class="top">
              <div class="title"><h1>{element.name}</h1></div>
              <div class="card">
                <div class="photo"><img src={element.image} alt={element.name} /></div>
                <div class="content">
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