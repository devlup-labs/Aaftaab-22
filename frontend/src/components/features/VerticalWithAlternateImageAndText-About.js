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
const HeadingDescription = tw.p`mt-4 font-medium text-gray-900 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-[calc(20rem/1.2)] bg-no-repeat bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`, // Add bg-cover
  // Set a fixed border-radius for all images
  {
    borderRadius: props.aspectRatio ? `calc(${props.aspectRatio} * 20px)` : "20px",
    overflow: "hidden",
    border: "3px solid black", 
  },
]);

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-lg leading-loose text-black font-poppins`;
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
      imageSrc: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Book-HD-Wallpapers-download.jpeg",
      // subtitle: "Basic Intro",
      // title: "Brief Introduction",
      description:
      "Aaftaab, IIT Jodhpur's annual literary festival, epitomizes the richness and inclusivity of literature. Bringing together students from diverse colleges and backgrounds, it promises an enchanting experience with captivating poets, motivational authors, engaging literary discussions, and lively events such as open mics, quizzes, and vibrant music performances.",
      // url: "https://timerse.com"
    },

    {
      imageSrc: "https://i.pinimg.com/originals/01/b9/a2/01b9a2bc3b729a8ff95c8918270c18b8.jpg",
      // subtitle: "what it's all about?"
      // title: "Theme",
      description:
      "This year's Aaftaab theme, Mosaic, underscores the literary festival's dynamic nature. It depicts literature as a vibrant tapestry, evolving with each participant's contribution, fostering diversity, and creating a living space for literary transformation.",
      
      // url: "https://timerse.com"
    },

    {
      imageSrc: "https://img.freepik.com/premium-photo/pen-book-desk-with-city-background_865967-64109.jpg ",
      // subtitle: "Lit is Hit",
      // title: "Why Lit?",
      description:
      "Margaret Atwood once said, “ In the end, we’ll all become stories.”, therefore the team at Aaftaab invites you to be a co-writer for the story of Aaftaab 2022. The enthusiasm and passion you bring, akin to a glorious sunrise, will help radiate our love for literature throughout the country.",
      // url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>About Aaftaab</HeadingTitle>
          <HeadingDescription>
            Let's dive into the details of aaftaab 2024.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {(i === 2) && <Link to="/events">
                  <LinkAbout>See Event Details --&gt; </LinkAbout>
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
