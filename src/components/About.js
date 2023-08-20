import React from 'react'

function About() {
    const carouselItemStyle = {
      height: '40rem', // Default height
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    };
  
    const images = {
      1:"https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRvZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      2:"https://images.unsplash.com/photo-1521247560470-d2cbfe2f7b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGRvZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      3:"https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3ByaW5nfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
    const img1Style = {
      backgroundImage: `url(${images[1]})`,
    };
    const img2Style = {
      backgroundImage: `url(${images[2]})`,
    };
    const img3Style = {
      backgroundImage: `url(${images[3]})`,
    };
  
    const handleResize = () => {
      // Adjust the carousel item height based on screen width
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth <= 576; // Adjust this value as needed
      carouselItemStyle.height = isMobile ? '10rem' : '40rem';
    };
  
    // Add a window resize event listener
    window.addEventListener('resize', handleResize);
  
    // Call handleResize once to set the initial height
    handleResize();
  
  return (
    <div>
    <div id="carouselExampleIndicators" className="carousel slide my-5" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={Object.assign({},carouselItemStyle,img1Style)}>
    </div>
    <div className="carousel-item" style={Object.assign({},carouselItemStyle,img2Style)}>
    </div>
    <div className="carousel-item" style={Object.assign({},carouselItemStyle,img3Style)}>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="border border-warning p-5 my-5 bg-dark text-warning"><p>We are number one in generating quotes in Asia. We are happy to anounce that we are conducting silver jubly function on next month at qwerty island, see you there, ba-bye </p></div>
</div>
  )
}

export default About