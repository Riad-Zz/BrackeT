
import { BentoSection } from '../BentoSection/BentoSection';
import { FAQSection } from '../FAQSection/FAQSection';
import Hero from '../Hero/Hero';
import HowItWork from '../HowItWork/HowItWork';
import LanguageShowCase from '../LanguageShowCase/LanguageShowCase';
import RankSystem from '../RankSystem/RankSystem';


const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <HowItWork></HowItWork>
            <RankSystem></RankSystem>
            <LanguageShowCase></LanguageShowCase>
            <BentoSection></BentoSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default HomePage;