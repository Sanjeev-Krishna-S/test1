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
    <div className='container2'>
  
    <section className="academy-section">
      {/* Logo 1: Upskilling the Youth */}
      <div className="logo-container">
        <img src={require('../upskill.png')} alt="Upskilling Logo" className="logo-image" />
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
    </section>
    </div>
    </>
  );
}

export default HomePage;