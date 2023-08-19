'use client'

import BackgroundBlur from "./backgroundBlur"
import NavbarCustom from "./navbarCustom"
import GenerativeAIContainer from "./generativeAIContainer"
import SectionCard from "./sectionCard"
import Partners from "./partners"
import Footer from "./footer"

export default function LandPage() {
    return (
        <div>
            <BackgroundBlur />
            <NavbarCustom />
            <GenerativeAIContainer />
            <SectionCard />
            <Partners />
            <div className='py-10' />
            <Footer />
        </div>
    )
}
