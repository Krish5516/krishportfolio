import virtualquiz from "../../../../public/Images/virtualquiz.jpg";
import officeflow from "../../../../public/Images/companydashboard.jpg";
import ELearning from "../../../../public/Images/elearning.jpg";
import enotebook from "../../../../public/Images/enotebook.png";
import bookeasy from "../../../../public/Images/bookeasy.png";
import photo from "../../../../public/Images/photography.png";
import portfolio from "../../../../public/Images/portfolio.jpg";
import weather from "../../../../public/Images/weather.png";
import rupee from "../../../../public/Images/MyRupee.png";
import techy from "../../../../public/Images/techystar.png";
import resumifyX from "../../../../public/Images/resumifyX.png";
import retroUI from "../../../../public/Images/retroUI.png";
import saarthi from "../../../../public/Images/saarthi-engstudy.png";



const data = {
  // Best Projects
  bestProjects: [
    {
      id: 1,
      title: "Virtual Quiz",
      description:
        "A Python–OpenCV virtual MCQ quiz game that detects hand gestures in real time for interactive answering and instant feedback.",
      url: "https://drive.google.com/file/d/1Ih9bT32S9heB4-D-5jKn-z3j8VqUvis0/view?usp=sharing",
      imgSrc: virtualquiz,
      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "NodeJS",
          image: "",
        },

        {
          id: 3,
          name: "ExpressJS",
          image: "",
        },

        {
          id: 4,
          name: "MongoDB",
          image: "",
        },
      ],
    },

    {
      id: 2,
      title: "Office Flow",
      description:
        "A PHP CodeIgniter–based employee management system that tracks work sessions, manages tasks, and generates detailed performance reports.",
      url: "https://employeetracking.42web.io/",
      imgSrc: officeflow,

      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "NodeJS",
          image: "",
        },

        {
          id: 3,
          name: "ExpressJS",
          image: "",
        },

        {
          id: 4,
          name: "MongoDB",
          image: "",
        },
      ],
    },

    {
      id: 3,
      title: "ELearning",
      description:
        "E-Learning platform where students purchase courses and watch teacher-uploaded prerecorded lectures through a secure, user-friendly interface using PHP.",
      url: "https://elearningkrish.42web.io/",
      imgSrc: ELearning,

      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "NodeJS",
          image: "",
        },

        {
          id: 3,
          name: "ExpressJS",
          image: "",
        },

        {
          id: 4,
          name: "MongoDB",
          image: "",
        },
      ],
    },

    {
      id: 4,
      title: "eNoteBook",
      description:
        "The Platform where you can Create, Read, Update & Delete Your Personal Note.",
      url: "https://e-note-front.vercel.app/",
      imgSrc: enotebook,

      skills: [
        {
          id: 1,
          name: "ReactJS",
          image: "",
        },

        {
          id: 2,
          name: "NodeJS",
          image: "",
        },

        {
          id: 3,
          name: "ExpressJS",
          image: "",
        },

        {
          id: 4,
          name: "MongoDB",
          image: "",
        },
      ],
    },

    {
      id: 5,
      title: "BookEasy",
      description:
        "Designed a ticket booking platform supporting travel and events, including admin panel, payments, and reports.",
      url: "https://eticket.42web.io/",
      imgSrc: bookeasy,
    },

    
    {
      id: 6,
      title: "Phtography Management",
      description:
        "A photography studio management system enabling photographers to manage bookings, clients, quotations, tasks, invoices, services, packages, and business revenue through a centralized dashboard.",
      url: "https://krishphotography.42web.io/",
      imgSrc: photo,
    },

  ],


  // All Projects
  otherProjects: [
    {
      id: 11,
      title: "CryptoVerse",
      description:
        "The Platform where you can see all the details about digital currencies and explore it.",
      url: "https://crypto-verse07.netlify.app/",
      imgSrc: crypto,
    },

    {
      id: 7,
      title: "Portfolio",
      description: "All About Me at one place. Made using Chakra UI.",
      url: "https://omreactport.netlify.app/",
      imgSrc: portfolio,
    },

    {
      id: 8,
      title: "Weather App",
      description: "To learn the concepts of API and axios.",
      url: "https://mytemperature.netlify.app/",
      imgSrc: weather,
    },

    {
      id: 9,
      title: "MyRupee.com",
      description: "Firebase Application with ReactJS.",
      url: "https://rupee-website.web.app/",
      imgSrc: rupee,
    },

    {
      id: 10,
      title: "TechyStar",
      description: "Small ReactJS Project to practice the Concepts.",
      url: "https://reactservice.netlify.app/",
      imgSrc: techy,
    },
  ],
};

export default data;
