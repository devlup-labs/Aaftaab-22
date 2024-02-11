import AnimationRevealPage from 'helpers/AnimationRevealPage';
import React, { Component } from 'react';
import Hero from "components/hero/Hero-Section-Homepage";
import Slider from "components/cards/Homepage-Slider";
import Features from "components/features/Homepage-Sponsors-Preview";
import Footer from "components/footers/Home-Footer";
import tw from "twin.macro";
import imgLogo from "../images/old-logo.png";
function Home() {

    const HighlightedText = tw.span`bg-gradient-to-r from-green-300 via-yellow-300 to-blue-200 px-4 text-teal-700  transform -skew-x-12 inline-block font-Philosopher`;
    const DescriptionText = tw.p`text-xl text-teal-700 font-Philosopher`; 

    return (
        <AnimationRevealPage>
            <Hero
                heading={<>The <HighlightedText>literary festival</HighlightedText> of IIT Jodhpur</>}
                
                description={<span style = {{ fontFamily: 'Lato',color:'teal' }}>Aaftaab is a celebration of the splendour, diversity, and inclusiveness of literature. It provides for a melting pot of students from different colleges, cultures, and backgrounds and ensures that they will be left spellbound by the mesmerizing poets, inspiring authors, enthralling literary discussions, and fun-filled activities, including open mics, quizzes, and live music performances.</span>}
                imageSrc={imgLogo}/>
            <Slider />
            <Features />
            <Footer />
        </AnimationRevealPage>
    );
}

export default Home;