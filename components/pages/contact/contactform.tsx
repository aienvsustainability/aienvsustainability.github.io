"use client"

import { useForm } from "@formspree/react"
import { useState } from "react"
import { IoReloadCircle } from "react-icons/io5"
import { z } from "zod"

const generateRandomNumbers = () => ({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
})

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(2, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    captcha: z.string(),
})

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mqkraboa")
    const [formStatus, setFormStatus] = useState("")
    const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers())
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        captcha: "",
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleRefreshCaptcha = () => {
        setRandomNumbers(generateRandomNumbers())
        setFormData((prev) => ({ ...prev, captcha: "" }))
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const validateForm = () => {
        const result = contactSchema.safeParse(formData)
        const newErrors: { [key: string]: string } = {}
        if (!result.success) {
            result.error.issues.forEach((err: z.ZodIssue) => {
                if (typeof err.path[0] === "string")
                    newErrors[err.path[0]] = err.message
            })
        }
        // Captcha validation
        if (+formData.captcha !== randomNumbers.num1 + randomNumbers.num2) {
            newErrors["captcha"] = "Incorrect captcha"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateForm()) return
        try {
            await handleSubmit(e)
            setFormStatus(state.succeeded ? "success" : "error")
        } catch {
            setFormStatus("error")
        }
    }

    if (formStatus === "success") return <p>Thanks for your message!</p>

    return (
        <form onSubmit={onSubmit} className="w-full">
            <div className="mb-4 flex gap-2 max-lg:flex-col">
                <div className="w-full">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input font-medium tracking-wide"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.name}
                        </p>
                    )}
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input font-medium tracking-wide"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                            {errors.email}
                        </p>
                    )}
                </div>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input font-medium tracking-wide"
                    value={formData.subject}
                    onChange={handleChange}
                />
                {errors.subject && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.subject}
                    </p>
                )}
            </div>
            <div className="mb-4">
                <textarea
                    name="message"
                    placeholder="Message"
                    className="input h-30 font-medium tracking-wide"
                    value={formData.message}
                    onChange={handleChange}
                />
                {errors.message && (
                    <p className="mt-1 text-xs text-red-500">
                        {errors.message}
                    </p>
                )}
            </div>
            <label className="mb-2 flex items-center font-medium gap-4">
                Solve: {randomNumbers.num1} + {randomNumbers.num2} = ?
                <button type="button" onClick={handleRefreshCaptcha}>
                    <IoReloadCircle className="text-primary text-2xl" />
                </button>
            </label>
            <input
                type="number"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Your answer"
                className="input mb-4 font-medium tracking-wide appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                required
            />
            {errors.captcha && (
                <p className="mt-1 text-xs text-red-500">{errors.captcha}</p>
            )}
            {formStatus === "error" && (
                <p>Oops! Something went wrong. Try again.</p>
            )}
            <button
                type="submit"
                className="bg-primary tracking-wide cursor-pointer rounded-md p-4 font-medium text-white">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm
