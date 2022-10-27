import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import englishauthorbooksigning from "../../images/flagship_events/English Author Book Signing.jpg";
import nishant_suri from "../../images/flagship_events/final_suri-01.png";
import InterviewImg from "../../images/flagship_events/Interview with Director.jpg";
import Maaz from '../../images/flagship_events/Maaz-Bin-Bilal.jpg'
import musicshowImg from "../../images/flagship_events/folk_music.jfif";
import Shiv from '../../images/flagship_events/Illustrious Regional Author Interview_Shiv-Bodhi.jpg';
import unpluggednight from '../../images/flagship_events/Unplugged_Night.jpg';
import distinguishedauthor from '../../images/flagship_events/Distinguisghed_autor_interview.jpg';
import theatre from '../../images/flagship_events/Theatre_performances.jpg';
import openmic from '../../images/flagship_events/Open_mic.jpg';
import TreasurehuntImg from "../../images/flagship_events/Treasure Hunt.jpg";
import djImg from "../../images/flagship_events/DJ Night.jpg";
import kaviSammelanImg from "../../images/flagship_events/Kavi samelan.png";
import lamplightining from "../../images/Day 1/Lamp_lightining.jpg";
import areyourwordsworth from "../../images/Day 2/Are_your_words_worth.jpg";
import englishdebate from "../../images/Day 2/English_Debate.jpg";
import hindidebate from "../../images/Day 2/HIndi_Debate.jpg";
import noobquiz from "../../images/Day 2/Noob_Quiz.jpg";
import scriptwriting from "../../images/Day 2/Script_Writing_Workshop.jpg";
import versecomeverseserve from "../../images/Day 2/Verse_come_verse_serve.jpg";
import justaminutespeech from "../../images/Day 3/Just_a_minute_speech.jpg";
import letsgetquizzical from "../../images/Day 3/Let's_get_quizical.jpg";
import mythologyquiz from "../../images/Day 3/Mythology_Quiz.jpg";
import nautankisaala from "../../images/Day 3/Nautanki_Saala.jpg";
import sciencefictionworkshop from "../../images/Day 3/Science_fiction_workshop.jpg";
import whatiftheymet from "../../images/Day 3/What_if_they_met.jpg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Event Schedule",
  tabs = {
    Flagship: [
      {
        imageSrc: kaviSammelanImg,
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
        imageSrc: Shiv,
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
        imageSrc: djImg,
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
      {
        imageSrc: TreasurehuntImg,
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
        imageSrc: unpluggednight,
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
        imageSrc: distinguishedauthor,
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
        imageSrc: theatre,
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
        imageSrc: openmic,
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
      }
      // {
      //   imageSrc:
      //     "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3Nob3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      //   title: "Workshops",
      //   // timing: "XX:XX AM - XX:XX PM ",
      //   // price: "₹50",
      //   isFlagship: true,
      //   prize: "",
      //   ruleBookLink: "",
      //   url: "#"
      // }
    ],
    Day1: getDay1Cards(),
    Day2: getDay2Cards(),
    Day3: getDay3Cards()
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its timing (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
   

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale:1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale:0.8,
                display: "none",
              }
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
                <CardContainer key={index}>
                 {/* <Link to="/eventDetails" state={card}> */}
                 <Link to={{
                  pathname: "/eventDetails",
                  search: `?name=${card.title}`,
                  state: card
                 }}>
                  <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                    <CardImageContainer imageSrc={card.imageSrc}>
                      {/* <CardRatingContainer>
                        <CardRating>
                          <StarIcon />
                          {card.rating}
                        </CardRating>
                        <CardReview>({card.reviews})</CardReview>
                      </CardRatingContainer> */}
                      {
                        card.price ?
                        <CardHoverOverlay
                          variants={{
                            hover: {
                              opacity: 1,
                              height: "auto"
                            },
                            rest: {
                              opacity: 0,
                              height: 0
                            }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardButton>Register Now!</CardButton>
                        </CardHoverOverlay>
                        : null
                      }
                    </CardImageContainer>
                    <CardText>
                      <CardTitle>{card.title}</CardTitle>
                      {tabKey=="Flagship" && <CardContent>{card.date}</CardContent>}
                      <CardContent>{card.timing}</CardContent>
                      {card.price ? <CardPrice>{card.price}</CardPrice> : null}
                    </CardText>
                  </Card>
                 </Link>
                </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const getDay1Cards = () => {
  const cards = [
    {
      imageSrc: lamplightining,
      title: "Lamp Lighting and Kick Off",
      date: "28 Oct. 2022",
      timing: "7:30 PM - 8:30 PM",
      // price: "₹50",
      description: `"Aarambh!" As the wick of the lamp catches a spark and unflurs it into a luminous flame, we mark the onset of Aaftaab 2022. `,
      isFlagship: false,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    // {
    //   imageSrc: musicshowImg,
    //   // imageSrc:
    //   //   "https://images.unsplash.com/photo-1610659606489-77967e40fa35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    //   title: "Folk Music + Puppet Show",
    //   description: `The term folk music and its equivalents in other languages denote many different kinds of music; the meaning of the term varies according to the part of the world, social class, and period of history. Doing justice to this year’s theme, Kaleidoscopes, Aaftaab will organise a Folk Music and Puppet Show, that will host regional folk musicians to celebrate the beauty and soulfulness of Rajasthani Folk Music. Join us as we immerse ourselves in resonating sounds of traditional instruments and the stories told by these musical storytellers.`,
    //   date: "TBD",
    //   timing: "06:00 PM - 07:00 PM",
    //   // price: "₹50",
    //   isFlagship: true,
    //   prize: "",
    //   ruleBookLink: "",
    //   url: "#"
    // },
    {
      imageSrc: kaviSammelanImg,
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
    }
  ];

  // Shuffle array
  return cards;
};

const getDay2Cards = () => {
  const cards = [
    {
      imageSrc: scriptwriting,
      title: "Script Writing Workshop",
      date: "29 Oct. 2022",
      timing: "10:00 AM - 12:30 PM",
      // price: "₹50",
      description:`Want to learn how an idea is turned into a script that can be visualised by others? We bring to you the chance of learning the art of script writing from Mr. Sushant Sharma himself.`,
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: false,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    // {
    //   imageSrc:
    //     "https://lettering-daily.b-cdn.net/wp-content/uploads/2018/09/me-doing-calligraphy-2.jpg",
    //   title: "Comic Writing Workshop",
    //   date: "29 Oct. 2022",
    //   timing: "10:00 AM - 11:30 AM",
    //   description: `Have you always had a “Creative Knack” but felt like you were unable to express yourself? This is your chance! Join us in the Comic Writing Workshop organized by Tinkle Studios and learn how to pen down your thoughts in a lucrative way so as to do justice to your imagination. `,
    //   // price: "₹50",
    //   registrableEvent: true,
    //   minTeamSize: 1,
    //   maxTeamSize: 1,
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
      imageSrc: hindidebate,
      title: "Hindi Debate",
      date: "29 Oct. 2022",
      timing: "09:00 AM - 11:30 AM",
      description: `Witness and participate a good old school "Hindi Debate".`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 2,
      maxTeamSize: 3,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/17sDLAXgd6rGfqWAnvotCnOOIwbqsh6xXGyg3l4OufWI/edit?usp=sharing",
      url: "#"
    },
    {
      imageSrc: englishdebate,
      title: "English Debate",
      description: `It is better to debate a question without settling it than to settle a question without debating it. This aaftaab, unveil the debater inside you by pitching your matter, method and manner in the “English Debate” competition! Do participate and win exciting prizes!!`,
      date: "29 Oct. 2022",
      timing: "09:00 AM - 11:30 AM",
      // price: "₹50",
      // description: ``,
      registrableEvent: true,
      minTeamSize: 2,
      maxTeamSize: 3,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/1WLY2lJkYvNRFKc1BsoLyLEiLj8-n8SnoqUDeInVr3KA/edit?usp=sharing",
      url: "#"
    },
    {
      imageSrc: versecomeverseserve,
      title: "Verse Come Verse Serve",
      date: "29 Oct. 2022",
      timing: "11:30 AM - 01:00 PM",
      description: `Are you into poetry? Then brush up your skills because "Verse Come Verse Serve" is about more than just words and melody. It's about quick thinking, creative imagination and of course, poetry!`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: false,
      prize: "1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000",
      ruleBookLink: "https://docs.google.com/document/d/1f9WbPTuBP9imQrxAJ1uLR4zPse5JQvSZCCajldAuJC4/edit?usp=drivesdk",
      url: "#"
    },
    {
      imageSrc: noobquiz,
      title: "Noob Quiz",
      date: "29 Oct. 2022",
      timing: "11:30 AM - 01:00 PM",
      description: `"Noob Quiz" is for total beginners to come together and break the myth that quizzes are for nerds. Join us to have some REAL FUN!`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/1JDWIPBhzvkEHS_VfBQ6XHT8sYmuuycfgdeYijoVpPP8/edit",
      url: "#"
    },
    {
      imageSrc: areyourwordsworth,
      title: "Are Your Words-Worth?",
      date: "29 Oct. 2022",
      timing: "02:30 AM - 04:00 PM",
      description: `An event to test your wit and skills at wordplay. So do join in to "turn the tables" or "flip the words".`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/1F4s_w9P9_8VPVF9tI9iqDj-kezyIHWO0CorzNuG3FdU/edit?usp=sharing",
      url: "#"
    },
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
      imageSrc: TreasurehuntImg,
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
      imageSrc: unpluggednight,
      title: "Unplugged Night",
      description: `Tune in to watch Sangam, the music society of IIT Jodhpur, fill the air with magical, melodious music.`,
      date: "29 Oct. 2022",
      timing: "11:00 PM onwards",
      // price: "₹50",
      isFlagship: true,
      prize: "",
      ruleBookLink: "",
      url: "#"
    }
  ];

  return cards;
};

const getDay3Cards = () => {
  const cards = [
    {
      imageSrc: justaminutespeech,
      title: "Just A Minute Speech",
      date: "30 Oct. 2022",
      timing: "09:30 AM - 11:30 AM",
      // price: "₹50",
      description: `Everyone can give a speech. But who can give a speech under a minute? Let's check this out in "Just A Minute Speech" where people will scrabble for their words when the clock is ticking.`,
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "1st: ₹3000, 2nd: ₹2000, 3rd: ₹1000",
      ruleBookLink: "https://docs.google.com/document/d/1ueVJdmJSABE0L5v9tD3ej51n6AnRjtOhyaqwhS6KTBQ/edit",
      url: "#"
    },
    {
      imageSrc: Shiv,
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
      imageSrc: distinguishedauthor,
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
      imageSrc: sciencefictionworkshop,
      title: "Science Fiction Workshop",
      date: "29 Oct. 2022",
      timing: "04:00 PM - 05:30 PM",
      // price: "₹50",
      description:`Ever wondered how those amazing science fiction ideas are brought to life? Isn't it exciting to get to know about it? Join us in an amazing science fiction workshop by Ms. Mimi Mondal, Locus Award Winner, Hugo and Nebula Award nominee and writer of bestselling works, including " His Footsteps, Through Darkness and Light" and "Luminescent Threads: Connections to Octavia E. Butler"  and explore the marvel of science fiction writing.`,
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: false,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc: nautankisaala,
      title: "Nautanki Saala",
      date: "30 Oct. 2022",
      timing: "01:00 PM - 02:00 PM",
      description: `Theatre brings out a whole new level of creativity and skill, but do you know how a theater play is written? We bring to you a theater play writing workshop featuring renowned artists from Actor Theatre Rajasthan.`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 1,
      maxTeamSize: 1,
      isFlagship: false,
      prize: "",
      ruleBookLink: "",
      url: "#"
    },
    {
      imageSrc: whatiftheymet,
      title: "What If They Met",
      date: "30 Oct. 2022",
      timing: "11:30 AM - 01:00 PM",
      description: `What if Hermione meets Bella? "What If They Met" is where not only characters come to life but where two characters from different dimensions meet and converse. How will the story unfold now? Come, participate and witness!.`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/19IQhQGfQjWhjV6KFS-PxbtYASSSUGfDzLDfrszVRnJc/edit",
      url: "#"
    },
    {
      imageSrc: mythologyquiz,
      title: "Mythology quiz",
      date: "30 Oct. 2022",
      timing: "11:30 AM - 01:00 PM",
      description: `How much do you know when it comes to mythology? There are myths which are believed to tend to become true, defining mythology as the sacred history of humanity… Let’s come together to participate in the mythology quiz and explore a world full of myths.`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "1st: ₹6000, 2nd: ₹3000, 3rd: ₹1500",
      ruleBookLink: "https://docs.google.com/document/d/1WA69HY5pfC7zgEOx8XGTLX7slZOB2dTJcMZLfzdpDMY/edit?usp=sharing",
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
    {
      imageSrc: theatre,
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
      imageSrc: letsgetquizzical,
      title: "Let's Get Quizzical",
      date: "30 Oct. 2022",
      timing: "6:00 PM - 8:00 PM",
      description: `Quiz can be fun, but themed quiz is definitely fun! Bringing to you the Music, Entertainment, Literature and Arts "MELA QUIZ!".`,
      // price: "₹50",
      registrableEvent: true,
      minTeamSize: 3,
      maxTeamSize: 5,
      isFlagship: false,
      prize: "",
      ruleBookLink: "https://docs.google.com/document/d/14F3vtdIii99zCn5dOiy1pMn731ARBWEu5ZuWvmcdCfY/edit",
      url: "#"
    },
    {
      imageSrc: openmic,
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
    {
      imageSrc: djImg,
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
    //     "https://images.unsplash.com/photo-1583318432730-a19c89692612?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    //   title: "Prom Night",
    //   description: `The perfect opportunity for you and your significant other, to spend some time together, and live the ultimate teenage romance dream.`,
    //   date: "TBD",
    //   timing: "10:30 PM - 11:30 PM",
    //   // price: "₹50",
    //   isFlagship: true,
    //   prize: "",
    //   ruleBookLink: "",
    //   url: "#"
    // },
  ];

  return cards;
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event alpha",
      timing: "Chicken Main Course",
      price: "$5.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event beta",
      timing: "Fried Mexican Beef",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event charlie",
      timing: "Chilli Crispy Nachos",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event delta",
      timing: "Mexican Chilli",
      price: "$3.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event echo",
      timing: "Deepfried Chicken",
      price: "$2.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event foxtrot",
      timing: "Hamburger & Fries",
      price: "$7.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event gamma",
      timing: "Crispy Soyabeans",
      price: "$8.99",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Event sigma",
      timing: "Roasted Chicken & Egg",
      price: "$7.99",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
