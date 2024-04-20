import React from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import ImageSlider from "./imageslider/ImageSlider";

// Styles for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageSliderModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  images: string[]; // Array of image URLs
  imageSetName?: string;
}

const ImageSliderModal: React.FC<ImageSliderModalProps> = ({
  isOpen,
  onRequestClose,
  images,
  imageSetName,
}) => {
  console.log(imageSetName + " ----> imagesprops");
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Custom styles for the modal
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "80%", // Adjust width as needed
      height: "70%", // Adjust height as needed
    },
  };

  
  const dobu = [
    { url: "http://localhost:3000/projectImages/dobu/image-1.jpg", title: "Home" },
    { url: "http://localhost:3000/projectImages/dobu/image-2.jpg", title: "user Management" },
    { url: "http://localhost:3000/projectImages/dobu/image-3.jpg", title: "Register" },
    { url: "http://localhost:3000/projectImages/dobu/image-4.jpg", title: "Schedule" },
    { url: "http://localhost:3000/projectImages/dobu/image-5.jpg", title: "Instructor Profile" },
  ];
  const marrymeal = [
    { url: "http://localhost:3000/projectImages/marrymeal/image-1.jpg", title: "User Management" },
    { url: "http://localhost:3000/projectImages/marrymeal/image-2.jpg", title: "Meal Management" },
    { url: "http://localhost:3000/projectImages/marrymeal/image-3.jpg", title: "Home" },
    { url: "http://localhost:3000/projectImages/marrymeal/image-4.jpg", title: "Registration" },
    { url: "http://localhost:3000/projectImages/marrymeal/image-5.jpg", title: "Login" },
  ];
  
  const aceadora = [
    { url: "http://localhost:3000/projectImages/aceadora/image-1.jpg", title: "Landing Page" },
    { url: "http://localhost:3000/projectImages/aceadora/image-2.jpg", title: "Registration" },
    { url: "http://localhost:3000/projectImages/aceadora/image-3.jpg", title: "Cart" },
    { url: "http://localhost:3000/projectImages/aceadora/image-4.jpg", title: "Product Management" },
    { url: "http://localhost:3000/projectImages/aceadora/image-5.jpg", title: "Profile" },
  ];
  const manzanaque = [
    { url: "http://localhost:3000/projectImages/manzanaque/image-1.jpg", title: "Home" },
    { url: "http://localhost:3000/projectImages/manzanaque/image-2.jpg", title: "Call Record" },
    { url: "http://localhost:3000/projectImages/manzanaque/image-3.jpg", title: "Create Ticket" },
    { url: "http://localhost:3000/projectImages/manzanaque/image-4.jpg", title: "Login" },
    { url: "http://localhost:3000/projectImages/manzanaque/image-5.jpg", title: "Registration" },
  ];

  const selectSlides = () => {
    if (imageSetName?.includes("MarryMeal")) return marrymeal;
    else if (imageSetName?.includes("Dobu")) return dobu;
    else if (imageSetName?.includes("Aceadora")) return aceadora;
    else if (imageSetName?.includes("Manzanaque")) return manzanaque;
    else return [];
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Slider"
      style={customStyles}
    >
      <button
        onClick={onRequestClose}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Close
      </button>{" "}
      {/* Close button */}
      
      <ImageSlider slides={selectSlides()} />
      
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider> */}
    </Modal>
  );
};

export default ImageSliderModal;
