import React from 'react';
import './HomePage.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
const HomePage = () => {
  return (
    <>
    <div className="flexbox-container">
    
      <article className="article">
        <h2>ICT Academy of Kerala</h2>
        <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</p>
      </article> 

        <aside className='aside aside1'>
          <img src={require('../images/technology.jpg')} alt="Error Loading Image" />
        
        </aside>

        
    </div>


      {/* New section: Current Offerings */}
      <div className="offerings-section">
        <img src={require('../images/upskill.png')} alt="Offerings Image" className="offerings-image" />

        <div className="offerings-content">
          <h2>Welcome to ICTAK</h2>
          <p>Are you a student from non-IT background?</p>
          <p>Are you looking to develop your programming skills?</p>
          <p>Are you searching for top courses as per market demand?</p>
          <p>Are you unsure about your future?</p>
          
        </div>
      </div>

      {/* New section: What we offer */}
      <div className="offer-section">
        <h2 className="offer-heading">What we offer!</h2>

        <div className="offer-content">
          <p>ICTAK has been pioneering its training model over the years both for Online and Offline training. With over 25K students & 10K teachers and a similar number of executives being trained by us, and has produced over 4.5 positive feedback ratings for the training that were conducted by ICT Academy of Kerala amongst its learners. We provide scholarships coupled with 100% placements, and a wide variety of trending courses.</p>
          <p id='join'>Join us and build your career.</p>
        </div>
      </div>
  
    <div className='container2'>
  
    <section className="academy-section">
      {/* Logo 1: Upskilling the Youth */}
      <div className="logo-container">
        <img src={require('../images/transparent-road-arrows-upside-down-cup-gold-arrows-point-up-to-gold-cup-upside-down654c8514c1c4a8.3968198916995136207937.png')} alt="Upskilling Logo" className="logo-image" />
        <div className="logo-text">Upskilling the Youth</div>
      </div>

      {/* Logo 2: Vivid Courses */}
      <div className="logo-container">
        <img src={require('../images/web logo.png')} alt="Vivid Courses Logo" className="logo-image" />
        <div className="logo-text">Vivid Courses</div>
      </div>

      {/* Logo 3: Empowering the Nation */}
      <div className="logo-container">
        <img src={require('../images/achieve icon.png')} alt="Empowering Logo" className="logo-image" />
        <div className="logo-text">Empowering the Nation</div>
      </div>

      {/* Logo 4: Certification */}
      <div className="logo-container">
        <img src={require('../images/certification.png')} alt="Certification Logo" className="logo-image" />
        <div className="logo-text">Certification</div>
      </div>
    </section>
    </div>
    <footer className="footer" id="contact-section">
        <div className="footer-content">
          <div className="footer-logo">
            <p style={{ color: '#fff', fontSize: '2.1em', fontWeight: 'bold' }}>ICTAK</p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/ictkerala/?hl=en" target="_blank" rel="noopener noreferrer">
              <InstagramIcon fontSize="large" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/ictkerala/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon fontSize="large" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/ictkerala/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon fontSize="large" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/user/ictkerala" target="_blank" rel="noopener noreferrer">
              <YouTubeIcon fontSize="large" className="social-icon" />
            </a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default HomePage;