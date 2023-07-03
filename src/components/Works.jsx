import React from 'react'
import {Tilt} from 'react-tilt'

import {motion } from 'framer-motion'

import {styles} from '../style'

import github  from '../assets/github.png'

import CCM from '../assets/CCM.png';

import emart from '../assets/emart.png'

import compsa from '../assets/compsa.png'

import {fadeIn , textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'

const projects = [
  {
    name: "Carbon Credit Marketplace",
    description:
      "Greenhouse gas emission is one of the most common and slowly fatal effects.To reduce carbon emissions and take the earth to net zero carbon emissions we have created a sustainable and transparent domestic carbon credit marketplace.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name:"solidity",
        color:"orange-text-gradient"
      }
    ],
    image: CCM,
    source_code_link: "https://github.com/IDY12345/Hack36",
  },
  {
    name: "E-Mart",
    description:
      "Web application that enables users to search for latest products that have come to the Market and buy them at a button's click and a get a free home delivery.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: emart,
    source_code_link: "https://github.com/IDY12345/E-Mart",
  },
  {
    name: "CompSA",
    description:
      "A Student Association Website of my Club where I am jr. web developer.I have developed many of the components of this big website . The home page you see is designed by me and many of the components in the student panel are designed by me.",
    tags: [
      {
        name: "angularjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: compsa,
    source_code_link: "https://compsa.co.in/Home",
  },
];

const ProjectCard=({index,name,description,tags,image,source_code_link})=>
{
  return(
    <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
      <Tilt
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover '>
              <div 
                onClick={()=>window.open(source_code_link,"_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
              >
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain' />
              </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag)=>
            (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>My Work</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <div className='w-full flex'>
       <motion.p variants={fadeIn("","",0.1,1)} className='mt-3 text-secondary text-[17px] max-w-31 leading-[30px]'>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
       </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project,index )=>
      (
        <ProjectCard key ={`project-${index}`}
        index={index}
        {...project} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works,"")