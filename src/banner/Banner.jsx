import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./banner.css";

function Banner() {
  return (
    <div className="banner container">
      <div className="sidebar">
        {/* Sidebar пока пустой */}
      </div>

      <div className="carousel">
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://rapticstrong.com/cdn/shop/collections/collection-banner_iPhone_Cases_Desktop.jpg?v=1625072679"
              alt="Banner 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://www.ringkestore.com/cdn/shop/collections/iPhone-13-Pro-Max_Coming-soon_banner_e7e2609a-d411-4fde-aafc-ceef1f59acce.jpg?v=1708371837&width=1230"
              alt="Banner 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://justswitch.com/wp-content/uploads/2023/03/Main-Banner_1500x550.jpg"
              alt="Banner 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
