import './Tours.css';
import Tour from './tour/Tour';

function Tours(prop) {
  return (
    <main>
      {
        prop.data.map((element)=>{
          return(
            <Tour id={element.id} name={element.name} image={element.image} />
          );
        })
      }
    </main>
    
  );
}

export default Tours;