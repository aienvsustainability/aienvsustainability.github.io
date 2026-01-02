import Link from "next/link"
import { FaMobileRetro } from "react-icons/fa6"
import { IoIosMailOpen } from "react-icons/io"

const ContactInfo = () => (
    <div className="contact-info">
        <h3 className="text-main mb-8 text-lg font-extrabold uppercase">
            Office
        </h3>
        <p className="text-secondary mb-4 text-base font-medium">
            CAIES Foundation, New Harnichak, Walmichak Road, Near Devisthan,
            Anisabad, Patna 800002, Bihar, India
        </p>
        <h3 className="text-main mt-10 mb-8 max-w-sm text-lg font-extrabold uppercase">
            Education Training and Research Center of CAIES Foundation
        </h3>
        <p className="text-secondary mb-4 text-base font-medium">
            CAIES Foundation, Village and Post: Rampur Diara, PS: Maner, Patna -
            801108, Bihar, Bharat
        </p>
        <ul className="p-0">
            <li className="flex items-center gap-2 text-base leading-10 font-medium">
                <Link
                    className="text-secondary flex items-center justify-center gap-2"
                    href="tel:+917739711077">
                    <FaMobileRetro /> +91 7739711077
                </Link>
            </li>
            <li className="flex items-center gap-2 text-base leading-10 font-medium">
                <Link
                    className="text-secondary flex items-center justify-center gap-2"
                    href="mailto:contact@caienvsus.org">
                    <IoIosMailOpen /> contact@caienvsus.org
                </Link>
            </li>
        </ul>
    </div>
)

export default ContactInfo
