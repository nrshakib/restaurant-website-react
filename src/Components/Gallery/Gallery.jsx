import React, { useRef } from "react";
import "./Gallery.css";
import Subheading from "../Header/Subheading";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { images } from "../../Data";

const galleryInages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-content">
        <Subheading title="Instagram" />
        <h1 className="head-text">Photo Gallery</h1>
        <p style={{ color: "#AAA", margin: "2rem 0" }}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          sapiente.
        </p>
        <button className="custom-button">View More</button>
      </div>
      <div className="gallery-images">
        <div className="gallery-img-container" ref={scrollRef}>
          {galleryInages.map((image, index) => (
            <div
              className="gallery-img-card"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery-img-icon" />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-img-arrow">
        <BsArrowLeftShort
          className="arrow-icon"
          onClick={() => scroll("left")}
        />
        <BsArrowRightShort
          className="arrow-icon"
          onClick={() => scroll("right")}
        />
      </div>
    </div>
  );
};

export default Gallery;
