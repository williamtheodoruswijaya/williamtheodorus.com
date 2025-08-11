import Hero from "@/components/Hero"; // Adjust path if needed
import Experiences from "@/components/Experiences"; // Adjust path if needed
import Projects from "@/components/Projects";
import {Header} from "@/components/Header";
import Contact from "@/components/Contact";
import About from "@/components/About";
import {Footer} from "@/components/Footer";
import Image from "next/image"; // Adjust path if needed

// File: src/app/page.tsx atau di mana komponen Home berada

const Home = () => {
    return (
        <main>
            <Header/>
            <Hero/>
            <About/>
            <div className="relative overflow-hidden bg-black">
                <div className="absolute top-0 left-0 w-full h-full -z-10">
                    <Image src="/background-effect.png" alt="background effect" className="w-full h-full object-cover" width={400} height={400} />
                </div>
                <div className="bg-gradient-to-b from-black via-sky-800/50 to-black">
                    <Experiences/>
                    <Projects/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </main>
    );
};

export default Home;