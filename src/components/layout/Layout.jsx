import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "Inicio",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "Menu",
      path: "/home",
      hashLink: true,
    },
    {
      name: "Reservar",
      path: "/reservations",
      hashLink: false,
    },
    {
      name: "Login",
      path: "/home",
      hashLink: false,
    },
    {
      name: "Sobre Nosotros",
      path: "/#about",
      hashLink: true,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;
