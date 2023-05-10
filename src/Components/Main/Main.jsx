import React , {useEffect} from 'react'
import './Main.css'
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"
import img4 from "../../Images/img4.jpg"
import img5 from "../../Images/img5.jpg"
import img6 from "../../Images/img6.jpg"
import img7 from "../../Images/img7.jpg"
import img8 from "../../Images/img8.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'


const Data = [
  {
    id : 1,
    imgSrc : img1,
    destTitle : "Bora Bora",
    location : "New Zealand",
    grade : "CULTURAL RELAX",
    fees : "$700",
    description : "The Bora Bora island is one of the most popular islands in The Islands of Tahiti. One of nine islands within the Society Islands, Bora Bora was formed over seven million years ago by a volcano. Like most of the islands of French Polynesia, Bora Bora is surrounded by a ring of coral reef, also known as an atoll." ,
  } ,
  {
    id : 2,
    imgSrc : img2,
    destTitle : "Machu Picchu",
    location : "Peru",
    grade : "CULTURAL RELAX",
    fees : "$600",
    description : "More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru. " ,
  } ,
  {
    id : 3,
    imgSrc : img3,
    destTitle : "Great Barrier Reef",
    location : "Australia",
    grade : "CULTURAL RELAX",
    fees : "$700",
    description : "The Great Barrier Reef is a site of remarkable variety and beauty on the north-east coast of Australia. It contains the world's largest collection of coral reefs, with 400 types of coral, 1,500 species of fish and 4,000 types of mollusc." ,
  } ,
  {
    id : 4,
    imgSrc : img4,
    destTitle : "Cappadocia",
    location : "Turkey",
    grade : "CULTURAL RELAX",
    fees : "$800",
    description : "Cappadocia is a region spreading an area covering the provinces particularly to Nevsehir, Kirsehir, Nigde, Aksaray and Kayseri. The region of Cappadocia is a place where nature and history integrates. " ,
  } ,
  {
    id : 5,
    imgSrc : img5,
    destTitle : "Gaunajuato",
    location : "Mexico",
    grade : "CULTURAL RELAX",
    fees : "$500",
    description : "Guanajuato, city, capital of Guanajuato estado (state), central Mexico. Situated on the Mesa Central, it is spread over steep hillsides at the junction of three ravines at an average elevation of about 6,725 feet (2,050 metres) above sea level." ,
  } ,
  {
    id : 6,
    imgSrc : img6,
    destTitle : "Cinque Terre",
    location : "Italy",
    grade : "CULTURAL RELAX",
    fees : "$600",
    description : "Stretching 15 km along the Italian Riviera coast between Levanto and La Spezia in northwestern Italy, Cinque Terre is a steep seaside landscape that humans have transformed with stone walled terraces for growing grape vines and olive tre." ,
  } ,
  {
    id : 7,
    imgSrc : img7,
    destTitle : "Ankor Wat",
    location : "Cambodia",
    grade : "CULTURAL RELAX",
    fees : "$900",
    description : "Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century." ,
  } ,
  {
    id : 8,
    imgSrc : img8,
    destTitle : "Taj Mahal",
    location : "India",
    grade : "CULTURAL RELAX",
    fees : "$700",
    description : "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
  } 
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration : 1000})
  },[])

  return (
      <section className="main container section">


        <div className="secTitle">
          <h3 className="title">
            Most Visited Destnation
          </h3>
        </div>


        <div className="secContent grid">
              {
                Data.map(({id , imgSrc , destTitle , location , grade , fees , description  })=>{
                  return(
                    <div key={id} data-aos = "fade-up" className="singleDestination">

                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle } />
                    </div>

                    <div className="cardInfo">
                      <h4 className="destTitle">
                        {destTitle}
                      </h4>

                      <span className="contient flex">
                        <HiOutlineLocationMarker className='icon' />
                      <span className="name">{location}</span>
                      </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>

                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>

                    <button className="btn flex">
                      Details  <BsClipboardCheck className='icon' />
                    </button>


                    </div>

                    </div>
                  )
                })
              }
        </div>



      </section>  
  )
}

export default Main