import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
    </div>
  )
}

