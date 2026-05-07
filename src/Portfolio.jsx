import React, { useRef } from 'react';
import ShinyText from "./components/ShinyText.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from "./components/RotatingText.jsx";
import CardSwap,{Card} from "./components/CardSwap.jsx";
import InfiniteMenu from "./components/InfiniteMenu.jsx";
import FlowingMenu from "./components/FlowingMenu.jsx";
import Footer from "./Footer/Footer.jsx"

export default function Portfolio() {
    const container = useRef();
    const Prepxl = [
        "AI Mock Interviews: Provides simulated interview environments with AI-driven scoring and feedback to help users practice their responses.",
        "Resume & Profile Analysis: Includes an ATS Rater to optimize resumes for applicant tracking systems and a strategic review tool for LinkedIn profiles to improve professional branding.",
        "Career Management Tools: Features a centralized hub for tracking job applications, deadlines, and follow-ups.",
        "Document Creation: Automated tools for generating professional resumes and compelling cover letters tailored to specific job descriptions.",
        "Candidate Insights: Offers data-driven feedback on a user's readiness and identifies skill gaps through a curated library of learning resources."
    ];

    const items = [
        { image: 'https://capriagos.com/hero_image.avif', link: 'https://google.com/' },
        { image: 'https://capriagos.com/LOGO-1.png', link: 'https://capriagos.com/' },
        { image: 'https://images.pexels.com/photos/19061782/pexels-photo-19061782.jpeg?_gl=1*yp7zjj*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODcyNTckajM1JGwwJGgw', link: 'https://capriagos.com/' },
        { image: 'https://images.pexels.com/photos/4049148/pexels-photo-4049148.jpeg?_gl=1*nl46ed*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODczNDAkajIwJGwwJGgw', link: 'https://capriagos.com/' }
    ];

    const demoItems = [
        { link: 'javascript:void(0)', text: 'FRONTEND', image: 'Frontend.png' },
        { link: 'javascript:void(0)', text: 'BACKEND', image: 'Backend.png' },
        { link: 'javascript:void(0)', text: 'DATABASE', image: 'Database.jpg' },
        { link: 'javascript:void(0)', text: 'DEPLOYMENT', image: 'VersionControl.png' }
    ];

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from(".animate-text", {
            x: -150,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.3
        });
    }, { scope: container });

    return (
        <div ref={container} className="min-h-screen w-full md:w-full lg:w-full bg-black">

            {/* ── Hero Section ── */}
            <div className="flex flex-col md:flex-row w-full bg-gradient-to-b from-red-600 to-black">

                {/* Text block */}
                <div className="flex flex-col justify-center items-start min-h-screen
                                px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24
                                w-full md:w-1/2 lg:w-3/5">
                    <ShinyText
                        className="animate-text font-serif font-extrabold
                                   text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
                        text="Deepanshu"
                        speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                    />
                    <br />
                    <ShinyText
                        className="animate-text font-serif font-extrabold
                                   text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
                        text="Sharma"
                        speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                    />
                    <br />
                    <ShinyText
                        className="animate-text font-serif font-medium
                                   text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                        text="Not your ordinary developer"
                        speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                    />
                </div>

                {/* Hero image — hidden on small, visible md+ */}
                <div className="hidden md:flex justify-center items-center
                                w-1/2 lg:w-2/5 px-6 lg:px-10">
                    <img
                        src="paws.png"
                        alt="Decorative"
                        className="opacity-75
                                   w-64 h-64 md:w-80 md:h-80 lg:w-[26rem] lg:h-[26rem]
                                   xl:w-[32rem] xl:h-[32rem] 2xl:w-[40rem] 2xl:h-[40rem]
                                   object-contain"
                    />
                </div>
            </div>

            {/* ── Skills Section ── */}
            <div className="flex flex-col gap-3">
                <div className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-10">
                    <ShinyText
                        className="font-serif font-bold
                                   text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                        text="Skills"
                        speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                    />
                </div>
                <div className="w-full bg-white">
                    <div className="relative" style={{ height: '600px' }}>
                        <FlowingMenu
                            items={demoItems}
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

            {/* ── "Proof That I Can" Section ── */}
            <div className="flex flex-col md:flex-row md:items-center gap-x-4 lg:gap-x-6 mt-12 md:mt-16 lg:mt-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex-wrap gap-y-4">

                <ShinyText
                    className="font-serif font-bold
                               text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
                    text="Proof That I Can"
                    speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                />
                <RotatingText
                    texts={['Build', 'Code', 'Design', 'Deploy']}
                    mainClassName="px-3 md:px-4 bg-red-500 text-black overflow-hidden py-1 md:py-2
                                  justify-center rounded-2xl font-serif font-bold
                                  text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
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


            {/* ── PrepXL Section ── */}
            <div className="bg-black mt-12 md:mt-16 lg:mt-20
                px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">

                {/* Heading */}
                <ShinyText
                    className="font-serif font-bold mb-8
                   text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                    text="PrepXL - AI Career Coach"
                    speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                />

                {/* Two-column layout on lg+ */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Text column */}
                    <div>
            <span className="text-white font-serif font-medium
                             text-sm md:text-base lg:text-lg">
                PrepXL.app is an AI-driven career preparation platform designed to
                streamline the journey from job seeking to placement. It utilizes
                artificial intelligence to provide personalized tools for candidates
                looking to optimize their professional presence and interview performance.
            </span>
                        <ul className="text-white mt-6 flex flex-col gap-y-3 font-serif
                            text-sm md:text-base lg:text-lg">
                            {Prepxl.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Card swap column */}
                    <div className="relative bg-black rounded-xl h-72 md:h-[600px] lg:h-[500px] xl:h-[600px] flex items-center justify-center overflow-visible  mb-10 " >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:ml-50 md:mt-50 md:h-20 mt-10 " >
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={5000}
                                pauseOnHover={false}
                            >
                                <Card>
                                    <img src="prepxl-1.png" alt="PrepXL screenshot 1"
                                         className="h-full w-full object-contain bg-white" />
                                </Card>
                                <Card>
                                    <img src="prepxl-2.png" alt="PrepXL screenshot 2"
                                         className="h-full w-full object-contain bg-white" />
                                </Card>
                                <Card>
                                    <img src="prepxl-3.png" alt="PrepXL screenshot 3"
                                         className="h-full w-full object-contain bg-white" />
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </div>
            {/* ── CAPRIAGOS Section ── */}

            <div className="mt-12 md:mt-20 lg:mt-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 ">


                {/* Headings */}
                <ShinyText
                    className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl"

                    text="CAPRIAGOS"
                    speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                />
                <ShinyText
                    className="font-serif font-bold mb-8 text-xl md:text-2xl lg:text-3xl xl:text-4xl"

                    text="Pre-loved with purpose. Sustainable fashion for conscious consumers."
                    speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
                />

                {/* Infinite Menu */}
                <div className="relative text-white h-72 md:h-96 lg:h-[500px] xl:h-[600px]">

                    <InfiniteMenu items={items} scale={1} />
                </div>
            </div>

            <Footer />
        </div>
    );
}
