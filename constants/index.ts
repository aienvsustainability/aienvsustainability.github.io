import {
    AboutCard,
    ContactLink,
    CounterItem,
    DropdownItem,
    EventDetails,
    FooterSection,
    PublicationDetails,
    Slide,
    SocialLink,
} from "@/types"
import { Description } from "@radix-ui/react-dialog"
import { title } from "process"
import { BiDollar } from "react-icons/bi"
import { BsEmojiSmile } from "react-icons/bs"
import {
    FaMagnifyingGlassChart,
    FaPeopleCarryBox,
    FaPeopleGroup,
    FaPeoplePulling,
    FaPeopleRobbery,
} from "react-icons/fa6"
import {
    GiGiftOfKnowledge,
    GiReceiveMoney,
    GiStumpRegrowth,
    GiTeacher,
} from "react-icons/gi"
import { GrTechnology } from "react-icons/gr"
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2"
import { MdMail, MdOutlinePhoneAndroid } from "react-icons/md"
import { PiGraph } from "react-icons/pi"
import { SiFacebook, SiInstagram, SiLinkedin, SiX, SiYoutube } from "react-icons/si"
import { SlPeople } from "react-icons/sl"
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";

export const contactLinks: ContactLink[] = [
    {
        href: "mailto:contact@caienvsus.org",
        icon: MdMail,
        text: "contact@caienvsus.org",
    },
    {
        href: "tel:+917739711077",
        icon: MdOutlinePhoneAndroid,
        text: "+917739711077",
    },
]

export const socialLinks: SocialLink[] = [
    { href: "https://twitter.com/CaiesF", icon: SiX },
    { href: "https://www.instagram.com/caiesfoundation/", icon: SiInstagram },
    { href: "https://www.facebook.com/caiesfoundation/", icon: SiFacebook },
    {
        href: "https://www.youtube.com/channel/UClV_dab_loUKR15sqD1EYeA",
        icon: SiYoutube,
    },
    { href: "https://www.linkedin.com/company/caies-foundation", icon: SiLinkedin },
]

export const dropdownItems: Record<string, DropdownItem[]> = {
    "About Us": [
        { href: "/about/our-vision", text: "Our Vision" },
        { href: "/about/our-goals", text: "Our Goals" },
        { href: "/about/core-members", text: "Core Members" },
        { href: "/about/our-team", text: "Our Team" },
    ],
    Initiatives: [
        { href: "/initiatives/research-academy", text: "Research Academy" },
        { href: "/initiatives/ai-for-scientist", text: "AI For Scientists" },
        { href: "/initiatives/ai-yoddha", text: "AI Yoddha" },
    ],
    "Work with Us": [
        { href: "/work-with-us/internships", text: "Internships" },
        { href: "/get-involved/support-us", text: "Support Us" },
        { href: "/get-involved/collaboration-opportunities", text: "Collaboration Opportunities" },
    ],
    "Our Work": [
        { href: "/publications", text: "Publications" },
        // { href: "/resources", text: "Resources" },
        { href: "/research-and-development", text: "Research & Development" },
    ],
}

export const footerLinks: FooterSection[] = [
    {
        title: "Quick Links",
        links: [
            { href: "/", text: "Home" },
            { href: "/about/core-members", text: "About Us" },
            { href: "/publications", text: "Publications" },
            { href: "https://training.caienvsus.org/", text: "Training & Courses" },
            { href: "/research-and-development", text: "Research & Development" },
            { href: "/contact", text: "Contact" },
        ],
    },
    {
        title: "About Us",
        links: [
            { href: "/about/our-vision", text: "Our Vision" },
            { href: "/about/our-goals", text: "Our Goals" },
            { href: "/about/core-members", text: "Core Members" },
            { href: "/about/our-team", text: "Our Teams" },
        ],
    },
    {
        title: "Initiatives",
        links: [
            {
                href: "/initiatives/ai-for-scientist",
                text: "AI For Scientists",
            },
            { href: "/initiatives/research-academy", text: "Research Academy" },
            { href: "/initiatives/ai-yoddha", text: "AI Yoddha" },
        ],
    },
    {
        title: "Work with Us",
        links: [
            { href: "/work-with-us/internships", text: "Internships" },
            { href: "/get-involved/support-us", text: "Support Us" },
            { href: "/get-involved/collaboration-opportunities", text: "Collaboration Opportunities" },
        ],
    },
]

