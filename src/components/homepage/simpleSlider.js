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
            <p>Purple Sector's Responsibility Mapping workshop was a great 
            way to deliberate and intentionally reflect on the current state 
            of our team and how we want to evolve. Not only did it help us 
            structure the conversation but it was also a lean way to document 
            our roles so we could refer back to and update them as needed.</p>
            <h4>Justin Godard, Director of Design, Varicent</h4>
          </div>
          <div className="slickItem">
            <p>As our organization's first product manager, the Alignment Program 
            not only got me up to speed quickly on the core users and customers 
            of our organization's core product, but it also helped me understand 
            the way the team worked together and areas I would be most impactful 
            in my contributions.</p>
            <h4>Ellen Roberto, Product Manager, Timeless Medical Systems</h4>
          </div>
          <div className="slickItem">
            <p>Getting a multi-disciplinary team working towards a common goal is 
            one of my key responsibilities as a leader, and the structure of Purple 
            Sector's approaches help me share the context my team needs to do drive 
            towards positive outcomes.</p>
            <h4>Joe Lindsay, CTO, Timeless Medical Systems</h4>
          </div>
          <div className="slickItem">
            <p>Purple Sector's approach to mapping out our ideas gave us a way to 
            have meaningful conversations about how we can make improvements and 
            plan for the future.</p>
            <h4>Pj & Dan Silivestru, Founders, Chocolate Soup</h4>
          </div>
        </Slider>
      </div>
    );
  }
}