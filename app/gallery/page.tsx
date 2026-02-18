import fs from "fs"
import path from "path"
import Breadcrumb from "@/components/ui/breadcrumb"
import GalleryGrid from "@/components/ui/galleryGrid"
import { CustomMetadata } from "@/types"

export const metadata: CustomMetadata = {
    title: "Gallery",
    description:
        "Explore the CAIES Foundation gallery showcasing events, research activities, workshops, sustainability initiatives, and impactful moments across AI and Data Science programs.",

    // keywords: [
    //     "CAIES Foundation gallery",
    //     "AI events photos",
    //     "Sustainability initiatives",
    //     "Workshops gallery",
    //     "Research activities",
    //     "CAIES events images",
    // ],

    alternates: {
        canonical: "/gallery",
        languages: {
            "en-US": "/gallery",
        },
    },

    openGraph: {
        title: "Gallery | CAIES Foundation",
        description:
            "Browse photos from CAIES Foundation events, workshops, research initiatives, and sustainability programs.",
        url: "https://caienvsus.org/gallery",
        siteName: "CAIES Foundation",
        images: [
            {
                url: "/assets/img/publication-page-header.jpg",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "en_US",
        type: "website",
    },

    // twitter: {
    //     card: "summary_large_image",
    //     title: "Gallery | CAIES Foundation",
    //     description:
    //         "Explore photos from CAIES Foundation workshops, events, and initiatives.",
    //     images: ["/assets/img/publication-page-header.jpg"],
    // },

    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}


export default function GalleryPage() {
    const imagesDirectory = path.join(
        process.cwd(),
        "public/assets/img/gallery/"
    )
    const imageFiles = fs.readdirSync(imagesDirectory)

    return (
        <main className="flex w-full flex-col items-center bg-neutral-50 overflow-x-hidden">
            <Breadcrumb
                title="Gallery"
                subtitle="Explore our impactful moments and initiatives."
                imageUrl="/assets/img/publication-page-header.jpg"
                breadcrumb={[
                    { label: "Home", link: "/" },
                    { label: "Gallery", active: true },
                ]}
            />

            <GalleryGrid images={imageFiles} />
        </main>
    )
}
