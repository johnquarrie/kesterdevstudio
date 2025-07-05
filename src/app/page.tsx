import Animation from "@/components/home/Animation";
import Crafts from "@/components/home/Crafts";
import Heroarea from "@/components/home/Heroarea";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Heroarea />
      <Animation />
      <Crafts />
    </div>
  );
}
