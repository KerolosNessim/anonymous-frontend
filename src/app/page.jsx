import AboutUs from "@/components/home/about-us";
import Blogs from "@/components/home/blogs";
import Box from "@/components/home/box";
import Contact from "@/components/home/contact";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/services";
import Welcome from "@/components/home/welcome";


export default function Home() {
  return (
    <main className="xl:space-y-28 space-y-20 ">
      <HeroSection />
      <Welcome />
      <AboutUs />
      <Services />
      <div>
        <Blogs />
        <Box />
      </div>
      <Contact/>
    </main>
  );
}
