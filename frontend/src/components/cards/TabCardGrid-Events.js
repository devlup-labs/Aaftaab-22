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
      imageSrc:
        "https://images.unsplash.com/photo-1598594661945-d7e693e4522c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
    }
  ];

  // Shuffle array
  return cards;
};

const getDay2Cards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2NyaXB0JTIwdG8lMjB2aWRlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      imageSrc:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGViYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      imageSrc:
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY3Vzc2lvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      imageSrc:
        "https://images.unsplash.com/photo-1529251333259-d36cccaf22ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ldHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      imageSrc:
        "https://t4.ftcdn.net/jpg/01/43/63/85/360_F_143638577_5v5T16Ju2yTrQO9aOsfspHA3SV7xQYkM.jpg",
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
      imageSrc:
        "https://images.unsplash.com/photo-1605429201125-37e867327609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmRzJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
    }
  ];

  return cards;
};

const getDay3Cards = () => {
  const cards = [
    {
      imageSrc:
        "data:image/jpeg;base64,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",
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
        "https://media.istockphoto.com/photos/man-in-virtual-reality-headset-or-vr-eyeglasses-future-technology-picture-id1366007490?b=1&k=20&m=1366007490&s=170667a&w=0&h=TWviqjGU4RVKZLoVCkvwhLa-pGa0DWvBYbIe17fkRCE=",
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
      imageSrc:
        "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YWN0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      imageSrc:
        "https://www.masslive.com/resizer/m176uZZphwNxHcRNQBtkSe3smO0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M4SOSTKFBBELJNJQOQHEDGF4UU.jpg",
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
      imageSrc:
        "https://wallpaperaccess.com/full/6793384.jpg",
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
        "https://theeventsgroup.co.nz/wp-content/uploads/2017/09/Lets-Get-Quizical-Logo-Square-3-1024x1024.jpg",
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
