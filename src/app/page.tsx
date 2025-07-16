import {Header} from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <main>
            <div className={"w-screen h-screen"}>
                <Header/>
                <Hero/>
                <Projects/>
            </div>
        </main>
    );
}
