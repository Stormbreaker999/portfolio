import Head from 'next/head'
import React, {useEffect, useRef} from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'
//import profilePic from "../../public/developer-pic-2.jpg"
import profilePic from "../../public/profile.jpg"
import { LinkArrow } from '../components/Icons'
import Link from 'next/link'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Education from '../components/Education'
import TransitionEffect from '../components/TransitionEffect'


const AnimatedTopic=({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue, {duration:3000});
    const isInView=useInView(ref, {once:true});
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue])
    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0);
            }
        })
    },[springValue,value])
    return <span ref={ref}>

    </span>
}

function about() {
  return (
    <>
        <Head>
            <title>Avichal | About Page</title>
            <meta name ="description" content="About page"/>
        </Head>
        <TransitionEffect/>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-10'>
            <AnimatedText text={'Passion Fuels Purpose!'} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Who am I?</h2>
                    <p className='text-[1.05rem]'> Hi, I'm Avichal, a web developer, UI/UX designer, ML Aspirant and DSA Enthusiast with a passion for creating beautiful, functional, 
                        and user-centered digital experiences. I am always looking for new and innovative ways to bring my visions to reality.
                        I have pretty good command in core fundamentals and encompasses very good problem solving skills.</p>

                    <p className=' my-4 text-[1.05rem]'>I believe that design is about more than just making things look pretty. It's about solving problems and 
                        creating intuitive, enjoyable experiences for users.</p>

                    <p className='text-[1.05rem]'> Whether I'm working on a website or 
                        other software product, I bring my commitment to design excellence and user-centered thinking to 
                        every project I work on. I look forward to the opportunity to bring my skills and passion to the next projects.</p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8' >
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'/>
                    <Image src={profilePic} alt="Avichal" className='w-full h-auto rounded-2xl'/>
                </div>
                <div className='col-span-2 flex gap-2 flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedTopic value={7} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>GitHub Repositories</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span  className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedTopic value={5}/>+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                    </div>
                    <div className='flex items-center justify-center'>
                    <div className='flex flex-col '>
                        <span  className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            AIR 57
                        </span>
                        <h2 className='text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>GATE CS/IT 2024</h2>

                    </div>
                    </div>
                    <div className='flex items-center justify-center'>
                    <div className='flex flex-col '>
                        <span  className='inline-block text-6xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            AIR 170
                        </span>
                        <h2 className='text-xl font-medium text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>GATE DA 2024</h2>

                    </div>
                    </div>
                    
                </div>
            </div>
            <Skills/>
            <Experience/>
            <Education/>
            </Layout>
        </main>
    </>
  )
}

export default about