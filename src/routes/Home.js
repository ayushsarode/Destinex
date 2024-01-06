import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Homehero from "../assets/home-hero.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";



function Home() {
  return (
    <>
      <Navbar />
      <Hero cName="hero" heroImg={Homehero} title="Your Journey Your Story" text="Choose Your Favourite Destination." buttonText="Travel Plan" url="/" btnClass="show" />

      <Destination />
      <Trip />

    </>
  );
}

export default Home;
