import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Venue.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { getVenues } from '../../api/Api'

const Venue = () => {



  const [venues, setVenue]= useState ([]);

  useEffect(()=>{
    getAllVenues();
  },[]);

  const getAllVenues = async()=>{
    let response =  await getVenues();
    setVenue(response.data);
 
   }

  return (
    <>
    <Navbar/>
   <section id="hotels" className="section-with-bg">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <div className="section-header text-center mb-4">
      <h2>Venue</h2>
      <p className='text-center'> Her are some nearby hotels</p>
    </div>
    <div className="row aos-init aos-animate" data-aos="fade-up" data-aos-delay={100}>
     {
      venues.map((venue)=>(
        <div className="col-lg-4 col-md-6">
        <div className="hotel">
          <div className="hotel-img">
            <img src={venue.image} alt="Hotel 1" className="img-fluid" />
          </div>
          <h3><Link to={venue.venueurl}>{venue.nameofplace}</Link></h3>
          <div className="stars">
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
            <i className="bi bi-star-fill" />
          </div>
          <p>{venue.address}</p>
        </div>
      </div>
      ))
     }
     
    </div>
  </div>
</section>
<Footer/>
    
    </>
  )
}

export default Venue