export const collaborationSections = [
    {
        title: "For Universities & Research Institutes",
        description:
            "Collaborate with us to design innovative academic programs and labs, create opportunities for student exchange and fellowships, and lead joint research that applies AI to sustainability challenges.",
        cards: [
            {
                icon: FaPeopleGroup,
                number: "01",
                title: "Co-develop academic programs and labs",
                description:
                    "Collaborate with us to create innovative courses and labs that combine AI and sustainability for real-world impact.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "02",
                title: "Enable student exchange and joint fellowships",
                description:
                    "Open global opportunities for students through exchange programs and fellowships, encouraging shared learning and growth.",
            },
            {
                icon: FaPeoplePulling,
                number: "03",
                title: "Host collaborative research on AI + Sustainability",
                description:
                    "Partner in research that applies AI to address pressing environmental and social sustainability challenges.",
            },
        ],
    },
    {
        title: "For Corporates & Industry Partners",
        description:
            "Work with us on joint R&D to advance AI and sustainability solutions, drive meaningful CSR projects for environmental impact, and build future-ready talent through upskilling and reskilling programs.",
        cards: [
            {
                icon: FaPeoplePulling,
                number: "01",
                title: "Joint R&D on Sustainability and AI technologies",
                description:
                    "Collaborate on cutting-edge research that merges AI with sustainable practices to create scalable industry solutions.",
            },
            {
                icon: FaPeopleGroup,
                number: "02",
                title: "CSR-driven environmental projects",
                description:
                    "Partner with us to design and implement impactful CSR initiatives that support communities and protect the environment.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "03",
                title: "Workforce upskilling and reskilling programs",
                description:
                    "Equip employees with future-ready skills in AI, green tech, and sustainability to stay ahead in a changing world.",
            },
        ],
    },
    {
        title: "For Startups & Innovators",
        description:
            "Gain access to mentorship, funding, and incubation support, collaborate with CAIES Labs to co-develop impactful solutions, and showcase your innovations at our flagship events and summits.",
        cards: [
            {
                icon: FaPeopleGroup,
                number: "01",
                title: "Access mentorship, funding, and incubation support",
                description:
                    "Get the right guidance, resources, and financial backing to grow your sustainable innovations.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "02",
                title: "Partner with CAIES Labs for product co-development",
                description:
                    "Collaborate with our experts to design, test, and scale impactful AI + sustainability solutions.",
            },
            {
                icon: FaPeopleGroup,
                number: "03",
                title: "Showcase innovations at CAIES events and summits",
                description:
                    "Present your ideas to global audiences and connect with potential partners and investors.",
            },
        ],
    },
    {
        title: "For NPOs & Development Sector Agencies",
        description:
            "Co-create training on AI, sustainability, and ESG, run awareness campaigns with global bodies, and support large-scale capacity-building in underserved regions.",
        cards: [
            {
                icon: FaPeoplePulling,
                number: "01",
                title: "Customized Training on AI & Sustainability",
                description:
                    "Collaborate with CAIES to design and deliver customized training programs on AI, Sustainability, ESG, and emerging technologies.",
            },
            {
                icon: FaPeopleGroup,
                number: "02",
                title: "Global Skill-Building & Awareness Campaigns",
                description:
                    "Agencies like the UN, WHO, FAO, UNEP, and World Bank can co-develop skill-building and awareness campaigns.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "03",
                title: "Capacity-Building in Underserved Regions",
                description:
                    "Support large-scale capacity-building projects in underserved regions.",
            },
        ],
    },
    {
        title: "For Government Officials & Policy Makers",
        description:
            "Design AI-driven sustainability frameworks, train officials on responsible AI and climate modeling, and pilot policies that drive social and environmental impact.",
        cards: [
            {
                icon: FaPeopleGroup,
                number: "01",
                title: "AI-Driven Sustainability Frameworks",
                description:
                    "Partner with CAIES to design AI-driven sustainability frameworks.",
            },
            {
                icon: FaPeoplePulling,
                number: "02",
                title: "Training for Responsible AI & Climate Risk",
                description:
                    "Develop customized training modules for government officers on responsible AI, climate risk modeling, and data governance.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "03",
                title: "AI-Powered Policy Simulations & Pilots",
                description:
                    "Collaborate on policy simulations and pilot programs that leverage AI for environmental and vedic sciences.",
            },
        ],
    },
]

export const supportUs = [
    {
        title: "Knowledge Contribution",
        description:
            "Support CAIES by delivering guest lectures, workshops, and webinars; sharing expertise in AI, sustainability, and vedic sciences; and co-authoring impactful research, whitepapers, and policy briefs.",
        cards: [
            {
                icon: FaChalkboardTeacher,
                number: "01",
                title: "Guest Lectures & Workshops",
                description:
                    "Conduct guest lectures, workshops, and webinars.",
            },
            {
                icon: MdOutlineSupportAgent,
                number: "02",
                title: "Share Domain Expertise",
                description:
                    "Share domain expertise in AI, Sustainability, data governance, vedic sciences, etc.",
            },
            {
                icon: HiOutlineDocumentText,
                number: "03",
                title: "Co-author Research & Policy Briefs",
                description:
                    "Co-author research papers, whitepapers, or policy briefs.",
            },
        ],
    },
    {
        title: "Skill Sharing",
        description:
            "Contribute by mentoring students and professionals, guiding hands-on projects, and helping develop curricula that integrate AI and sustainability.",
        cards: [
            {
                icon: FaUserGraduate,
                number: "01",
                title: "Mentorship for Learners & Professionals",
                description:
                    "Mentor students, professionals, and researchers.",
            },
            {
                icon: FaMagnifyingGlassChart,
                number: "02",
                title: "Project Guidance & Support",
                description:
                    "Offer hands-on project guidance.",
            },
            {
                icon: FaBookOpen,
                number: "03",
                title: "Curriculum Development Assistance",
                description:
                    "Assist in curriculum development for AI + Sustainability education.",
            },
        ],
    },
    {
        title: "Donate Books & Knowledge Resources",
        description:
            "Support learning by contributing books on AI, sustainability, Vedic sciences, and educational materials for rural students.",
        cards: [
            {
                icon: FaBookOpen,
                number: "01",
                title: "AI & Technology Resources",
                description:
                    "Textbooks and reference materials on AI, Data Science, and Technology.",
            },
            {
                icon: GiStumpRegrowth,
                number: "02",
                title: "Environmental & Sustainability Books",
                description:
                    "Books on environmental science, climate change, and Sustainability.",
            },
            {
                icon: GiGiftOfKnowledge,
                number: "03",
                title: "Vedic Sciences & Ancient Knowledge",
                description:
                    "Literature on vedic sciences and ancient Hindu civilization.",
            },
            {
                icon: FaBookOpen,
                number: "04",
                title: "Textbooks for Rural Education",
                description:
                    "School and college-level textbooks to support rural education programs.",
            },
        ],
    },
    {
        title: "Financial Support",
        description:
            "Contribute through monthly, annual, or one-time donations, fund targeted research, sponsor scholarships and fellowships, and help build CAIES Labs and outreach programs.",
        cards: [
            {
                icon: BiDollar,
                number: "01",
                title: "Monthly Contribution",
                description:
                    "Provide steady support to sustain ongoing programs and initiatives.",
            },
            {
                icon: BiDollar,
                number: "02",
                title: "Annual Contribution",
                description:
                    "Commit yearly to strengthen long-term impact and planning.",
            },
            {
                icon: BiDollar,
                number: "03",
                title: "One-time Contribution",
                description:
                    "Make a meaningful difference with a single donation.",
            },
            {
                icon: FaMagnifyingGlassChart,
                number: "04",
                title: "Fund Research Programs",
                description:
                    "Directly support focused projects on AI, sustainability, and vedic sciences.",
            },
            {
                icon: FaUserGraduate,
                number: "05",
                title: "Sponsor Scholarships & Fellowships",
                description:
                    "Empower students and researchers through financial aid.",
            },
            {
                icon: FaPeopleCarryBox,
                number: "06",
                title: "Enable Labs & Outreach",
                description:
                    "Help build CAIES Labs, strengthen infrastructure, and expand outreach.",
            },
        ],
    },
    {
        title: "Mentorship & Advisory",
        description:
            "Support CAIES by guiding startups and innovators, serving as an advisor in AI, sustainability, governance, or Vedic sciences, and mentoring students and researchers through dedicated office hours.",
        cards: [
            {
                icon: FaPeopleGroup,
                number: "01",
                title: "Guide Startups & Innovators",
                description:
                    "Guide startups and innovators in AI and Sustainability.",
            },
            {
                icon: MdOutlineSupportAgent,
                number: "02",
                title: "Join as an Advisor",
                description:
                    "Join CAIES as an advisor on AI, Sustainability, governance, or vedic sciences.",
            },
            {
                icon: FaUserGraduate,
                number: "03",
                title: "Mentor Students & Researchers",
                description:
                    "Host office hours to mentor students and early-stage researchers.",
            },
        ],
    },
    {
        title: "Volunteering",
        description:
            "Contribute your time and expertise by joining sustainability drives, helping organize events, supporting educational outreach, or delivering specialized programs for students.",
        cards: [
            {
                icon: GiStumpRegrowth,
                number: "01",
                title: "Environmental Campaigns & Drives",
                description:
                    "Be part of environmental campaigns and sustainability drives.",
            },
            {
                icon: FaMagnifyingGlassChart,
                number: "02",
                title: "Event & Summit Support",
                description:
                    "Help organize events, workshops, and summits.",
            },
            {
                icon: FaBookOpen,
                number: "03",
                title: "Educational Outreach",
                description:
                    "Support educational outreach in rural and urban communities.",
            },
            {
                icon: FaChalkboardTeacher,
                number: "04",
                title: "Specialized Student Programs",
                description:
                    "Deliver a specialized program for undergraduate students on AI, Sustainability, vedic sciences, or any areas of your expertise.",
            },
        ],
    },
]

export const slides: Slide[] = [
    {
        img: "/assets/img/slider-1.jpg",
        titleLines: ["Together we can", "make a Difference"],
        desc: `The CAIES Foundation would extend its education, training, and research activities in other areas required to address the sustainability issues.`,
        paddingX: "px-96",
        titleClass: "font-condensed uppercase font-medium",
        titleSize: "text-8xl",
    },
    {
        img: "/assets/img/slider-2.jpg",
        titleLines: ["स्वस्मै स्वल्पं", "समाजाय सर्वस्वं"],
        desc: `CAIES generously promotes and supports research in fundamental and applied science through internships for school students, undergraduate, postgraduate, and PhD students.`,
        titleClass: "font-hindi font-extrabold",
        paddingX: "px-96",
        titleSize: "text-6xl",
    },
    {
        img: "/assets/img/slider-3.jpg",
        title: `The Center For Artificial Intelligence & Environmental Sustainability Foundation`,
        desc: `The CAIES Foundation would extend its education, training, and research activities in other areas required to address the sustainability issues.`,
        paddingX: "px-72",
        titleSize: "text-7xl",
        titleClass: "font-condensed uppercase font-medium",
        descPadding: "px-28 max-lg:px-4",
    },
]

export const aboutcards: AboutCard[] = [
    {
        image: "/assets/img/causes-1.jpg",
        title: "About the Foundation",
        description:
            "The Center for Artificial Intelligence and Environmental Sustainability (CAIES) Foundation, is a niche Section (8) non-profit organization that focuses on trans-disciplinary challenges, which require sustainable outcomes that are implementable and operational in the areas of environment, economics, and society through extensive research and development using cutting edge data science, machine learning, artificial intelligence, and geospatial tools and technologies.",
    },
    {
        image: "/assets/img/causes-2.jpg",
        title: "Focus Areas",
        description:
            "Our focus areas are centered around the six areas of environmental sustainability prioritized by the World Economic Forum, Geneva, Switzerland and the Sustainable Development Goals set by the United Nations.\n\nThe CAIES Foundation would extend its education, training, and research activities in other areas required to address the sustainability issues.",
    },
    {
        image: "/assets/img/causes-3.jpg",
        title: "Opportunities at CAIES",
        description:
            "CAIES generously promotes and supports research in fundamental and applied science through internships for school students, undergraduate, postgraduate, and PhD students. We look for people who are committed to science, society, and humanity, who have passion and dedication to accomplish their goals through sincere efforts. If you know what you want, we know how to make it happen.",
    },
]

export const counters: CounterItem[] = [
    { icon: BiDollar, value: "1000", label: "Sponsored" },
    { icon: BsEmojiSmile, value: "10", label: "Scholars Around The World" },
    { icon: SlPeople, value: "250", label: "People Impacted" },
    {
        icon: HiOutlineChatBubbleLeftRight,
        value: "10",
        label: "Intellectual Support",
    },
]

export const eventdetails: EventDetails[] = [
    {
        id: 1,
        title: "Deepawali Celebration Among Musahar Community",
        year: "2022",
        location: "BIHAR, INDIA",
        description:
            "In 2022, Deepawali was celebrated among the Musahar community in Bihar, India, marked by cultural festivities and communal gatherings.",
        image: "/assets/img/events-1.jpg",
    },
    {
        id: 2,
        title: "Deepawali Celebration Among Musahar Community",
        year: "2023",
        location: "Bihar, India",
        description:
            "In 2023, Deepawali was celebrated among the Musahar community in Bihar, India, marked by cultural festivities and communal gatherings.",
        image: "/assets/img/events-2.jpg",
    },
    {
        id: 3,
        title: "Aaranyakam - KDU",
        year: "2023",
        location: "Kerala, India",
        description:
            "In 2023, Kerala University of Digital Sciences Student Council, with School of Informatics, celebrated Wildlife Week with events promoting conservation.",
        image: "/assets/img/events-3.jpg",
    },
    {
        id: 4,
        title: 'Lecture on "AI in Material Science"',
        year: "2024",
        location: "Bihar, India",
        description:
            'As part of the "Artificial Intelligence for Scientists" initiative by the CAIES Foundation, Dr. Sushant Singh delivered a lecture on "AI in Material Science" at the Materials Research Lab, PG Department of Physics, A. N. College, Patna, Bihar, India. The session aimed to showcase how Artificial Intelligence (AI) revolutionizes material science research and drives innovation in this critical field. The Materials Research Lab is headed by Professor Dr. Seema Sharma, a known Physicist and material scientist. She spearheads multiple collaborative projects with the Royal Society London, UK, and other institutions. It was a pleasure seeing students from rural areas working in the lab for their Master\'s and PhD research. We will work together to make the lab AI-enabled.',
        image: "/assets/img/events-4.jpg",
    },
    {
        id: 5,
        title: "Invited speaker at the 2nd Academia",
        year: "2025",
        location: "Bihar, India",
        description: 'Invited speaker at the 2nd Academia–Industry & Global Knowledge Conclave on Nanoscience & Nanotechnology, hosted by Aryabhatta Knowledge University, Patna, Bihar, under the inspiring theme: “Frontier Research & Scientific Innovations for Vikshit Bihar / Society.',
        image: "/assets/img/sept-event.jpg"
    },
    {
        id: 6,
        title: "Invited delegate at the Emerging Science",
        year: "2025",
        location: "New Delhi, India",
        description: 'Invited delegate at the Emerging Science, Technology, and Innovation Conclave, organized by the Department of Science and Technology, Government of India, New Delhi, at the Bharat Mandapam.',
        image: "/assets/img/nov-event.jpg"
    },
    {
        id: 7,
        title: "Pooja Ceremony of the Education, Training, and Research Center",
        year: "2025",
        location: "Maner, India",
        description: 'The CAIES Foundation organized a Pooja Ceremony on 18 December 2025 in Maner, Bihar, India, to mark the auspicious inauguration of its Education, Training, and Research Center. The ceremony was held to seek divine blessings for the institution’s mission of knowledge, innovation, and social impact, symbolizing a commitment to ethical learning, academic excellence, and the creation of a positive and nurturing environment for students, educators, and researchers as the center begins its journey of empowering individuals through education and skill development.',
        image: "/assets/img/event-6.jpg"
    },
    {
        id: 8,
        title: "One-Day Orientation Program on Artificial Intelligence & Data Science",
        year: "2026",
        location: "Patna, India",
        description: 'The CAIES Foundation is organizing a One-Day Orientation Program on Artificial Intelligence and Data Science on 18 January 2026 at AN Sinha Hall, Patna. This program is designed to introduce students and aspiring professionals to the fundamentals, real-world applications, and career opportunities in AI and Data Science. Through expert-led sessions and practical insights, participants will gain clarity on industry trends, essential skills, and learning pathways required to build a future-ready career in these rapidly evolving fields.',
        image: "/assets/img/one-page-brochure.png"
    },
    {
        id: 9,
        title: "Invited Speaker at International Conference on Frontiers in Surface Engineering and Additive Manufacturing",
        year: "2026",
        location: "Kharagpur, India",
        description: 'Description will be updated soon.',
        image: "/assets/img/fseam.png"
    }
]

