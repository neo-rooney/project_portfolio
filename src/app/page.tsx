import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-[#f1f6f9]">
      {/* navbar */}
      <Navbar />
      {/* header */}
      <Header />
      {/* about */}
      <About />
      {/* skills */}
      {/* blogs */}
      {/* contact */}
      {/* footer */}
    </div>
  );
}
