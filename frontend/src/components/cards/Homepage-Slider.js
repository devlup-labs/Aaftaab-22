import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as DateIcon} from "feather-icons/dist/icons/calendar.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import kaviSammelanImg from "../../images/flagship_events/Kavi samelan.png";
import englishauthorbooksigning from "../../images/flagship_events/English Author Book Signing.jpg";
import nishant_suri from "../../images/flagship_events/final_suri-01.png";
import djImg from "../../images/flagship_events/DJ Night.jpg";
import musicshowImg from "../../images/flagship_events/folk_music.jfif";
import BookImg from "../../images/flagship_events/Book Signings.jpg";
import InterviewImg from "../../images/flagship_events/Interview with Director.jpg";
import StandupIMG from "../../images/flagship_events/Standup.jpg";
import TreasurehuntImg from "../../images/flagship_events/Treasure Hunt.jpg";
import WorkshopIMG from "../../images/flagship_events/Workshops.jpg";
import Maaz from '../../images/flagship_events/Maaz-Bin-Bilal.jpg'

import "./Homepage-Slider.css"

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex w-full h-full`}
  }
  .slick-slide {
    ${tw`w-full h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 flex-1 flex flex-col justify-between sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;


const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const Rating = tw.span`ml-2 font-bold`;
//const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;
const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc:
        "https://kavisammelanlive.com/wp-content/uploads/2020/05/new-logo.png",
      title: "Kavi Sammelan",
      description: `काव्यमय हो उठेगा हर दिल, जब सजेगी कविओ की महफ़िल|  Get accompanied by Mr. Naveen Chourey, Mr. Shubham Pandey, Dr. Vivek Vijay and 
      Mr. Akshat Chourasiya and their eminent work in an evening full of poems and mishairas.`,
      date: "28 Oct. 2022",
      timing: "9:30 PM - 11:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc: nishant_suri,
      title: "Comedy Central",
      description: `Come and join us for an evening filled with jokes, laughter and a touch of sarcasm, brought to you by one of the finest comics in the country!.`,
      date: "29 Oct. 2022",
      timing: "09:00 PM onwards",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#",
    },
    {
      imageSrc:
        "https://i.postimg.cc/G354S8t8/Shiv-Bodhi.jpg",
      title: "Illustrious Regional Author Interview",
      description: `We are here to interview a prominent artist and teacher of Yoga and Buddhism, Mr. Shiv Bodhi. Join us and get a chance to learn about him and his spiritual writings and lifestyle.`,
      date: "30 Oct. 2022",
      timing: "11:30 AM - 12:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRqJTIwbmlnaHR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      title: "Social Floor DJ",
      description: `As we reach the end of the festivities, join us, for one last celebration , as we embrace EDM and Hip Hop music, and dance to our hearts content!`,
      date: "30 Oct. 2022",
      timing: "08:30 PM onwards",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    // {
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1491309055486-24ae511c15c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGJvb2slMjBzaWduaW5nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    //   title: "Regional Literature Colloquim",
    //   date: "30 Oct. 2022",
    //   timing: "02:00 PM - 03:00 PM",
    //   description: `Immerse yourself in the beauty of regional literature and get the oppurtunity to interact with Mr. Madhav Hada, author of "Meera vs Meera" and Mr. Shiv Bodhi as they discuss their works, stories, struggles, and much more!.`,
    //   // price: "₹50",
    //   isFlagship: true,
    //   prize: "",
    //   ruleBookLink: "",
    //   url: "#"
    // },
    // {
    //   //imageSrc: Maaz,
    //    imageSrc: englishauthorbooksigning,
    //   title: "Eminent Author Book Signing",
    //   date: "29 Oct. 2022",
    //   timing: "02:30 AM - 04:00 PM",
    //   description: `The biography of a book, as told by its author! Attend and interact with some of the biggest names in the literary world, and learn how a book is turned from a novel idea to a physical novel.`,
    //   // price: "₹50",
    //   isFlagship: false,
    //   prize: "",
    //   ruleBookLink: "",
    //   url: "#"
    // },
    {
      imageSrc:  englishauthorbooksigning,
      title: "Eminent Young Authors Conference",
      description: `Presenting to you a conference where you can listen our young authors discuss their ideas, thoughts and personal experiences through literature. Come and get a chance to interact with Mr. Maaz Bin Bilal, author of "Ghazalnāma: Poems from Delhi, Belfast, and Urdu" and Mr. Mihir Vatsa, author of "Tales Of Hazaribagh: An Intimate Exploration Of Chhotanagpur Plateau".`,
      date: "29 Oct. 2022",
      timing: "02:30 PM - 04:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc: InterviewImg,
      title: "Interview with Director",
      description: `Ever wondered whether the Director of such a prestigious institute eats like us, lives like us or enjoys like us? Well, we present a one-on-one interview with the director complete with a set of unique and out-of-the-box questions. Come and see what he has to say! An interview with the director in front of the entire college that help us get to know him from a different perspective.`,
      date: "29th Oct. 2022",
      timing: "4:30 PM - 5:30 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
    },
    {
      imageSrc:
        "https://thumbs.dreamstime.com/b/old-map-vintage-travel-equipment-expedition-concept-treasure-hunt-holiday-gifts-old-map-vintage-travel-equipment-133932740.jpg",
      title: "Clueminati",
      description: `Are you into solving the clues and making your way through wilderness in pursuit of long lost treaure? We offer you all this thrilling experience in Aaftaab 2022's very own treasure hunt, "Clueminati"!`,
      date: "29 Oct. 2022",
      timing: "07:00 PM onwards",
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: true,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1524230659092-07f99a75c013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Unplugged Night",
      description: `Tune in to watch Sangam, the music society of IIT Jodhpur, fill the air with magical, melodious music.`,
      date: "29 Oct. 2022",
      timing: "11:00 PM onwards",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://static.wixstatic.com/media/ceed95_d8bb5308b4024b9781aa508cc6825f82~mv2.jpg/v1/fill/w_568,h_756,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_8316_JPG.jpg",
      title: "Distinguished Author Interview ",
      description: `Come and dive into an interesting and insightful interview of Mr. Madhav Hada, a famous and prominent cultural and historical writer whose books are a great reflection of India's ancient culture and history.`,
      date: "30 Oct. 2022",
      timing: "02:00 PM - 03:00 PM",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://cf.bstatic.com/data/xphoto/1182x887/440/44045903.jpg?size=S",
      title: "Theatre Performance",
      date: "30 Oct. 2022",
      timing: "03:30 PM - 05:00 PM",
      description: `Theatre is an expression of literature. Moving forward with the theme of Kaleidoscope, we will be hosting a Theatre Performance to enrich our audience with acting and music.`,
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1485814837398-ed2048f57499?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Open Mic",
      description: `This is your chance to grab the mic and showcase your talent to a wide audience! So what are you waiting for? The stage is set, and it is all yours...`,
      date: "30 Oct. 2022",
      timing: "06:30 PM - 08:30 PM",
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    // {
    //   imageSrc: WorkshopIMG,
    //   title: "Workshops",
    //   date: "30/09/22",
    // },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Flagship Events</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <div className="Card" key={index}>
            {/* <Card key={index}> */}
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer className="CardTitle">
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  { card.locationText ?
                    <IconWithText>
                      <IconContainer>
                        <LocationIcon />
                      </IconContainer>
                      <Text>{card.locationText}</Text>
                    </IconWithText>
                    :null
                  }
                  { card.date ?
                    <IconWithText>
                      <IconContainer>
                        <DateIcon />
                      </IconContainer>
                      <Text>{card.date}</Text>
                    </IconWithText>
                    : null
                  }
                </SecondaryInfoContainer>
                {/* <Description>{card.description}</Description> */}
              </TextInfo>
              <Link 
                to={{
                  pathname: "/eventDetails",
                  search: `?name=${card.title}`,
                  state: card
                }}
              >
                <PrimaryButton>Check out now</PrimaryButton>
              </Link>
            {/* </Card> */}
            </div>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
