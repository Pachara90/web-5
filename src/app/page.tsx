import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
