import localFont from "next/font/local"
import { Poppins } from "next/font/google";

export const poppins = Poppins({
    weight: ["100", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
    subsets: ["latin-ext"]
})

export const satoshi = localFont({
    src: [
        {
            path: "./fonts/Satoshi-Black.woff2",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-BlackItalic.woff2",
            weight: "900",
            style: "italic",
        },
        {
            path: "./fonts/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-BoldItalic.woff2",
            weight: "700",
            style: "italic",
        },
        {
            path: "./fonts/Satoshi-Medium.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "./fonts/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-Italic.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "./fonts/Satoshi-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-LightItalic.woff2",
            weight: "300",
            style: "italic",
        },
    ],
    variable: "--font-satoshi",
})

export const dilemmaSans = localFont({
    src: [
        {
            path: "./fonts/dilemmasans/Dilemma-SansThinCD.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansExtraLightCD.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansLightCD.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansRegularCD.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansMediumCD.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansBoldCD.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/dilemmasans/Dilemma-SansBlackCD.otf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-dilemma-sans",
    display: "swap",
})