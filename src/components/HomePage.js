import React from 'react';
import '../components/HomePage.css';
const HomePage = () => {
  return (
    <>
    <div className="flexbox-container">
    
      <article className="article">
        <h2>ICT Academy of Kerala</h2>
        <p>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions. Over the years, ICTAK has grown to a prime service provider of all ICT and innovation-related training and capacity-building programs in the state.</p>
      </article> 

        <aside className='aside aside1'>
          <img src={require('../technology.jpg')} alt="Error Loading Image" />
        
        </aside>

        
    </div>


      {/* New section: Current Offerings */}
      <div className="offerings-section">
        <img src={require('../upskill.png')} alt="Offerings Image" className="offerings-image" />

        <div className="offerings-content">
          <h2>Welcome to ICTAK</h2>
          <p>Are you a student from non-IT background?</p>
          <p>Are you looking to develop your programming skills?</p>
          <p>Are you searching for top courses as per market demand?</p>
          <p>Are you unsure about your future?</p>
          
        </div>
      </div>
    <div className='container2'>
  
    <section className="academy-section">
      {/* Logo 1: Upskilling the Youth */}
      <div className="logo-container">
        <img src={require('../transparent-road-arrows-upside-down-cup-gold-arrows-point-up-to-gold-cup-upside-down654c8514c1c4a8.3968198916995136207937.png')} alt="Upskilling Logo" className="logo-image" />
        <div className="logo-text">Upskilling the Youth</div>
      </div>

      {/* Logo 2: Vivid Courses */}
      <div className="logo-container">
        <img src={require('../web logo.png')} alt="Vivid Courses Logo" className="logo-image" />
        <div className="logo-text">Vivid Courses</div>
      </div>

      {/* Logo 3: Empowering the Nation */}
      <div className="logo-container">
        <img src={require('../achieve icon.png')} alt="Empowering Logo" className="logo-image" />
        <div className="logo-text">Empowering the Nation</div>
      </div>

      {/* Logo 4: Certification */}
      <div className="logo-container">
        <img src={require('../certification.png')} alt="Certification Logo" className="logo-image" />
        <div className="logo-text">Certification</div>
      </div>
    </section>
    </div>
    </>
  );
}

export default HomePage;