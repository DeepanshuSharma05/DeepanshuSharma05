import React, { useRef } from 'react';
import ShinyText from "./components/ShinyText.jsx";
import ScrollVelocity from "./components/ScrollVelocity.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from "./components/RotatingText.jsx";
import CardSwap,{Card} from "./components/CardSwap.jsx";
import InfiniteMenu from "./components/InfiniteMenu.jsx";
import FlowingMenu from "./components/FlowingMenu.jsx";
import Footer from "./Footer/Footer.jsx"

export default function Portfolio() {
    const container = useRef();
    const Prepxl =[ "AI Mock Interviews: Provides simulated interview environments with AI-driven scoring and feedback to help users practice their responses.",
                            "Resume & Profile Analysis: Includes an ATS Rater to optimize resumes for applicant tracking systems and a strategic review tool for LinkedIn profiles to improve professional branding.",
                            "Career Management Tools: Features a centralized hub for tracking job applications, deadlines, and follow-ups.",
                            "Document Creation: Automated tools for generating professional resumes and compelling cover letters tailored to specific job descriptions.",
                            "Candidate Insights: Offers data-driven feedback on a user's readiness and identifies skill gaps through a curated library of learning resources."]

    const items = [
        {
            image: 'https://capriagos.com/hero_image.avif',
            link: 'https://google.com/',


        },
        {
            image: 'https://capriagos.com/LOGO-1.png',
            link: 'https://capriagos.com/',


        },
        {
            image: 'https://images.pexels.com/photos/19061782/pexels-photo-19061782.jpeg?_gl=1*yp7zjj*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODcyNTckajM1JGwwJGgw',
            link: 'https://capriagos.com/',


        },
        {
            image: 'https://images.pexels.com/photos/4049148/pexels-photo-4049148.jpeg?_gl=1*nl46ed*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODczNDAkajIwJGwwJGgw',
            link: 'https://capriagos.com/',


        }
    ];
    const demoItems = [
        { link: '#', text: 'FRONTEND', image: 'Frontend.png ', },
        { link: '#', text: 'BACKEND', image: 'Backend.png' },
        { link: '#', text: 'MongoDB', image: 'Database.jpg' },
        { link: '#', text: 'Express.JS', image: 'VersionControl.png' }
    ];
    useGSAP(() => {
        const tl = gsap.timeline();

        // This targets all elements with the 'animate-text' class
        tl.from(".animate-text", {
            x: -150,         // Slide from leftcd p
            opacity: 0,      // Start invisible
            duration: 1.2,
            stagger: 0.2,    // Delay between each line (0.2s)
            ease: "power4.out",
            delay: 0.3       // Initial wait before starting
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen bg-black ">
            {/* Hero Section */}
            <div className="flex flex-row bg-gradient-to-b from-red-600 to-black">
                <div className="flex flex-col justify-center items-start h-screen mx-20">
                    <ShinyText
                        className="animate-text font-serif font-extrabold text-9xl"
                        text="Deepanshu"
                        speed={2}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                    />
                    <br/>
                    <ShinyText
                        className="animate-text text-9xl font-extrabold font-serif"
                        text="Sharma"
                        speed={2}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                    />
                    <br/>
                    <ShinyText
                        className="animate-text text-4xl font-medium font-serif"
                        text="Not your ordinary developer"
                        speed={2}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                    />
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src="paws.png"
                        alt="Image"
                        className="h-200 w-200 opacity-75"
                    />
                </div>
            </div>
            <div className="grid col-span-1  gap-3">
                <div className="col-span-1 mx-20 ">
                    <ShinyText
                        className="font-serif font-bold text-8xl"
                        text="Sklills"
                        speed={2}
                        color="#b5b5b5"
                        shineColor="#ffffff"
                        spread={120}
                        direction="left"
                    />
               </div>
                <div className="col-span-1 bg-white ">
                    <div style={{ height: '600px', position: 'relative' }}>
                        <FlowingMenu items={demoItems}
                                     speed={15}
                                     textColor="#ffffff"
                                     bgColor="black"
                                     marqueeBgColor="#F4F3F8"
                                     marqueeTextColor="#120F17"
                                     borderColor="#ffffff"
                        />
                    </div>
                </div>

            </div>


            <div className="flex flex-wrap items-center gap-x-6 mt-20 mx-20">
                <ShinyText
                    className="font-serif font-bold text-8xl"
                    text="Proof That I Can"
                    speed={2}
                    color="#b5b5b5"
                    shineColor="#ffffff"
                    spread={120}
                    direction="left"
                />

                <RotatingText
                    texts={['Build', 'Code', 'Design', 'Deploy']}
                    mainClassName="text-8xl px-4 bg-red-500 text-black overflow-hidden py-2 justify-center rounded-2xl font-serif font-bold"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                    splitBy="characters"
                    auto
                    loop
                />
            </div>
            <div className="grid bg-black grid-cols-2 gap-3">
                    <div className=" col-span-2 mx-20 mt-20">
                        <ShinyText
                            className="font-serif font-bold text-6xl mb-10 "
                            text="PrepXL - AI Career Coach"
                            speed={2}
                            color="#b5b5b5"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                        />
                    </div>
                    <div className=" pl-20">
                        <span className="text-white font-serif font-medium ">
                            PrepXL.app is an AI-driven career preparation platform designed to streamline the journey from job seeking to placement.
                            It utilizes artificial intelligence to provide personalized tools for candidates looking to optimize their professional presence and interview performance.

                        </span>
                        <ul className="text-white my-10 flex flex-col gap-y-4 font-serif">
                            {Prepxl.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                <div className="px-10 py-12">
                    <div className="h-[600px] relative bg-black rounded-xl">

                        <div className="absolute pt-80 pl-300 -translate-x-1/2">
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={5000}
                                pauseOnHover={false}
                            >
                                <Card>
                                    <img
                                     src="prepxl-1.png"
                                     alt="Image"
                                     className="h-full w-full object-contain bg-white  "
                                    />
                                </Card>
                                <Card>
                                    <img
                                        src="prepxl-2.png"
                                        alt="Image"
                                        className="h-full w-full object-contain bg-white "
                                    />
                                </Card>
                                <Card>
                                    <img
                                        src="prepxl-3.png"
                                        alt="Image"
                                        className="h-full w-full object-contain bg-white "
                                    />
                                </Card>
                            </CardSwap>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-3  mx-20 mt-20">
                <div className="col-span-1 ">
                    <div className="flex flex-col">
                        <ShinyText
                            className="font-serif font-bold text-6xl  "
                            text="CAPRIAGOS"
                            speed={2}
                            color="#b5b5b5"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                        />
                        <ShinyText
                            className="font-serif font-bold text-4xl mb-10 "
                            text=" Pre-loved with purpose. Sustainable fashion for conscious consumers."
                            speed={2}
                            color="#b5b5b5"
                            shineColor="#ffffff"
                            spread={120}
                            direction="left"
                        />
                    </div>
                </div>
                <div className="col-span-1 ">
                    <div className="h-[600px] relative text-white ">
                        <InfiniteMenu items={items}
                                      scale={1}
                        />
                    </div>
                </div>

            </div>
        <Footer />

        </div>
    );
}