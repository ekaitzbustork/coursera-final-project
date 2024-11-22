import "./Testimonials.css";
import TestimonialCard from "./components/TestimonialCard";

const customers = [
  {
    fullName: "Antonio",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&h=400&fit=crop&crop=faces",
    rating: [1, 1, 1, 1, 1],
    says:
      "La comida en Little Lemon es absolutamente fantástica. El salmón a la parrilla estaba cocinado a la perfección, y el ambiente hizo que la noche fuera encantadora. ¡Definitivamente volveré!",
  },
  {
    fullName: "María",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&h=400&fit=crop&crop=faces",
    rating: [1, 1, 1, 1, 0.5],
    says:
      "Un lugar encantador con un gran servicio. La lasaña vegana estaba deliciosa y el ambiente era acogedor e invitante. Muy recomendable para una cena en familia.",
  },
  {
    fullName: "Josué",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400&h=400&fit=crop&crop=faces",
    rating: [1, 1, 1, 1, 0],
    says:
      "Tuve una experiencia increíble en Little Lemon. El personal fue amable y el pollo al limón fue uno de los mejores que he probado. ¡Un lugar que hay que visitar!",
  },
  {
    fullName: "Emilia",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&fit=crop&crop=faces",
    rating: [1, 1, 1, 1, 1],
    says:
      "¡Una experiencia gastronómica excepcional! El ambiente era cálido y la ensalada mediterránea estaba fresca y sabrosa. Lugar perfecto para una cita romántica.",
  },
];



const Testimonials = () => {
  return (
    <section className="testimonials">
      <hr />
      <br></br>
      <div className="container grid">
        <h2>Reseñas de Clientes</h2>
        {customers.map((customer, index) => (
          <TestimonialCard key={index} customer={customer} />
        ))}
      </div>
      <br></br>
    </section>
  );
};

export default Testimonials;
