"use client";
import { getData } from "@/api/get-data";
import AboutUs from "@/components/home/about-us";
import Blogs from "@/components/home/blogs";
import Box from "@/components/home/box";
import Contact from "@/components/home/contact";
import HeroSection from "@/components/home/hero-section";
import Services from "@/components/home/services";
import Welcome from "@/components/home/welcome";
import CustomMarquee from "@/components/shared/custom-marquee";
import { setToken } from "@/lib/cookies";
import { useUserStore } from "@/stores/user";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUser } = useUserStore();

  async function getUser(token) {
    const userresponse = await getData("/profile", { Authorization: `Bearer ${token}` });
    if (userresponse.status === 200) {
      const { status, ...userData } = userresponse;
      setUser(userData);
    }
    else {
      setUser(null);
    }
  }
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      setToken(token);
      getUser(token);
      router.replace("/");
    }
  }, [searchParams, router]);
  return (
    <div className=" space-y-20 xl:space-y-24 ">
      <HeroSection />
      <CustomMarquee />
      <Welcome />
      <AboutUs />
      <Services />
      <div>
        <Blogs />
        <Box />
      </div>
      <Contact />
    </div>
  );
}
