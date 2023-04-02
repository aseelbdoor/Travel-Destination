import './Home.css';
import Header from '../header/Header';
import Tours from '../tours/Tours';
import Footer from '../footer/Footer';
function Home(prop){
    return (
        <div class="container">
        <Header />
        <Tours data={prop.data} />
        <Footer />
        </div>
      );
}

export default Home;