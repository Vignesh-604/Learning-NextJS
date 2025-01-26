import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";

export default function Home() {
	return (
		<div className="bg-black/[0.9] min-h-screen bg-grid-white/[0.02]">
			<HeroSection />
			<FeaturedCourses />
			<WhyChooseUs />
			<TestimonialCards/>
		</div>
	);
}
