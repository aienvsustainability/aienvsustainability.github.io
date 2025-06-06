import PublicationSection from "@/components/pages/publications/main";
import { CustomMetadata } from "@/types";

export const metadata: CustomMetadata = {
    title: "Publications",
    description: "From curious minds to groundbreaking discoveries—your gateway to scholarly excellence",
    alternates: {
        canonical: "/publications",
        languages: {
            'en-US': '/',
        }
    },
    openGraph: {
        title: "CAIES Fondation - Publications",
        description: "From curious minds to groundbreaking discoveries—your gateway to scholarly excellence",
        url: 'https://caienvsus.org/publications',
        siteName: 'CAIES Fondation',
        images: [
            {
                url: '/assets/img/post-6.png',
                width: 1920,
                height: 1080,
            }
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
};

export default function Publication() {
    return (
        <main className="items-center justify-center flex flex-col h-full w-full">
            <PublicationSection />
        </main>
    )
}
