import { BreadcrumbProps } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    title,
    subtitle,
    imageUrl,
    breadcrumb,
}) => {
    return (
        <section
            id="page-header"
            className="flex w-full bg-cover bg-center"
            // style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="relative flex h-[60vh] w-full flex-col items-center justify-center overflow-hidden md:h-102">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    priority
                    className="pointer-events-none object-cover object-bottom select-none"
                />
                <ol
                    id="breadcrumb"
                    className="z-10 flex w-full items-center justify-center gap-2 p-0 text-center text-xs font-medium text-white">
                    {breadcrumb.map((item, index) => (
                        <li
                            key={index}
                            className={
                                item.active
                                    ? "text-primary uppercase"
                                    : "uppercase"
                            }>
                            {item.link ? (
                                <Link href={item.link}>{item.label}</Link>
                            ) : (
                                item.label
                            )}
                            {index < breadcrumb.length - 1 && " / "}
                        </li>
                    ))}
                </ol>
                <h2 className="font-condensed pointer-events-none relative z-10 text-5xl font-medium text-white uppercase mix-blend-difference select-none sm:text-6xl lg:text-9xl">
                    {title}
                </h2>
                <p className="pointer-events-none z-10 max-w-xs text-center text-sm font-medium tracking-wide text-neutral-900 opacity-95 select-none md:max-w-lg md:text-base">
                    {subtitle}
                </p>
            </div>
            {/* <div id="title" className="px-48 max-lg:px-8">
                <div id="content" className="text-white">
                    <h1 className="font-condensed text-5xl font-medium tracking-wide uppercase max-lg:text-3xl">
                        {title}
                    </h1>
                    <p className="my-4 max-w-xl text-base whitespace-pre-line max-lg:text-sm">
                        {subtitle}
                    </p>
                    <ol
                        id="breadcrumb"
                        className="flex w-full gap-2 p-0 text-xs font-medium">
                        {breadcrumb.map((item, index) => (
                            <li
                                key={index}
                                className={
                                    item.active
                                        ? "text-primary uppercase"
                                        : "uppercase"
                                }>
                                {item.link ? (
                                    <Link href={item.link}>{item.label}</Link>
                                ) : (
                                    item.label
                                )}
                                {index < breadcrumb.length - 1 && " / "}
                            </li>
                        ))}
                    </ol>
                </div>
            </div> */}
        </section>
    )
}

export default Breadcrumb
