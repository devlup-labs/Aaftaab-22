import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import imgLogo from "../../images/old-logo.png"

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-700 text-center max-w-sm font-Philosopher  `;



const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 bg-no-repeat  bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
  {
    borderRadius: props.aspectRatio ? `calc(${props.aspectRatio}*20px)` : "20px",
    overflow:"hidden",
    border:"3px solid orange",
    height: "269px",
    backgroundSize: "cover", // Example height
    boxShadow: "0 0 10px orange", // Add border shadow
    // width: "100px
   }
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold text-3xl tracking-wide text-orange-400 font-Philosopher `;
const Title = tw.h4`text-3xl font-bold text-gray-900 font-Philosopher`;
const Description = tw.p`mt-2 text-lg leading-loose  text-black font-Lato`;
const LinkAbout = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-black text-black`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: "https://images.squarespace-cdn.com/content/v1/592710626b8f5bb4c8159811/0db6ec6d-0624-4877-a023-7ab5701538be/camille-brodard-kOAU9SG0VX8-unsplash.jpg?format=2500w",
      subtitle: "Basic Intro",
      // title: "Aaftaab",
      description:
      "Aaftaab, the annual literary festival conducted by IIT Jodhpur,  after is a celebration of the splendour, diversity, and inclusiveness of literature. It provides for a melting pot of students from different colleges, cultures, and backgrounds and ensures that they will be left spellbound by the mesmerising poets, inspiring authors, enthralling literary discussions, and fun-filled activities, including open mics, book launches, quizzes, and live music performances.",
      // url: "https://timerse.com"
    },

    {
      imageSrc: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/colorful-mosaic-art-blissful-sharon-cummings.jpg",
      subtitle: "Mosaic Theme",
      // title: "Theme",
      description:
      "The mosaic theme in literature mirrors a collage of diverse narratives, each contributing to a rich tapestry of storytelling. Like individual tiles in a mosaic, each literary work adds its unique story, style, and message, forming a cohesive whole that celebrates the beauty of diversity in literature. It invites readers to explore the interconnectedness of various narratives and appreciate the vibrant spectrum of voices within the literary world.", 
      
      // url: "https://timerse.com"
    },

    {
      imageSrc: "https://us.123rf.com/450wm/tomertu/tomertu2010/tomertu201000252/157378249-old-feather-quill-ink-pen-with-inkwell-and-old-books-over-wooden-desk-in-front-of-black-wall-backgro.jpg?ver=6",
      // subtitle: "Lit is Hit",
      // title: "Why Lit?",
      description:
      "Margaret Atwood once said, “ In the end, we’ll all become stories.”, therefore the team at Aaftaab invites you to be a co-writer for the story of Aaftaab 2024. The enthusiasm and passion you bring, akin to a glorious sunrise, will help radiate our love for literature throughout the country.",
      // url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>About Aaftaab</HeadingTitle>
          <HeadingDescription>
            Let's dive into the details of aaftaab 2024!
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                {/* <HeadingTitle>{card.title}</HeadingTitle> */}
                <Subtitle>{card.subtitle}</Subtitle>
                <Title></Title>
                <Description>{card.description}</Description>
                {(i === 2) && <Link to="/events">
                  <LinkAbout>See Event Details --&gt;</LinkAbout>
                </Link>}
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
