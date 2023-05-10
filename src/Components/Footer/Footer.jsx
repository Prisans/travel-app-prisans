import React ,{useEffect} from 'react'
import './Footer.css'
import video from '../../Video/video.mp4'
import {FiSend} from 'react-icons/fi';
import {MdTravelExplore} from 'react-icons/md';
import {FiChevronRight} from 'react-icons/fi';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration : 1000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
              <div data-aos = "fade-up" className="text">
                <small>Keep In Touch</small>
                <h2>Travel With Us</h2>
              </div>

              <div className="inputDiv flex">
                <input data-aos = "fade-up" type="email" placeholder='Enter email address' />
                <button data-aos = "fade-up" className="btn flex" type='submit' >
                  Send <FiSend className='icon' />
                </button>
              </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex' >
               <MdTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos = "fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolore dolorum. Praesentium, enim ullam repellendus nostrum veritatis laudantium dolores recusandae.
            </div>

            <div className="footerSocial">

            </div>


          </div> 

          <div className="footerLinks grid">





            {/* Group one */}

            <div data-aos = "fade-up"
            data-aos-duration="2000"  className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>


              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Service
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Assuarance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            {/* Group Two */}


            <div data-aos = "fade-up" data-aos-duration="2000" className="linkGroup">
              <span className="groupTitle">
                PATTERNS
              </span>


              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trip Advisor
              </li>
            </div>


            {/* Group three */}

            <div data-aos = "fade-up" 
            data-aos-duration="2000"  className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>


              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rome
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bali
              </li>






            </div>

            <div className="footerDiv flex">
              <small>Best Travel Website</small>
              <small>Copyright Reserved - Prisans 2023</small>
            </div>











          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer  