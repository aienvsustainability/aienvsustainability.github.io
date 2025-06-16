import { IconType } from "react-icons"

export interface ContactLink {
    href: string
    icon: IconType
    text: string
}

export interface SocialLink {
    href: string
    icon: IconType
}

export interface DropdownItem {
    label?: string
    href: string
    text: string
}

export interface DropdownProps {
    label: string
    items: DropdownItem[]
    ping?: boolean
}

export interface MobileDropdownProps {
    label: string
    links: DropdownItem[]
    isOpen: boolean
    onToggle: () => void
}

export interface FooterLink {
    href: string
    text: string
}

export interface FooterSection {
    title: string
    links: FooterLink[]
}

export interface BreadcrumbProps {
    title: string
    subtitle: string
    imageUrl: string
    breadcrumb: { label: string; link?: string; active?: boolean }[]
}

export interface Slide {
    img: string
    title?: string
    titleLines?: [string, string]
    desc: string
    paddingX?: string
    titleSize?: string
    titleClass?: string
    descPadding?: string
}

export interface AboutCard {
    image: string
    title: string
    description: string
}

export interface CounterItem {
    icon: IconType
    value: string
    label: string
}

export interface EventDetails {
    id: number
    title: string
    year: string
    location: string
    description: string
    image: string
}

export interface PaginationProps {
    currentPage: number
    totalPages: number
    paginate: (page: number) => void
    nextPage: () => void
    prevPage: () => void
}

export interface PublicationDetails {
    id: number
    image: string
    date: string
    title: string
    link: string
    description: string
}

export interface CustomMetadata {
    title: string
    description: string
    alternates?: {
        canonical?: string
        languages?: {
            "en-US": string
        }
    }
    openGraph?: {
        title: string
        description: string
        url: string
        siteName: string
        images: {
            url: string
            width: number
            height: number
        }[]
        locale: string
        type: string
    }
    robots?: {
        index: boolean
        follow: boolean
        nocache: boolean
        googleBot: {
            index: boolean
            follow: boolean
            noimageindex?: boolean
            "max-video-preview": number
            "max-image-preview": string
            "max-snippet": number
        }
    }
}

export interface CardItem {
    icon: IconType
    title: string
    number: string
    description: string
}

export interface CardData {
    focusAreas: CardItem[]
    approach: CardItem[]
    goals: CardItem[]
}

export interface CardProps{
      icon: IconType
      number: string | number
      title: string
      description: string
}

export interface TeamMember {
    name: string
    role: string
    linkedinUrl: string
    imageUrl: string
    status?: boolean
    testimonial?: TestiData[]
}

export interface TestiData {
    video?: string;
    text?: string;
}

export interface VideoPlayerProps {
    src: string
    poster: string
    iconSize?: number;
    className?: string
}
