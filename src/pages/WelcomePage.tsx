import ExploreSection from "../features/dashboard/components/ExploreSection"
import GreetingSection from "../features/dashboard/components/GreetingSection"
import ContactUs from "../features/dashboard/components/ContactUs"

const WelcomePage = () => {
    return (
        <div className='welcome-page-container'>
            <GreetingSection />
            <ExploreSection />
            <ContactUs/>
        </div>
    )
}

export default WelcomePage