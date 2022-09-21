import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import MainFeature from "components/features/VerticalWithAlternateImageAndText-About.js";
import Footer from "components/footers/Home-Footer";
import Header from 'components/headers/light.js';


function About() {
    return (
        <AnimationRevealPage>
            <Header />
            <MainFeature />
            <Footer />
        </AnimationRevealPage>
    );
}

export default About;
