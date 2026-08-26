import localFont from "next/font/local"
import { Poppins, Google_Sans_Code, Barlow_Condensed } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin-ext"]
})

export const monoFont = Google_Sans_Code({
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-mono",
    subsets: ["latin"]
})

export const satoshi = localFont({
    src: [
        {
            path: "./satoshi/Satoshi-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "./satoshi/Satoshi-BlackItalic.woff2",
            weight: "900",
            style: "italic",
        },
        {
            path: "./satoshi/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./satoshi/Satoshi-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "./satoshi/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./satoshi/Satoshi-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "./satoshi/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./satoshi/Satoshi-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./satoshi/Satoshi-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./satoshi/Satoshi-LightItalic.woff2",
            weight: "300",
            style: "italic",
        },
    ],
    variable: "--font-satoshi",
})

export const barlowCondensed = Barlow_Condensed({
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-barlow-condensed",
    subsets: ["latin"]
})

export const glacialFont = localFont({
    src: [
        {
            path: "./glacial-indifference/GlacialIndifference-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./glacial-indifference/GlacialIndifference-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./glacial-indifference/GlacialIndifference-Italic.ttf",
            weight: "400",
            style: "italic",
        },
    ],
    variable: "--font-glacial",
    display: "swap",
})
