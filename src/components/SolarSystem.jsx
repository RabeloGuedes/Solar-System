import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

class SolarSystem extends React.Component {
  state = {
    slidesPerView: 4,
    navigation: true,
  };

  componentDidMount() {
    window.addEventListener('resize', () => this.handleResize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  handleResize = () => {
    if (window.innerWidth <= 480) {
      this.setState({
        slidesPerView: 1,
        navigation: false,
      });
    }
    else if (window.innerWidth <=768 ) {
      this.setState({
        slidesPerView: 2,
        navigation: false,
      });
    }
    else if (window.innerWidth <=1279 ) {
      this.setState({
        slidesPerView: 3,
        navigation: false,
      });
    } else {
      this.setState({
        slidesPerView: 4,
        navigation: true,
      });
    }
  };
  render() {
    const planetsList = () => (planets.map((planet) => (
        <SwiperSlide
          key={ planet.name }
        >
          <PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            />
          </SwiperSlide>)
        ));
    const { slidesPerView, navigation } = this.state;
      return (
        <>
          <Title headline="Planetas" />
          <Swiper
            modules={ [Navigation, Pagination, Autoplay] }
            spaceBetween={ 0 }
            slidesPerView={ slidesPerView }
            navigation={ navigation }
            pagination={ {clickable: true} }
            autoplay
            loop
          >
            { planetsList()}
          </Swiper>
        </>
      );
  }
}

export default SolarSystem;
