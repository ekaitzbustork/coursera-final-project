import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Reservations from "./pages/Reservations/Reservations";
import ConfirmedReservation from "./pages/Reservations/components/confirmedReservation";


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route
            path="/home"

          />
          <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
          <Route
            path="/home"
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;