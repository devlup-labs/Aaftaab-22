import Features from "components/features/SponsersCard";
import Footer from "components/footers/Home-Footer";
import Header from "components/headers/light";
import AnimationRevealPage from 'helpers/AnimationRevealPage';

function Sponsors() {
    return (
        <AnimationRevealPage>
            <Header />
            <Features />
            <Footer />
        </AnimationRevealPage>
    );
}
export default Sponsors;