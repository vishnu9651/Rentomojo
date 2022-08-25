import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://s.rmjo.in/WP-Web.png" },
    { url: "https://s.rmjo.in/WP-Web.png" },
    { url: "https://s.rmjo.in/WP-Web.png" }
  ];
  
  const Slider = () => {
    return (
      <div>
        <SimpleImageSlider
          width={1396}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    );
  }
  export default Slider;