export const publications: PublicationDetails[] = [
    {
        id: 1,
        image: "/assets/img/post-7.jpg",
        date: "Jan 02.2025",
        title: "From 'Sexiest Job' to 'Most Responsible Role': The Evolution of Data Scientists",
        link: "https://journalajrcos.com/index.php/AJRCOS/article/view/544",
        description:
            "This opinion article explores the evolving responsibilities of data scientists in the current data-driven landscape, in which ethical, privacy, and governance standards have grown considerably in importance.",
    },
    {
        id: 2,
        image: "/assets/img/post-6.jpg",
        date: "May 31.2023",
        title: "Landslide susceptibility prediction using frequency ratio model: a case study of Uttarakhand, Himalaya (India)",
        link: "https://link.springer.com/article/10.1007/s43538-023-00171-z",
        description:
            "The purpose of this study is to develop a landslide susceptibility prediction model by applying the Frequency Ratio (FR) model and remote sensing data sets for the Northern part of Uttarakhand, India.",
    },
    {
        id: 3,
        image: "/assets/img/post-1.jpg",
        date: "August 31.2022",
        title: "Influence of differential arsenic exposure on cellular redox homeostasis of exposed rural women of West Bengal",
        link: "https://link.springer.com/article/10.1007/s11356-022-22657-x",
        description:
            "The metalloid arsenic (As) induces oxidative stress is a well-known fact. However, the extent of variation of oxidative stress according to different exposure levels of As.",
    },
    {
        id: 4,
        image: "/assets/img/post-2.jpg",
        date: "June 13.2022",
        title: "Application of a Novel Hybrid Machine Learning Algorithm in Shallow Landslide Susceptibility Mapping in a Mountainous Area",
        link: "https://www.frontiersin.org/articles/10.3389/fenvs.2022.897254/full",
        description:
            "Landslides can be a major challenge in mountainous areas that are influenced by climate and landscape changes.",
    },
    {
        id: 5,
        image: "/assets/img/post-4.jpg",
        date: "May 25.2022",
        title: "Towards robust smart data-driven soil erodibility index prediction under different scenarios",
        link: "https://www.tandfonline.com/doi/abs/10.1080/10106049.2022.2076918",
        description:
            "Soil erosion is a major cause of damage to agricultural lands in many parts of the world and is of particular concern in semiarid parts of Iran. We use five machine learning techniques.",
    },
    {
        id: 6,
        image: "/assets/img/post-3.jpg",
        date: "February 01.2022",
        title: "Predicting sustainable arsenic mitigation using machine learning techniques",
        link: "https://www.sciencedirect.com/science/article/pii/S0147651322001117",
        description:
            "This study evaluates state-of-the-art machine learning models in predicting the most sustainable arsenic mitigation preference.",
    },
    {
        id: 7,
        image: "/assets/img/post-5.jpg",
        date: "December 13.2021",
        title: "Evaluating and predicting social behavior of arsenic affected communities: Towards developing arsenic resilient society",
        link: "https://linkinghub.elsevier.com/retrieve/pii/S2405665021000226",
        description:
            "This study uses six machine learning (ML) algorithms to evaluate and predict individuals' social resilience towards arsenicosis-affected people in an arsenic-risk society of rural India. Over 50% of the surveyed communities were found to be resilient towards arsenicosis patients.",
    },
]

export const carddata = {
    focusAreas: [
        {
            icon: GiStumpRegrowth,
            title: "Environmental Sustainability",
            number: "001",
            description:
                "Promote the conservation of natural resources. Implement strategies to reduce ecological footprints. Inspire and engage global communities to act in harmony with nature.",
        },
        {
            icon: GiReceiveMoney,
            title: "Economic Growth",
            number: "002",
            description:
                "Foster innovations that drive productivity and efficiency. Create equitable opportunities for all stakeholders. Support sustainable development models that balance profit with environmental care.",
        },
        {
            icon: FaPeopleRobbery,
            title: "Societal Well-Being",
            number: "003",
            description:
                "Prioritize inclusivity and social equity. Empower individuals and communities with knowledge and tools for impactful action. Advocate for long-term social progress alongside environmental and economic goals.",
        },
    ],
    approach: [
        {
            icon: GrTechnology,
            title: "Technology-Driven Solutions",
            number: "001",
            description:
                "Leverage AI, machine learning, and geospatial tools to tackle complex sustainability challenges.",
        },
        {
            icon: FaPeopleCarryBox,
            title: "Interdisciplinary Collaboration",
            number: "002",
            description:
                "Integrate expertise across research, innovation, and action to create comprehensive solutions.",
        },
        {
            icon: FaPeopleGroup,
            title: "Global Leadership",
            number: "003",
            description:
                "Position ourselves as a thought leader in sustainability, inspiring others to join our mission.",
        },
    ],
    goals: [
        {
            number: "001",
            icon: PiGraph,
            title: "Drive Sustainable Development",
            description:
                'Although we align our initiatives with the United Nations\' Sustainable Development Goals (SDGs) and the six priority areas of environmental sustainability identified by the World Economic Forum, we also explore how the synchronization among the four "Purusharthas"defined in Sanatan Culture will help achieve sustainability at an individual level. The four Purusharthas include Dharma (Righteousness Duty), Artha (Wealth), Kama (Desire), and Moksha (Liberation). We aim to craft practical and sustainable solutions that address pressing global challenges while promoting environmental stewardship and social equity.',
        },
        {
            number: "002",
            icon: FaMagnifyingGlassChart,
            title: "Advance Research and Innovation",
            description:
                "We aim to lead cutting-edge research that bridges the gap between theoretical knowledge and real-world applications by harnessing the power of artificial intelligence, data science, and geospatial technologies. We aim to provide implementable solutions that address complex, transdisciplinary challenges across environmental, economic, and social dimensions.",
        },
        {
            number: "003",
            icon: GiTeacher,
            title: "Empower Through Education and Training",
            description:
                "Education and capacity building are at the heart of our mission. We offer specialized training programs, workshops, and research opportunities to students, researchers, and professionals across all levels of education. Equipping individuals with the skills and knowledge they need ensures they are empowered to contribute meaningfully to global sustainability efforts.",
        },
        {
            number: "004",
            icon: FaPeopleCarryBox,
            title: "Foster Collaborative Partnerships",
            description:
                "Recognizing the importance of collective action, we actively seek collaborations with researchers, policymakers, academic institutions, and organizations committed to sustainability. Together, we can amplify the impact of our efforts and create solutions that transcend boundaries.",
        },
        {
            number: "005",
            icon: FaPeoplePulling,
            title: "Support the Next Generation of Innovators",
            description:
                "At CAIES, we believe in nurturing future leaders and change makers. Through internships, mentorship, and hands-on research opportunities, we encourage individuals with passion and dedication to turn their ideas into actionable solutions. Our goal is to cultivate a global community of visionaries committed to science, society, and humanity.",
        },
        {
            number: "006",
            icon: GiGiftOfKnowledge,
            title: "Bridge the Gap Between Knowledge and Action",
            description:
                "We strive to translate advanced research into practical, operational solutions that can be implemented effectively in real-world scenarios. This ensures that our efforts contribute to knowledge creation and have a tangible and lasting impact.",
        },
    ],
}

