import React, { Component, useEffect, useState,useContext } from "react";
import tw from "twin.macro";
import { backendUrl } from "backendUrl";
import AnimationRevealPage from "helpers/AnimationRevealPage";

import Header from "components/headers/light.js";
import Footer from "components/footers/Home-Footer.js"
import EventDetailSection from "components/blogs/PopularAndRecentBlogPosts-Dashboard.js"
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl as ContentWithPaddingXlBase } from "components/misc/Layouts.js";

import { userContext } from "App";
import "./dashboard.css"

const HeaderRow = tw.div`flex justify-between items-start flex-col`;
const PrimaryButton = tw(PrimaryButtonBase)`bg-secondary-500 hocus:bg-secondary-700 mt-8 md:mt-10 text-sm ml-auto`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const HeadingText = tw(SectionHeading)``;
const ContentWithPaddingXl = tw(ContentWithPaddingXlBase)`py-6 lg:py-10`

function Dashboard() {
  const [userName, setUserName] = useState("");
  const [events, setEvents] = useState([]);
  const [passId, setPassId] = useState("");

  useEffect(async () => {
    const token = localStorage.getItem("token");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    };
    await fetch(`${backendUrl}/api/get_all_events_for_an_user/`, requestOptions)
        .then((response) =>{
          if(response.status==200){
            return response.json();
          }
          else{
            alert("please login properly");
            window.location.href = "/";
            return {};
          }
        })
        .then((data) => {
          // console.log(data.event_list);
          setUserName(data.user_name);
          setEvents(data.event_list);
        })

        .catch((error)=>{
          console.log(error);
        })
    }, []);


    const logoutButtonPressed=()=>{
      localStorage.removeItem("token");
      window.location.href = "/";
    }

  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <ContentWithPaddingXl>          
          <HeaderRow>
            <HeadingText>Hi <HighlightedText>{`${userName}!`}</HighlightedText></HeadingText>
            <PrimaryButton onClick={logoutButtonPressed}>
              Logout
            </PrimaryButton>
          </HeaderRow>
        </ContentWithPaddingXl>
      </Container>

      <EventDetailSection eventsRegistered_Name={events}/>
      
      <Footer />
    </AnimationRevealPage>
  );
}

export default Dashboard;
