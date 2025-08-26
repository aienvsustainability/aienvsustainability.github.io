import { BreadcrumbProps } from "@/types"
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
            className="flex min-h-80 w-full items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <div id="title" className="px-48 max-lg:px-8">
                <div id="content" className="text-white">
                    <h1 className="text-5xl font-extrabold max-lg:text-3xl">
                        {title}
                    </h1>
                    <p className="my-4 max-w-xl whitespace-pre-line text-base max-lg:text-sm">
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
                                        ? "uppercase text-primary"
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
            </div>
        </section>
    )
}

export default Breadcrumb
