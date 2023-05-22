import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url('../public/header-bg.jpeg')] bg-cover h-screen bg-center overflow-hidden">
      <div className="bg-dark-color bg-opacity-50">
        <Navbar />
        <Header />
      </div>
    </main>
  );
}