export const intellectualAdvisors = [
    {
        name: "Eric A. Stern",
        role: "United States",
        imageUrl: "/assets/img/team/eric.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/eastern/",
    },
    {
        name: "Dr. Jie Feng",
        role: "United States",
        imageUrl: "/assets/img/team/jie.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/jie-feng-3246989/",
    },
    {
        name: "Sagar Shah",
        role: "Canada",
        imageUrl: "/assets/img/team/sagar.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/sagarshah99/",
    },
    {
        name: "Dr. Ershad Sharif Ahmedian",
        role: "United States",
        imageUrl: "/assets/img/team/ershad.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/esahmadian/",
    },
    {
        name: "Dr. Caleb Strait",
        role: "United States",
        imageUrl: "/assets/img/team/caleb.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/calebstrait/",
    },
    {
        name: "Dr. Venkataramana R. Pidatala",
        role: "United States",
        imageUrl: "/assets/img/team/ramana.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/venkataramana-r-pidatala/",
    },
]

export const scholars = [
    {
        name: "Aayushi Sharan",
        role: "United Kingdom",
        linkedinUrl: "https://www.linkedin.com/in/aayushi-sharan-34a7201a2/",
        imageUrl: "/assets/img/team/aayushi.jpeg",
        status: true,
        testimonial: [
            {
                video: "/assets/videos/aayushi-testimonial.mp4",
            },
        ],
    },
    {
        name: "Saumya Srishtee",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/saumya-srishtee27/",
        imageUrl: "/assets/img/team/saumya.jpeg",
        status: true,
    },
    {
        name: "Asha Mariam Manoj",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/asha-mariam-manoj-b01a96249/",
        imageUrl: "/assets/img/team/asha.jpeg",
        status: true,
        testimonial: [
            {
                text: "I am Asha Mariam Manoj, currently a Data Analyst Apprentice at Google, Bangalore, where I transform complex data into actionable insights. My journey was shaped by my work with the CAIES Foundation, where I led a project to predict the Air Quality Index (AQI) across Indian cities using machine learning techniques such as SVR, random forest, and SARIMA. This experience strengthened my skills in Python, SQL, data visualization, and model evaluation, while reinforcing my passion for using data science to address real-world challenges—an approach that aligns closely with Google’s mission and values.",
            },
        ],
    },
    {
        name: "Kashvi Swami",
        role: "United States",
        linkedinUrl: "https://www.linkedin.com/in/kashviswami/",
        imageUrl: "/assets/img/team/kashvi.jpeg",
        status: true,
    },
    {
        name: "Preetish Patel",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/preetishpatel123/",
        imageUrl: "/assets/img/team/preetish.jpeg",
        status: true,
    },
    {
        name: "Eshan Singh",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/r0x4r/",
        imageUrl: "/assets/img/team/eshan.jpeg",
        status: false,
    },
    {
        name: "Mukesh Kumhar",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/mukesh-kumhar/",
        imageUrl: "/assets/img/team/mukesh.jpeg",
        status: true,
    },
    {
        name: "Ankit Rai",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/ankit-rai-b5806924a/",
        imageUrl: "/assets/img/team/ankiit.jpeg",
        status: true,
    },
    {
        name: "Kshitij Saxena",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/kshitij-saxena-16baa5261/",
        imageUrl: "/assets/img/team/Kshitij.jpeg",
        status: true,
    },
    {
        name: "Ananya Sinha",
        role: "India",
        linkedinUrl: "#",
        imageUrl: "/assets/img/team/ananya.jpg",
        status: false,
    },
    {
        name: "Akash Kumar",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/akash-kumar-3baa04250/",
        imageUrl: "/assets/img/team/akash.jpg",
        status: true,
    },
    {
        name: "Chandrakant Singh",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/chandrakant001",
        imageUrl: "/assets/img/team/chandrakant.jpg",
        status: true,
    },
    {
        name: "Sonakshi Singh",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/sonakshi-singh-9baa72327/",
        imageUrl: "/assets/img/team/sonakshi.png",
        status: true,
    },
    {
        name: "Anjali Kumari",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/anjali-pandey-3193952b5",
        imageUrl: "/assets/img/team/anjali.jpg",
        status: true,
    },
    {
        name: "Rishu Kumari",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/rishukumari001/",
        imageUrl: "/assets/img/team/rishu.jpg",
        status: true,
    },
    {
        name: "Priyanka Kumari",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/priyanka-kumari-03ab792b7/",
        imageUrl: "/assets/img/team/priyanka.jpg",
        status: true,
    },
    {
        name: "Vinay Kumar Mahto",
        role: "India",
        linkedinUrl: "https://www.linkedin.com/in/vinay-kumar-546a35253/",
        imageUrl: "/assets/img/team/vinay.jpg",
        status: true,
    },
]

