import './TourDetails.css';
import {Route, Link, Routes, useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function TourDetails(){
    const params = useParams();
    console.log(params.id);
    return(
        <section className='details'>
            <Navbar />
            <div className='destination' style={{backgroundImage: `url("https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg")`}}>
                <div className='info'>
                    <p>Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!</p>
                </div>
            </div>
        </section>
    )
}


export default TourDetails;
