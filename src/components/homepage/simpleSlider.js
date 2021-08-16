import React, { Component } from "react";
import Slider from "react-slick";
import "./slickStyle.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slideWrap">
        <h2> Hear from our clients</h2>
        <Slider {...settings}>
          <div className="slickItem">
            <p>Purple Sector's Responsibility Mapping workshop was a great way 
            to deliberately reflect on the current state of our team and intentionally 
            consider how we want to evolve. These are important conversations, but it’s 
            hard to create space to reflect on team dynamics when the pressure is on 
            everyday. Not only did Purple SectorCarlos and Meredith help us structure 
            the conversation, but they provided a lean way to articulate our roles so 
            we could refer back to them and make updates as needed. The clarity they 
            provided is already paying off.</p>
            <h4>Justin Godard, Director of Design, Varicent</h4>
          </div>
          <div className="slickItem">
            <p>As the first product manager on our team, the Alignment Program not only 
            allowed me to get to know the users and customers of our organization's core 
            product, it also helped me understand the way the team works together and 
            uncovered the areas where I can make the biggest contribution. By accelerating 
            the onboarding process, Purple Sector helped reduce the time, expenses, and 
            stress needed to get up to speed.</p>
            <h4>Ellen Roberto, Product Manager, Timeless Medical Systems</h4>
          </div>
          <div className="slickItem">
            <p>One of my key responsibilities as a leader is getting a multi-disciplinary 
            team to work towards a common goal. Purple Sector's approach helped me structure 
            conversations about customer needs and gave me the tools to align my team around 
            the context we share. Meredith and Carlos provided the clarity we need to drive 
            towards positive outcomes.</p>
            <h4>Joe Lindsay, CTO, Timeless Medical Systems</h4>
          </div>
          <div className="slickItem">
            <p>Purple Sector's approach gave my team a low-barrier way to map out what we need 
            to do as an organization. Carlos and Meredith guided us to articulate our ideas without 
            much preparation on our end, allowing for meaningful conversations about how we can make 
            improvements and plan for the future.  They got us talking about what matters most. And 
            because we have the process documented, we can easily share our progress with development 
            partners and give them context for our next steps.</p>
            <h4>Pj & Dan Silivestru, Founders, Chocolate Soup</h4>
          </div>
        </Slider>
      </div>
    );
  }
}