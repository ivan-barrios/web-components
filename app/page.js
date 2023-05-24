import { NavbarA, NavbarB, HeroA } from "@/components";
//You can look at the styles folder to know which styles specifically is being used
import styles from "@/styles/shortStyles";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#00040f]">
      <div className={`sm:px-16 px-6 ${styles.flexCenter}`}>
        <div className="xl:max-w-[1280px] w-full">
          <NavbarA />
        </div>
      </div>

      <div className={`${styles.flexCenter}`}>
        <div className="xl:max-w-[1280px] w-full">
          <HeroA />
        </div>
        {/* SectionA */}
        {/* FooterA */}
      </div>
    </main>
  );
}
