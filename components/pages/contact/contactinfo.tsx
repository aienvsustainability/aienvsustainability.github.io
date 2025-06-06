import Link from "next/link"
import { FaMobileRetro } from "react-icons/fa6"
import { IoIosMailOpen } from "react-icons/io"

const ContactInfo = () => (
    <div className="contact-info">
        <h3 className="mb-8 text-lg font-extrabold uppercase text-main">Office</h3>
        <p className="mb-4 text-lg text-secondary">
            CAIES Foundation, New Harnichak, Walmichak Road, Near Devisthan,
            Anisabad, Patna 800002, Bihar, India
        </p>
        <ul className="p-0">
            <li className="flex items-center gap-2 text-lg font-medium leading-10">
                <Link className="flex text-secondary gap-2 items-center justify-center" href="tel:+917739711077">
                    <FaMobileRetro /> +91 7739711077
                </Link>
            </li>
            <li className="flex items-center gap-2 text-lg font-medium leading-10">
                <Link className="flex gap-2 text-secondary items-center justify-center" href="mailto:contact@caienvsus.org">
                    <IoIosMailOpen /> contact@caienvsus.org
                </Link>
            </li>
        </ul>
    </div>
)

export default ContactInfo
