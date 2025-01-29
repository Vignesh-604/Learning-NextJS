import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "../components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="bg-black/[0.9] min-h-screen bg-grid-white/[0.02]">
			<HeroSection />
			<FeaturedCourses />
			<WhyChooseUs />
			<TestimonialCards/>
			<UpcomingWebinars/>
			{/* <Instructors/> */}
			<Footer/>
		</div>
	);
}
