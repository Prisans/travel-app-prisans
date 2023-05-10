import React ,{useEffect} from 'react'
import './Home.css'
import video from '../../Video/travel.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {TfiGithub} from 'react-icons/tfi'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Home = () => {

  useEffect(()=>{
    Aos.init({duration : 1000})
  },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4" ></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos = "fade-up" className="smallText">
            Our Packages
          </span>

          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>
      
      <div data-aos = "fade-up" className="cardDiv grid">

        {/* <-------------------------DATE---------------------------- */}

        <div className="dateInput">
          <label htmlFor="date">Select your date</label>
          <div className="input flex">
            <input type="date"/>
            
          </div>
        </div>

{/* <----------------------------LOCATION------------------------ */}

        
        <div className="destinationInput">
          <label htmlFor="city">Search your destination</label>
          <div className="input flex">
            <input type="text" placeholder='Enter Name here...' />
            <GrLocation className='icon' />
          </div>
        </div>


        {/* <-------------------PRICE----------------------------- */}



        <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price : </label>
                <h3 className="total">$5000</h3>
              </div>

              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
        </div>

        <div className="searchOptions flex">
          <HiFilter className='icon' />
          <span>More Filters</span>
        </div>

      </div>

      <div data-aos = "fade-up" className="homeFooterIcons flex">
         <div className="rightIcons">
            <TfiGithub className='icon' />
            <AiFillLinkedin className='icon' />
            <FaTripadvisor className='icon' />
            
         </div>

         <div className="leftIcons">
         <AiOutlineUnorderedList className='icon' />
         <TbApps className='icon' />
         </div>
      </div>
                                          
      </div>
    </section>
  )
}

export default Home