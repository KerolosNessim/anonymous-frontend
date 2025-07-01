import AboutUs from "@/components/home/about-us";
import Blogs from "@/components/home/blogs";
import Box from "@/components/home/box";
import Contact from "@/components/home/contact";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/services";
import Welcome from "@/components/home/welcome";
import CustomMarquee from "@/components/shared/custom-marquee";


export default function Home() {
  return (
    <div className=" space-y-20 ">
      <HeroSection />
      <CustomMarquee/>
      <Welcome />
      <AboutUs />
      <Services />
      <div>
        <Blogs />
        <Box />
      </div>
      <Contact/>
    </div>
  );
}
