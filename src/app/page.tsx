import Spline from '@splinetool/react-spline/next';
import {Header} from "@/components/Header";
import HeroSection from "@/components/HeroSection";

export default function Home() {
    return (
        <main>
            <div className={"w-screen h-screen overflow-hidden"}>
                <Header/>
                <HeroSection/>
            </div>
        </main>
    );
}