export const collaborators = [
    {
        name: "Dr. Sandhya Pundhir",
        role: "India",
        imageUrl: "/assets/img/team/sandhya.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dr-sandhya-pundhir-b67a187/",
    },
    {
        name: "Mid Mohan",
        role: "United Arab Emirates",
        imageUrl: "/assets/img/team/mid.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/mikey-mid-mohan/",
    },
    {
        name: "Ms. Sneha Kumari",
        role: "India",
        imageUrl: "/assets/img/team/sneha.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/sneha-kumari-138254172/",
    },
    {
        name: "Dr. Dona Sinha",
        role: "India",
        imageUrl: "/assets/img/team/dona.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/dona-sinha-61b7a424/",
    },
    {
        name: "Dr. Amandeep Kaur",
        role: "India",
        imageUrl: "/assets/img/team/amandeep.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/amandeep-kaur-20a20b2a/",
    },
]

export const researchAcademyBenefits = [
    {
        id: 1,
        title: "Access to Cutting-Edge Resources",
        description:
            "Scholars gain access to state-of-the-art tools, technologies, and facilities to conduct high-impact research.",
    },
    {
        id: 2,
        title: "Mentorship Opportunities",
        description:
            "Collaborate with and receive guidance from experts in various fields, enhancing their research skills and career growth.",
    },
    {
        id: 3,
        title: "Interdisciplinary Collaboration",
        description:
            "Using innovative approaches, engage with peers and researchers from diverse disciplines to solve complex global challenges.",
    },
    {
        id: 4,
        title: "Skill Development",
        description:
            "Participate in workshops, training sessions, and seminars to acquire advanced research methodologies, AI integration, and sustainability practices.",
    },
    {
        id: 5,
        title: "Publication and Recognition",
        description:
            "Opportunity to publish in prestigious journals, including the foundation's own journal on Artificial Intelligence and Environmental Sustainability, and gain global recognition for their work.",
    },
    {
        id: 6,
        title: "Networking Opportunities",
        description:
            "Build connections with industry leaders, academicians, and policymakers, opening doors to collaborations and funding opportunities.",
    },
    {
        id: 7,
        title: "Career Advancement",
        description:
            "Strengthen their professional profiles through exposure to real-world challenges, innovative solutions, and practical applications of their research.",
    },
    {
        id: 8,
        title: "Financial Support",
        description:
            "Eligibility for grants, fellowships, and sponsorships for their projects, ensuring financial stability to focus on their research.",
    },
    {
        id: 9,
        title: "Global Exposure",
        description:
            "Present their work at international conferences, summits, and workshops organized by the foundation and its partners.",
    },
    {
        id: 10,
        title: "AI Integration in Research",
        description:
            "Learn to leverage AI tools and technologies to accelerate research, optimize processes, and uncover novel insights.",
    },
    {
        id: 11,
        title: "Support in Scientific Writing, Proofreading, and Editing",
        description:
            "Receive assistance with crafting high-quality research papers, thesis documents, and project reports through professional support in writing, proofreading, and editing, ensuring clarity and impact.",
    },
    {
        id: 12,
        title: "Contribution to Sustainability Goals",
        description:
            "Align their research with global sustainability objectives, making a tangible impact on society and the environment.",
    },
    {
        id: 13,
        title: "Recognition as Thought Leaders",
        description:
            "Join a prestigious network of scholars recognized for driving innovation and contributing to meaningful change.",
    },
]

export const aiyoddhabenefits = [
    {
        id: 1,
        title: "AI Awareness",
        description:
            "Introduces students to the fundamentals of Artificial Intelligence.",
    },
    {
        id: 2,
        title: "Contextual Learning",
        description: "Utilizes locally relevant examples to illustrate Al concepts.",
    },
    {
        id: 3,
        title: "Foundational Skills",
        description: "Builds comfort with data, logic, and algorithms.",
    },
    {
        id: 4,
        title: "Future-Ready Talent",
        description: "Equips learners for emerging Al-driven job markets.",
    },
    {
        id: 5,
        title: "Ethical Use",
        description: "Emphasizes responsible and fair use of Al technologies.",
    },
    {
        id: 6,
        title: "Educator Enablement",
        description: "Equips teachers to introduce Al into classrooms.",
    },
    {
        id: 7,
        title: "Community Literacy",
        description: "Spreads Al awareness beyond schools to families.",
    },
    {
        id: 8,
        title: "Global Perspective",
        description: "Connects students with international Al trends.",
    },
    {
        id: 9,
        title: "Creative Problem Solving",
        description: "Encourages using Al to address local challenges.",
    },
    {
        id: 10,
        title: "Inclusive Al Culture",
        description: "Democratizes access to Al education.",
    },
]

export const aiyoddhaframework = [
    {
        id: 1,
        title: "Awareness",
        description: "Building Al curiosity and conceptual understanding from Class 6 onwards through relatable, real-world examples."
    },
    {
        id: 2,
        title: "Accessibility",
        description: "Promoting open-source, cost-free tools and offline-first learning models, especially in resource-constrained schools."
    },
    {
        id: 3,
        title: "Application",
        description: "Enabling students to apply Al to real-life problems through guided hands-on projects, games, and simulations."
    },
    {
        id: 4,
        title: "Ethics & Responsibility",
        description: "Emphasizing fairness, privacy, explainability, and responsible Al use from the start of the learning journey."
    },
    {
        id: 5,
        title: "Agentic Thinking",
        description: "Introducing multi-agent systems, autonomy, and decision- making to prepare learners for the Al ecosystems of the future."
    },
    {
        id: 6,
        title: "Innovation & Inclusion",
        description: "Promoting culturally contextual projects, regional language tools, and inclusive practices across all geographies and gender groups."
    },
]

