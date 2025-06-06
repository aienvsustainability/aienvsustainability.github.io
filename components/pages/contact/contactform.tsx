"use client"

import { useForm } from "@formspree/react"
import { useState } from "react"
import { IoReloadCircle } from "react-icons/io5"

const generateRandomNumbers = () => ({
    num1: Math.floor(Math.random() * 10),
    num2: Math.floor(Math.random() * 10),
})

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mqkraboa")
    const [formStatus, setFormStatus] = useState("")
    const [captchaValue, setCaptchaValue] = useState("")
    const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers())

    const handleRefreshCaptcha = () => {
        setRandomNumbers(generateRandomNumbers())
        setCaptchaValue("")
    }

    const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCaptchaValue(e.target.value)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (+captchaValue !== randomNumbers.num1 + randomNumbers.num2) {
            alert("Incorrect captcha")
            return
        }
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
                <input type="text" name="name" placeholder="Name" className="input" />
                <input type="email" name="email" placeholder="Email" className="input" />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input mb-4" />
            <textarea name="message" placeholder="Message" className="input h-64 mb-4" />
            <label className="flex items-center gap-4 mb-2">
                Solve: {randomNumbers.num1} + {randomNumbers.num2} = ?
                <button type="button" onClick={handleRefreshCaptcha}>
                    <IoReloadCircle className="text-2xl text-primary" />
                </button>
            </label>
            <input
                type="number"
                name="captcha"
                value={captchaValue}
                onChange={handleCaptchaChange}
                placeholder="Your answer"
                className="input mb-4 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                required
            />
            {formStatus === "error" && <p>Oops! Something went wrong. Try again.</p>}
            <button type="submit" className="cursor-pointer bg-primary text-white font-medium p-4 rounded-md">
                Send Message
            </button>
        </form>
    )
}

export default ContactForm
