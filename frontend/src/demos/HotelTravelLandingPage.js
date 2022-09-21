import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Features />
    <SliderCard />
    <TrendingCard />
    <MainFeature />
    <Blog />
    <Testimonial textOnLeft={true}/>
    <FAQ />
    <SubscribeNewsLetterForm />
    <Footer />
  </AnimationRevealPage>
);
