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

export const dilemmaSans = localFont({
    src: [
        {
            path: "./dilemmasans/Dilemma-SansThinCD.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansExtraLightCD.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansLightCD.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansRegularCD.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansMediumCD.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansBoldCD.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./dilemmasans/Dilemma-SansBlackCD.otf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-dilemma-sans",
    display: "swap",
})

export const circularSans = localFont({
    src: [
        {
            path: "./circular/circular-regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./circular/circular-medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./circular/circular-bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./circular/circular-black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-circular-sans",
    display: "swap",
})