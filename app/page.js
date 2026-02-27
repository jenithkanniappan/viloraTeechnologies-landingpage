import Footer from "@/src/section/home/Footer";
import Header from "@/src/section/home/Header";
import Hero from "@/src/section/home/Hero";
// import Card from "@/src/section/home/Card";

export default function Home() {
  return (
    <div className=" bg-[#e8eef6] overflow-hidden ">
      <main>
        <Header />
        <Hero />
        {/* <Card /> */}
        <Footer />
      </main>
    </div>
  );
}
