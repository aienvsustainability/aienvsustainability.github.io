import ContactForm from "@/components/pages/contact/contactform";
import ContactInfo from "@/components/pages/contact/contactinfo";
import GoogleMap from "@/components/pages/contact/googlemap";
import Breadcrumb from "@/components/ui/breadcrumb";
import { CustomMetadata } from "@/types";

export const metadata: CustomMetadata = {
    title: "Contact",
    description: "Connect with CAIES Foundation to collaborate, inquire, or support our mission. Reach out through our contact page for partnerships, inquiries, or donations.",
    alternates: {
        canonical: "/contact",
        languages: {
            'en-US': '/',
        }
    },
    openGraph: {
        title: "CAIES Fondation - Contact",
        description: "Connect with CAIES Foundation to collaborate, inquire, or support our mission. Reach out through our contact page for partnerships, inquiries, or donations.",
        url: 'https://caienvsus.org/contact',
        siteName: 'CAIES Fondation',
        images: [
            {
                url: '/assets/img/page-header-bg.jpg',
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
export default function Contact() {
    const breadcrumb = [
        { label: "Home", link: "/" },
        { label: "Contact", active: true },
    ]
    return (
        <main className="items-center justify-center flex flex-col h-full w-full" suppressHydrationWarning>
            <h1 className="sr-only">Contact CAIES Foundation for collaboration,inquiries, and support.</h1>
            <Breadcrumb
                title="Contact"
                subtitle="Contact CAIES Foundation for collaboration, inquiries, and support. Connect with us today"
                imageUrl="/assets/img/page-header-bg.jpg"
                breadcrumb={breadcrumb}
            />
            <section id="contact-section" className="w-full bg-background">
                <div className="relative z-1">
                    <GoogleMap />
                    <div className="relative z-1 mx-auto w-full px-48 max-lg:px-12">
                        <div className="flex flex-row max-lg:flex-col bg-background py-20 px-12 rounded-md shadow-[0_16px_28px_0_#00000026]">
                            <div className="w-full px-4 max-lg:mb-8 max-lg:border-b max-lg:pb-4">
                                <ContactInfo />
                            </div>
                            <div className="w-full px-4">
                                <h3 className="mb-8 text-lg font-extrabold uppercase">Drop Us A Line</h3>
                                <ContactForm />
                            </div>
                        </div>
                        <div className="min-h-32" />
                    </div>
                </div>
            </section>
        </main>
    )
}
