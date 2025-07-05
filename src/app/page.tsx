import Animation from "@/components/home/Animation";
import Crafts from "@/components/home/Crafts";
import Heroarea from "@/components/home/Heroarea";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Heroarea />
      <Animation />
      <Crafts />
      {/* <Testimonials /> */}
    </div>
  );
}
