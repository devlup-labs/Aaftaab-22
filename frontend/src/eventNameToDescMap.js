import openmic from './images/flagship_events/Open_mic.jpg';
import areyourwordsworth from "./images/Day 2/Are_your_words_worth.jpg";
import englishdebate from "./images/Day 2/English_Debate.jpg";
import hindidebate from "./images/Day 2/HIndi_Debate.jpg";
import noobquiz from "./images/Day 2/Noob_Quiz.jpg";
import scriptwriting from "./images/Day 2/Script_Writing_Workshop.jpg";
import versecomeverseserve from "./images/Day 2/Verse_come_verse_serve.jpg";
import justaminutespeech from "./images/Day 3/Just_a_minute_speech.jpg";
import letsgetquizzical from "./images/Day 3/Let's_get_quizical.jpg";
import mythologyquiz from "./images/Day 3/Mythology_Quiz.jpg";
import nautankisaala from "./images/Day 3/Nautanki_Saala.jpg";
import whatiftheymet from "./images/Day 3/What_if_they_met.jpg";
import TreasurehuntImg from "./images/flagship_events/Treasure Hunt.jpg";

export const eventNameToDescMap = {
  video_making_workshop: {
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
  creative_writing_workshop: {
    imageSrc:
      "https://lettering-daily.b-cdn.net/wp-content/uploads/2018/09/me-doing-calligraphy-2.jpg",
    title: "Comic Writing Workshop",
    date: "29 Oct. 2022",
    timing: "10:00 AM - 11:30 AM",
    description: `Have you always had a “Creative Knack” but felt like you were unable to express yourself? This is your chance! Join us in the Comic Writing Workshop organized by Tinkle Studios and learn how to pen down your thoughts in a lucrative way so as to do justice to your imagination. `,
    // price: "₹50",
    registrableEvent: true,
    minTeamSize: 1,
    maxTeamSize: 1,
    isFlagship: false,
    prize: "",
    ruleBookLink: "",
    url: "#"
  },
  acting_workshop: {
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
  prompt_poetry: {
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
  noob_quiz: {
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
  word_games: {
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
  treasure_hunt: {
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
  just_a_minute_speech: {
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
  hindi_debate: {
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
  english_debate: {
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
  character_reenactment:{
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
  mythology_quiz: {
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
  mela_quiz: {
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
  open_mic: {
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
};
