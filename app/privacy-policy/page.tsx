import Link from "next/link"
import React from "react"

const PrivacyPolicyPage = () => {
    return (
        <main className="flex h-full w-full flex-col items-center justify-center bg-neutral-50">
            <div className="mx-auto w-full items-start justify-center flex flex-col max-w-6xl py-20">
                <h2 className="w-full text-center font-condensed pointer-events-none relative z-10 text-5xl text-white uppercase mix-blend-difference select-none sm:text-6xl lg:text-9xl">
                    Privacy Policy
                </h2>

                {/* Policy Content */}
                <section className="w-full flex flex-col items-center justify-center">
                    <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                        <div className="mx-auto max-w-4xl space-y-10">
                            {/* Introduction */}
                            <p className="text-base leading-normal text-neutral-600 sm:text-lg sm:leading-relaxed">
                                CAIES Foundation respects your privacy. This
                                policy explains what personal information we
                                collect, why we collect it, how we use it, and
                                the choices you have.
                            </p>
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Information we collect
                                </h3>

                                <p className="mb-4 text-base leading-normal text-neutral-700 sm:text-lg">
                                    We may collect the following information
                                </p>

                                <ul className="space-y-3 text-base text-neutral-600 sm:text-lg">
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Your name, email address, phone
                                        number, and postal address
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Information you provide when you
                                        register, apply, donate, contact us, or
                                        join a program
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Payment details handled by our payment
                                        service provider
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Information about your device and
                                        website visit, such as your IP address,
                                        browser type, pages visited, and time
                                        spent on the website
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Any other information you choose to
                                        share with us
                                    </li>
                                </ul>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    Please do not provide personal information
                                    that is not needed for your request.
                                </p>
                            </div>

                            {/* How we use your information */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    How we use your information
                                </h3>

                                <p className="mb-4 text-base leading-normal text-neutral-700 sm:text-lg">
                                    We may use your information to
                                </p>

                                <ul className="space-y-3 text-base text-neutral-600 sm:text-lg">
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Respond to your questions and requests
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Process registrations, applications,
                                        nominations, and donations
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Manage our programs, internships,
                                        events, and services
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Send important updates about your
                                        participation
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Send newsletters or promotional
                                        messages when you have agreed to receive
                                        them
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Improve our website, programs, and
                                        services
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Prevent fraud and protect our website
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Meet our legal and reporting duties
                                    </li>
                                </ul>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    You may stop receiving promotional emails at
                                    any time by using the unsubscribe option or
                                    contacting us.
                                </p>
                            </div>

                            {/* Consent */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Consent
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    We will ask for your consent when it is
                                    required. You may withdraw your consent at
                                    any time by contacting us. This will not
                                    affect any use of your information that took
                                    place before you withdrew consent. Some
                                    services may not be available if the
                                    required information or consent is
                                    withdrawn.
                                </p>
                            </div>

                            {/* Sharing your information */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Sharing your information
                                </h3>

                                <p className="mb-4 text-base leading-normal text-neutral-700 sm:text-lg">
                                    We do not sell or rent your personal
                                    information. We may share your information
                                    with
                                </p>

                                <ul className="space-y-3 text-base text-neutral-600 sm:text-lg">
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Service providers that help us operate
                                        our website, programs, communications,
                                        and payments
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Government bodies or legal authorities
                                        when required by law
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Professional advisers when needed for
                                        legal, audit, accounting, or security
                                        purposes
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Another organization if CAIES
                                        Foundation is restructured or its work
                                        is transferred
                                    </li>
                                </ul>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    These parties may use your information only
                                    for the agreed purpose and must protect it.
                                </p>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    We will publish a donor, supporter, intern,
                                    student, or participant’s name, photograph,
                                    or other details only after receiving
                                    suitable consent.
                                </p>
                            </div>

                            {/* Payments and donations */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Payments and donations
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    We prefer to receive donations by cheque or
                                    through trusted online payment services.
                                    Online payments are handled by secure
                                    third-party payment providers that follow
                                    suitable payment security standards. CAIES
                                    Foundation does not store complete credit
                                    card or debit card details on its servers.
                                </p>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    Payment providers may process information
                                    under their own privacy policies.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Cookies
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    Our website may use cookies and similar
                                    tools to remember your choices, understand
                                    website use, and improve your experience.
                                    You can manage cookies through your browser
                                    or the cookie choices shown on our website.
                                    Blocking some cookies may affect how the
                                    website works.
                                </p>
                            </div>

                            {/* Children’s information */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Children’s information
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    A child means anyone under 18 years of age.
                                    We require clear consent from a parent or
                                    legal guardian before collecting or using a
                                    child’s personal information. We do not use
                                    children’s information for targeted
                                    advertising or other activities that may
                                    harm their well-being.
                                </p>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    If you believe a child’s information was
                                    provided without proper consent, please
                                    contact us. We will review the matter and
                                    delete the information when required.
                                </p>
                            </div>

                            {/* Data security */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Data security
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    We use reasonable steps to protect personal
                                    information from loss, misuse, unauthorized
                                    access, change, or disclosure. No website or
                                    online storage system is fully secure. We
                                    cannot promise complete security, but we
                                    will act promptly if we find a data breach
                                    and will provide notice when required by
                                    law.
                                </p>
                            </div>

                            {/* Data retention */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Data retention
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    We keep personal information only for as
                                    long as it is needed for the purpose for
                                    which it was collected. We may keep some
                                    records for a longer period when required
                                    for legal, tax, audit, donor reporting,
                                    dispute handling, or safety reasons.
                                </p>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    When information is no longer needed, we
                                    will delete it or remove details that
                                    identify you.
                                </p>

                            </div>

                            {/* Your rights */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Your rights
                                </h3>

                                <p className="mb-4 text-base leading-normal text-neutral-700 sm:text-lg">
                                    Subject to applicable law, you may ask us to
                                </p>

                                <ul className="space-y-3 text-base text-neutral-600 sm:text-lg">
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Tell you what personal information we
                                        hold about you
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Correct or update your information
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">Delete your information</li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">Withdraw your consent</li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">Stop promotional communications</li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">
                                        Explain how your information has been
                                        used or shared
                                    </li>
                                    <li className="pl-3.5 text-sm sm:text-base border-l-2 border-neutral-300">Review and respond to a complaint</li>
                                </ul>

                                <p className="mt-5 text-base leading-normal text-neutral-700 sm:text-lg">
                                    We may need to confirm your identity before
                                    completing a request. Some information may
                                    need to be kept when required by law.
                                </p>
                            </div>

                            {/* Links to other websites */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Links to other websites
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    Our website may contain links to other
                                    websites. CAIES Foundation does not control
                                    these websites and is not responsible for
                                    their content or privacy practices. Please
                                    review their privacy policies before sharing
                                    personal information.
                                </p>
                            </div>

                            {/* Changes to this policy */}
                            <div>
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Changes to this policy
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    We may update this policy when our practices
                                    or legal duties change. The latest version
                                    and its update date will be posted on our
                                    website. Important changes may also be
                                    shared through email or a website notice.
                                </p>
                            </div>

                            {/* Contact us */}
                            <div className="rounded-2xl bg-neutral-100 p-6 sm:p-8">
                                <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
                                    Contact us
                                </h3>

                                <p className="text-base leading-normal text-neutral-700 sm:text-lg">
                                    For questions, requests, or complaints about
                                    this policy or your personal information,
                                    please email <Link href="mailto:contact@caienvsus.org" className="text-primary hover:underline">
                                        contact@caienvsus.org
                                    </Link>. We will
                                    review your request and respond within a
                                    reasonable time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="h-8 sm:h-12" />
            </div>
        </main>
    )
}

export default PrivacyPolicyPage
