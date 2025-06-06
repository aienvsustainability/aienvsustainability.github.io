import About from "@/components/pages/home/about";
import Counter from "@/components/pages/home/counter";
import Event from "@/components/pages/home/event";
import Publication from "@/components/pages/home/publication";
import ImageSlider from "@/components/ui/image-slider";

interface CustomMetadata {
    title: string;
    description: string;
    alternates?: {
        canonical?: string;
        languages?: {
            'en-US': string;
        };
    };
}

export const metadata: CustomMetadata = {
    title: "CAIES Foundation - Home",
    description: "CAIES Foundation pioneers sustainable solutions via advanced research, employing AI, ML, and geospatial tech for multidimensional impact.",
    alternates: {
        canonical: "/",
        languages: {
            'en-US': '/',
        }
    },
};

export default function Home() {
    return (
        <main className="items-center justify-center flex flex-col h-full w-full">
            <h1 className="sr-only">CAIES Foundation pioneers sustainable solutions via advanced....</h1>
            <ImageSlider />
            <About />
            <Counter />
            <Publication />
            <Event />
        </main>
    );
}
