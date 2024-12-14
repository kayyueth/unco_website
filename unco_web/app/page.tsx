import Homepage from "./home/page"
import { Navbar } from "../components/layout/navbar"
import { Footer } from "../components/layout/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[2101px]">
      <Navbar/>
      {/* Main Content */}
      <main className="flex-grow">
        <Homepage />
      </main>
      <Footer/>
    </div>
  );
}