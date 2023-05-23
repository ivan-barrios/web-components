import NavbarA from "@/components/NavbarA";
import HeroA from "@/components/HeroA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#00040f]">
      <NavbarA />
      <div className="flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <HeroA />
        </div>
        {/* SectionA */}
        {/* FooterA */}
      </div>
    </main>
  );
}
