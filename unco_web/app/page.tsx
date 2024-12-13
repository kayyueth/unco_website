import Homepage from "./home/page"
import { Navbar } from '@/components/layout/navbar'

export default function Home() {
  return (
    <div className="relative min-h-[2101px]">
      <Navbar/>
      <Homepage />
    </div>
  );
}