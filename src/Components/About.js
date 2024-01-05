import React from 'react';

const About = () => {
  const redirectToWikipedia = () => {
    const wikipediaLink = 'https://en.wikipedia.org/wiki/Eventbrite';
    window.location.href = wikipediaLink;
  };

  const aboutTextStyle = {
    fontFamily: 'Papyrus,Courier New,monospace',
    backgroundImage: 'url("https://i5.walmartimages.com/asr/6d66a711-a6ec-4156-abe2-4d066cc77eca.75d4f919578f63bc43404bfef0b75682.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff")',
    backgroundSize: 'cover',
    color: 'black',
    padding: '39px',
    borderRadius: '0px',
    boxShadow: '10 10 10px rgba(10, 10, 10, 0.2)',
    fontSize: '24px', // Increased font size
    fontWeight: 'bold',
  };

  return (
    <div style={aboutTextStyle}>
      <br></br>
        Event management is the application of project management to the creation and development of small 
        and/or large-scale personal or corporate events such as festivals, conferences, ceremonies, weddings,
         formal parties, concerts, or conventions. It involves studying the brand, identifying its target 
         audience, devising the event concept, and coordinating the technical aspects before actually launching 
         the event.The events industry now includes events of all sizes from the Olympics down to business breakfast
          meetings. Many industries, celebrities, charitable organizations, and interest groups hold events in order 
          to market their label, build business relationships, raise money, or celebrate achievement.The process of
           planning and coordinating the event is usually referred to as event planning and which can include budgeting,
            scheduling, site selection, acquiring necessary permits, coordinating transportation and parking, arranging 
            for speakers or entertainers, arranging decor, event security, catering, coordinating with third-party vendors,
             and emergency plans. Each event is different in its nature so process of planning and execution of each event 
             differs on basis of the type of event.The event manager is the person who plans and executes the event, taking 
             responsibility for the creative, technical, and logistical elements. This includes overall event design, brand
              building, marketing and communication strategy, audio-visual production, script writing, logistics, budgeting,
               negotiation, and client service.
      <button onClick={redirectToWikipedia}>Read More Info</button>
    </div>
  );
};

export default About;