export const aiyoddhalignment = [
    {
        id: 1,
        title: "NEP 2020",
        description:
            "Encourages early coding, Al, and experiential learning.",
    },
    {
        id: 2,
        title: "Bloom's Taxonomy",
        description:
            "Moves from understanding to creating and evaluating.",
    },
    {
        id: 3,
        title: "UN SDG Goals",
        description:
            "Supports Quality Education, Gender Equality, and Reduced Inequalities.",
    },
]
export const aiForScientistBenefits = [
    {
        id: 1,
        title: "Enhanced Research Efficiency",
        description:
            "Utilize AI tools and algorithms to automate repetitive tasks, analyze large datasets, and accelerate the research process, saving valuable time and resources.",
    },
    {
        id: 2,
        title: "Data Analysis and Visualization",
        description:
            "Leverage AI-powered techniques to uncover patterns, correlations, and insights in complex datasets, and create impactful visualizations to communicate findings effectively.",
    },
    {
        id: 3,
        title: "Cross-Disciplinary Collaboration",
        description:
            "Connect with experts from diverse scientific domains to explore how AI can address multifaceted challenges and foster innovative solutions.",
    },
    {
        id: 4,
        title: "Access to AI Training and Resources",
        description:
            "Gain access to hands-on training, tutorials, and resources tailored to integrating AI into scientific workflows, regardless of prior AI expertise.",
    },
    {
        id: 5,
        title: "Customized AI Models",
        description:
            "Learn to develop and customize AI models specific to scientific needs, enabling more accurate predictions, simulations, and analyses.",
    },
    {
        id: 6,
        title: "Improved Experimentation",
        description:
            "Use AI to design experiments, optimize protocols, and simulate outcomes, reducing the need for trial-and-error approaches.",
    },
    {
        id: 7,
        title: "Real-World Application of AI",
        description:
            "Bridge the gap between theoretical knowledge and practical applications by exploring how AI can address global challenges in fields like climate science, healthcare, and material development.",
    },
    {
        id: 8,
        title: "Publication Support",
        description:
            "Enhance the quality of research outputs through AI-driven insights, improving the chances of publication in high-impact journals.",
    },
    {
        id: 9,
        title: "Networking Opportunities",
        description:
            "Join a community of like-minded researchers, AI practitioners, and industry leaders to foster collaborations and exchange knowledge.",
    },
    {
        id: 10,
        title: "Career Development",
        description:
            "Stay ahead in a competitive research landscape by acquiring cutting-edge AI skills and integrating them into scientific practices.",
    },
    {
        id: 11,
        title: "AI Ethics and Governance",
        description:
            "Learn the principles of ethical AI usage and governance in scientific research, ensuring compliance with global standards and practices.",
    },
    {
        id: 12,
        title: "Cost-Effective Solutions",
        description:
            "Implement AI-powered tools and techniques to achieve more with limited resources, making research projects cost-effective.",
    },
    {
        id: 13,
        title: "Global Recognition",
        description:
            "Showcase AI-integrated scientific research at conferences, workshops, and forums, gaining recognition as a pioneer in modern scientific methodologies.",
    },
    {
        id: 14,
        title: "Innovation in Sustainability",
        description:
            "Explore AI's potential in driving sustainable scientific solutions, such as reducing environmental footprints and optimizing resource use.",
    },
    {
        id: 15,
        title: "Hands-On AI Tools",
        description:
            "Gain practical experience with AI platforms, frameworks, and software designed specifically for researchers to simplify adoption and usability.",
    },
    {
        id: 16,
        title: "Continuous Learning",
        description:
            "Stay updated with the latest advancements in AI technologies and their applications in various scientific fields through regular workshops and updates.",
    },
]

export const AvailableInternshipTrack = [
    {
        id: 1,
        title: "Artificial Intelligence Intern (AII)",
        description:
            "For students aspiring to build a career in Artificial Intelligence, including machine learning, computer vision, natural language processing (NLP), and AI applications across various domains. Interns may work on foundation-led AI initiatives or propose independent ideas aligned with societal impact.",
    },
    {
        id: 2,
        title: "Cybersecurity Intern (CSI)",
        description:
            "For students with an interest in digital security, privacy, data protection, threat detection, and related technologies. Interns may engage in security assessments, awareness campaigns, and responsible tech projects under supervision.",
    },
    {
        id: 3,
        title: "Generative AI Intern (GAII)",
        description:
            "Focused on students keen to explore the emerging field of Generative AI, including text-to-image generation, large language models, synthetic data, and creativity-driven AI solutions. Interns will be encouraged to innovate and build ethical GenAI applications.",
    },
    {
        id: 4,
        title: "Agentic AI Intern (AAII)",
        description:
            "For those intrigued by autonomous agents, multi-agent systems, and intelligent orchestration frameworks. Interns will work on projects involving autonomous AI systems for scientific, educational, and social problem-solving.",
    },
    {
        id: 5,
        title: "Data Science Intern (DSI)",
        description:
            "Open to students with a passion for data analytics, visualization, statistical modeling, and applied data science. Interns may work on diverse datasets from healthcare, sustainability, policy, or behavioral sciences.",
    },
    {
        id: 6,
        title: "Environmental Sustainability Intern (ESI)",
        description:
            "Ideal for students passionate about climate action, environmental research, circular economy, and green innovation. Interns contribute to sustainability projects and field studies or develop innovative sustainability models using scientific or AI-based approaches.",
    },
]
