import Spline from '@splinetool/react-spline/next';
import {Header} from "@/components/Header";

export default function Home() {
    return (
        <main>
            <div className={"w-screen h-screen overflow-hidden"}>
                <Header/>
                <Spline
                    scene="https://prod.spline.design/rrB9N51Eu3Z579z5/scene.splinecode"
                />
            </div>
        </main>
    );
}
