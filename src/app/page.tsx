import Hero from "@/components/Hero"; // Adjust path if needed
import Experiences from "@/components/Experiences"; // Adjust path if needed
import Projects from "@/components/Projects";
import {Header} from "@/components/Header";
import Contact from "@/components/Contact";
import About from "@/components/About";
import {Footer} from "@/components/Footer"; // Adjust path if needed

const Home = () => {
    return (
        <main>
            <Header/>
            <Hero/>
            <About/>
            <div className="relative overflow-hidden bg-black">
                <div className="bg-gradient-to-b from-black via-sky-800 to-black">
                    <div className="absolute top-[10%] left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-xl -translate-x-1/2 -z-10"></div>
                    <div className="absolute top-[40%] right-0 w-[24rem] h-[24rem] bg-emerald-500/15 rounded-full blur-xl translate-x-1/2 -z-10"></div>
                    <div className="absolute bottom-[20%] left-0 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-xl -translate-x-1/3 -z-10"></div>
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