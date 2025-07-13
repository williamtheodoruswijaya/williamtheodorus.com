import {Header} from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
    return (
        <main>
            <div className={"w-screen h-screen"}>
                <Header/>
                <HeroSection/>
                <AboutSection/>
            </div>
        </main>
    );
}
