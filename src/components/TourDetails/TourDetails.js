import './TourDetails.css';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
// @ts-ignore
const data = require('../../data/db');

function TourDetails() {
    const [readmore,setReadMore]=useState(false);
    function Read(){
       setReadMore(!readmore);
    }
    // @ts-ignore
    const {id} = useParams();
    let destin = data.filter((element) => element.id === id);
    let element = destin[0];
    return (
        <>
            <section className='details' style={{ backgroundImage: `url(${element.image})` }}>
                <Navbar />
                <div className='destination'>
                    <h1>{element.name}</h1>
                    <div className='info'>
                        {
                            readmore?
                            <p>{element.info}<button onClick={Read}>Reade Less</button></p>:
                            <p>{(element.info.substring(0,150))}<button onClick={Read}>Reade More</button></p>
                        }
                        <p className='price'>Trip Price : {element.price}</p>
                    </div>
                </div>
            </section>
        </>
    )
}


export default TourDetails;
