"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Props {
    images: string[]
}

export default function GalleryGrid({ images }: Props) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [loaded, setLoaded] = useState<Record<string, boolean>>({})

    return (
        <section className="w-full bg-neutral-50 max-lg:px-4">
            <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-2 py-6 sm:px-4 sm:py-8 md:px-8 md:py-10 lg:px-48 lg:py-20">
                <div className="columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5">
                    {images.map((file) => (
                        <div
                            key={file}
                            className="relative mb-4 cursor-pointer break-inside-avoid"
                            onClick={() => setSelectedImage(file)}>
                            {!loaded[file] && (
                                <div className="skeleton absolute inset-0 rounded-sm" />
                            )}

                            <Image
                                src={`/assets/img/gallery/${file}`}
                                alt={file}
                                width={800}
                                height={1000}
                                loading="lazy"
                                onLoad={() =>
                                    setLoaded((prev) => ({
                                        ...prev,
                                        [file]: true,
                                    }))
                                }
                                className={`h-auto w-full rounded-sm object-cover transition-all duration-500 ${
                                    loaded[file] ? "opacity-100" : "opacity-0"
                                } hover:scale-[1.01]`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}>
                    <div
                        className="animate-fadeIn relative max-h-[90vh] max-w-[90vw]"
                        onClick={(e) => e.stopPropagation()}>
                        <button
                            className="absolute -top-10 right-0 cursor-pointer text-neutral-50"
                            onClick={() => setSelectedImage(null)}>
                            <X size={28} className="stroke-1" />
                        </button>

                        <Image
                            src={`/assets/img/gallery/${selectedImage}`}
                            alt="Preview"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-[70vh] w-full cursor-pointer object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    )
}