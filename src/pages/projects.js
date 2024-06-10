import Head from 'next/head'
import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from "framer-motion"
import { Github } from '../components/Icons'
import project1 from "../../public/OIP.jpeg"
import mqtt from "../../public/MQTT.png"
import ecom from "../../public/ecom.png"
import tweet from "../../public/tweet.png"
import spotify from "../../public/spotify.png"
import weather from "../../public/weather.jpeg"
import stock from "../../public/stock.png"
import TransitionEffect from '../components/TransitionEffect'
const FeaturedProject=({type, title, summary, img, link, github})=>{
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl mt-10 p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:l-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                <Link href={github} target="_blank" className='w-10'><Github /></Link>
                <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project=({title, type, img, link, github})=>{
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative h-[80vh] md:h-[60vh] sm:h-auto dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]'/>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>Visit</Link>
                <Link href={github} target="_blank" className='w-8 md:w-6'><Github /></Link>
                </div>
            </div>
        </article>
    )
}

function projects() {
  return (
    <>
       <Head>
            <title>Avichal | Projects Page</title>
            <meta name ="description" content="About page"/>
        </Head>
        <TransitionEffect/>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className="pt-16">
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject title={"Payroll Management System"} 
                        summary={"Tech Stack- Python, HTML, CSS, Django Framework. Built a payroll management system that converts the manual system of maintaining salary processing records at a company using computers. I utilized the power of Django Framework for processing requests and carrying out efficient Database operations."}
                        img={project1}
                        type="Featured Project"
                        link={"https://github.com/Stormbreaker999/payroll-management-system"}
                        github={"https://github.com/Stormbreaker999/payroll-management-system"}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={"Spotify Clone"} 
                        img={spotify}
                        type="Project"
                        link={"https://spotify-clone-adjain.netlify.app/"}
                        github={"https://github.com/Stormbreaker999/Spotify-clone"} />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={"Tweet Sentiment Analysis"} 
                        img={tweet}
                        type="Project"
                        link={"https://github.com/Stormbreaker999/Tweet-Sentiment-Analysis"}
                        github={"https://github.com/Stormbreaker999/Tweet-Sentiment-Analysis"} />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject title={"ECOM-APP (AVI-COM)"} 
                        summary={"Tech Stack- React, Material UI, Firebase, Redux, Vite. Built a responsive and interactive web interface simulating all the functionalities E-commerce website using React."}
                        img={ecom}
                        type="Featured Project"
                        link={"https://avicom.netlify.app/"}
                        github={"https://github.com/Stormbreaker999/Avicom"}/>
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={"Weather App-Storm Mapper"} 
                        img={weather}
                        type="Project"
                        link={"https://app.netlify.com/sites/elaborate-travesseiro-6a9453/overview"}
                        github={"https://app.netlify.com/sites/elaborate-travesseiro-6a9453/overview"} />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project title={"Stock Market Prediction"} 
                        img={stock}
                        type="Project"
                        link={"https://github.com/Stormbreaker999/StockMarketPrediction"}
                        github={"https://github.com/Stormbreaker999/StockMarketPrediction"} />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject title={"Implementation of MQTT Protocol"} 
                        img={mqtt}
                        summary={"Message Queue Telemetry Transport (MQTT) Protocol .Implemented Publish Subscribe model to implement MQTT Protocol from scratch using C programming utilizing the concepts of sockets and TCP services."}
                        type="Featured Project"
                        link={"https://github.com/Stormbreaker999/MQTT"}
                        github={"https://github.com/Stormbreaker999/MQTT"}/>
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects