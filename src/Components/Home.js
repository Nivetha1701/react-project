import * as React from 'react';
import Footer from './Footer';
import Events from './Events';
function Home() 
{
  const imageUrl = 'https://www.niemindia.com/img/course_banner_1.jpg';
  return (
    <div>
      <h1 className="Home"></h1>
      <img src={imageUrl} alt="" style={{ width: '1470px', height: '660px' }} />
      <Events />
      <Footer />
    </div>
  );
}

export default Home;