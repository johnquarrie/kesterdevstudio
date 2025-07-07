import Animation from "@/components/home/Animation";
import ContactUs from "@/components/home/ContactUs";
import Crafts from "@/components/home/Crafts";
import Heroarea from "@/components/home/Heroarea";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Heroarea />
      <Animation />
      <Crafts />
      <Testimonials />
      <Portfolio />
      <ContactUs />
    </div>
  );
}
