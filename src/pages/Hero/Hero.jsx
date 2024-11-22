import { HashLink } from "react-router-hash-link";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container grid">
        <div className="hero-information">
          <h1 className="hero-title">Little Lemon</h1>
          <h2 className="hero-subtitle">Chicago</h2>
          <p className="hero-description">
            Somos un restaurante de comida mediterranea ubicado en Chicago, nuestro enfoque es comida tradicional con un giro moderno
          </p>
          <HashLink className="button-primary" to="/reservations">
            Hacer una Reserva
          </HashLink>
        </div>
        <div className="hero-image-container">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
