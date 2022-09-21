import AnimationRevealPage from 'helpers/AnimationRevealPage';
import tw from "twin.macro";

import Footer from "components/footers/Home-Footer";
import Header from 'components/headers/light.js';
import RegisterOptions from "components/pricing/ThreePlans-register.js";

function Events() {
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    return (
        <AnimationRevealPage>
            <Header />
            <RegisterOptions />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Events;