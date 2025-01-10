import styles from "./Carousel.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1.2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      centerMode: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div className="initial_slide">
            <img className={styles.slide} src="/productOne.png" alt="" />

            <div className={styles.slide_info}>
              <h2>Bohauss</h2>
              <p>Luxury big sofa 2-seat</p>
              <a href="">Rp 17.000.000</a>
            </div>
          </div>
          <div className="initial_slide">
            <img className={styles.slide} src="/productTwo.jpg" alt="" />
            <div className={styles.slide_info}>
              <h2>Bohauss</h2>
              <p>Luxury big sofa 2-seat</p>
              <a href="">Rp 17.000.000</a>
            </div>
          </div>
          <div className="initial_slide">
            <img className={styles.slide} src="/productThree.jpg" alt="" />
            <div className={styles.slide_info}>
              <h2>Bohauss</h2>
              <p>Luxury big sofa 2-seat</p>
              <a href="">Rp 17.000.000</a>
            </div>
          </div>
          <div className="initial_slide">
            <img className={styles.slide} src="/productFour.jpg" alt="" />
            <div className={styles.slide_info}>
              <h2>Bohauss</h2>
              <p>Luxury big sofa 2-seat</p>
              <a href="">Rp 17.000.000</a>
            </div>
          </div>
        </Slider>
      </div>
    );
  }