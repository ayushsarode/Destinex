import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import ServiceImg from "../assets/service.jpg"


function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        // heroImg={AboutImg}
        title="Service" btnClass="hide"
        heroImg={ServiceImg} />

      <Trip />
      <Footer />
    </>
  );
}

export default Service;
