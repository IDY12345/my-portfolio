import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css' ;

import {styles} from '../style'

// import starbucks from "../assets/company/starbucks.png";
// import tesla from "../assets/company/tesla.png";
// import meta from "../assets/company/meta.png";
// import WebD from "../assets/WebD.png";
import next from "../assets/next-js.svg"
import reactjs from "../assets/tech/reactjs.png";
import CompSA1 from '../assets/CompSA1.png'
import { SectionWrapper } from '../hoc'

import { textVariant } from '../utils/motion';
const experiences = [
  {
    title: "React.js Developer",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I have been in a developer of react js more than a year .",
      "I have developed front-end for many of web application which I have worked on for various hackathons.",
    ],
  },
  {
    title: "React Native Developer",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
        "I have Recently Started Working on Rect-Native and started developing small apps.",
        "I am still in learning process."
    ],
  },
  {
    title: "Next JS Developer",
    icon: next,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "I have been Developing a website for coders club.",
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Angular JS Developer",
    icon: CompSA1,
    iconBg: "#E6DEDD",
    date: "July 2022 - Present",
    points: [
      "I have developed various components for my club's websites.",
      "Developing and maintaining web applications using Angular js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I worked as a junior web developer for my club CompSA."
    ],
  },
];
const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>What I have done so far</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
    </motion.div>

    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

const ExperienceCard=({experience})=>(

    <VerticalTimelineElement 
    contentStyle={{background:'#1d1836', color:'#fff'}}
    contentArrowStyle={{borderRight:'7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg}}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon}
       alt={experience.company_name} 
       className='w-[60%] h-[60%] object-contain'
       />
    </div>}
    >
      <div>
      <h3 className='text-white text-[24px] font-bold '>
        {experience.title}
      </h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin:0}}></p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point,index)=>(
            <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
                {point}
            </li>
          ))
        }

      </ul>

    </VerticalTimelineElement>
)

export default SectionWrapper(Experience,"work")