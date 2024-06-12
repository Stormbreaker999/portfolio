import React from 'react'
import {motion} from 'framer-motion'

const Skill=({name,x,y,className=""})=>{
    return(
        <motion.div className={`flex item-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dak xs:dark:text-light xs:font-bold ${className}`}
        whileHover={{scale:1.1}}
        initial={{x:0, y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        viewport={{once:true}}>
            {name}
        </motion.div>
    )
}
const PhoneSkill=({name, progress})=>{
  return(
    <motion.div className='flex item-center justify-center dark:bg-light bg-dark col-span-6'
    animate={{scale:1.05}} transition={{duration:0.5}}>
      <h2 className='text-xl text-primary dark:text-primaryDark '>{name}</h2>
      <div className={`w-[${progress}%] px-2 h-[2px] bg-slate-500`}/>
    </motion.div>
  )
}
function Skills() {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 '>Skills</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark sm:hidden'>
        <Skill name="Web" x="0" w="0"/>
        <Skill name="CSS" x="-5vw" y="-13vw"/>
        <Skill name="HTML" x="-15vw" y="2vw"/>
        <Skill name="React" x="-10vw" y="10vw"/>
        <Skill name="Python" x="17vw" y="-15vw"/>
        <Skill name="C/C++" x="15vw" y="-5vw"/>
        <Skill name="NextJS" x="-25vw" y="-5vw" className={"sm:hidden"}/>
        <Skill name="Express.js" x="-20vw" y="-12vw"/>
        <Skill name="MongoDB" x="8vw" y="10vw"/>
        <Skill name="MySQL" x="8vw" y="-10vw"/>
        <Skill name="TailwindCSS" x="-23vw" y="10vw" className={"sm:hidden"}/>
        <Skill name="Networking" x="-9vw" y="-22vw"/>
        <Skill name="DSA" x="6vw" y="-22vw"/>
        <Skill name="JavaScript" x="-13vw" y="-5vw"/>
        <Skill name="Java" x="15vw" y="3vw"/>
        <Skill name="Django" x="0vw" y="20vw"/>
        <Skill name="Machine Learning" x="-18vw" y="18vw" className={"sm:hidden"}/>
        <Skill name="NLP" x="15vw" y="17vw"/>
        <Skill name="Data Science" x="25vw" y="8vw" className={"sm:hidden"}/>
        <Skill name="Assembly Language" x="27vw" y="-1.5vw" className={"sm:hidden"}/>
    </div>
    <div className='w-full grid-cols-12 h-screen relative items-center justify-center hidden sm:grid'>
    <PhoneSkill name="HTML" progress="100"/>
    </div>
    </>
  )
}

export default Skills;