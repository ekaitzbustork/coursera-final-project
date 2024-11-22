import { useState, useRef, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import greekSaladImage from "./assets/greek-salad.jpg";
import lemonBasilImage from "./assets/lemon-basil.jpg";
import spicedVeggieImage from "./assets/spiced-veggie.jpg";
import lemonDessertImage from "./assets/dessert.jpg";
import "./WeekSpecials.css";
import MealCard from "./components/MealCard";

const meals = [
  {
    name: "Ensalada Griega",
    image: greekSaladImage,
    price: "10,00 €",
    description: `La famosa ensalada griega de lechuga crujiente, pimientos, aceitunas y
      nuestro queso feta al estilo de Chicago, adornada con crujientes picatostes de ajo y romero.`,
  },
  {
    name: "Pasta de Limón y Albahaca",
    image: lemonBasilImage,
    price: "6,79 €",
    description: `Disfruta de nuestra Pasta de Limón y Albahaca, una versión deliciosa y refrescante de un clásico favorito. Este plato presenta espaguetis perfectamente al dente mezclados en una salsa ligera infusionada con limón.`,
  },
  {
    name: "Brochetas de Verduras Especiadas",
    image: spicedVeggieImage,
    price: "8,50 €",
    description: `Para elevar la experiencia de sabor, hemos rociado estas brochetas con una salsa picante y sabrosa hecha de una mezcla de hierbas frescas, ajo, jugo de limón y aceite de oliva.`,
  },
  {
    name: "Postre de Limón",
    image: lemonDessertImage,
    price: "8,50 €",
    description: `Esto viene directamente del libro de recetas de la abuela, cada ingrediente ha sido seleccionado y es tan auténtico como puedas imaginar.`,
  },
];


const WeekSpecials = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft*2 + clientWidth < scrollWidth);
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({
      left: scrollRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="week-specials-container">
      <div className="week-specials-header">
        <h2>Recomendados esta semana!</h2>
        <HashLink className="button-primary" to="/home">
          Menu
        </HashLink>
      </div>
      <div className="week-specials" ref={scrollRef}>
        {meals.map((meal, index) => (
          <MealCard key={index} meal={meal} />
        ))}
      </div>
      <div className="scroll-buttons">
        {showLeftArrow && (
          <button
            className="scroll-button scroll-button-left"
            aria-label="Scroll Left"
            onClick={handleScrollLeft}
          >
            &lt;
          </button>
        )}
        {showRightArrow && (
          <button
            className="scroll-button scroll-button-right"
            aria-label="Scroll Right"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        )}
      </div>
    </section>
  );
};

export default WeekSpecials;
