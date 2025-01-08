import React from "react"

interface BreadcrumbProps {
    title: string
    subtitle: string
    imageUrl: string
    breadcrumb: { label: string; link?: string; active?: boolean }[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
    title,
    subtitle,
    imageUrl,
    breadcrumb,
}) => {
    return (
        <section
            id="page-header"
            className="flex min-h-[300px] w-full items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}>
            <div id="title" className="px-48 max-lg:px-8">
                <div id="content" className="text-white">
                    <h2 className="text-[42px] font-extrabold">{title}</h2>
                    <p className="mb-4 whitespace-pre-line text-lg">
                        {subtitle}
                    </p>
                    <ol
                        id="breadcrumb"
                        className="flex gap-2 p-0 text-xs font-medium">
                        {breadcrumb.map((item, index) => (
                            <li
                                key={index}
                                className={
                                    item.active
                                        ? "uppercase text-main"
                                        : "uppercase"
                                }>
                                {item.link ? (
                                    <a href={item.link}>{item.label}</a>
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
