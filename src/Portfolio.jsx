// import React, { useRef,useState,useEffect  } from 'react';
// import ShinyText from "./components/ShinyText.jsx";
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import RotatingText from "./components/RotatingText.jsx";
// import CardSwap,{Card} from "./components/CardSwap.jsx";
// import InfiniteMenu from "./components/InfiniteMenu.jsx";
// import FlowingMenu from "./components/FlowingMenu.jsx";
// import Footer from "./Footer/Footer.jsx"
// import { motion, useScroll, useTransform } from 'framer-motion';
//
//
// export default function Portfolio() {
//     const container = useRef();
//     const Prepxl = [
//         "AI Mock Interviews: Provides simulated interview environments with AI-driven scoring and feedback to help users practice their responses.",
//         "Resume & Profile Analysis: Includes an ATS Rater to optimize resumes for applicant tracking systems and a strategic review tool for LinkedIn profiles to improve professional branding.",
//         "Career Management Tools: Features a centralized hub for tracking job applications, deadlines, and follow-ups.",
//         "Document Creation: Automated tools for generating professional resumes and compelling cover letters tailored to specific job descriptions.",
//         "Candidate Insights: Offers data-driven feedback on a user's readiness and identifies skill gaps through a curated library of learning resources."
//     ];
//
//     const items = [
//         { image: 'https://capriagos.com/hero_image.avif', link: 'https://google.com/' },
//         { image: 'https://capriagos.com/LOGO-1.png', link: 'https://capriagos.com/' },
//         { image: 'https://images.pexels.com/photos/19061782/pexels-photo-19061782.jpeg?_gl=1*yp7zjj*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODcyNTckajM1JGwwJGgw', link: 'https://capriagos.com/' },
//         { image: 'https://images.pexels.com/photos/4049148/pexels-photo-4049148.jpeg?_gl=1*nl46ed*_ga*MTEyNTk5OTEzLjE3Njc5Njk4NTU.*_ga_8JE65Q40S6*czE3NzgwODcyMzIkbzYkZzEkdDE3NzgwODczNDAkajIwJGwwJGgw', link: 'https://capriagos.com/' }
//     ];
//
//     const demoItems = [
//         { link: 'javascript:void(0)', text: 'FRONTEND', image: 'Frontend.png' },
//         { link: 'javascript:void(0)', text: 'BACKEND', image: 'Backend.png' },
//         { link: 'javascript:void(0)', text: 'MongoDB', image: 'Database.jpg' },
//         { link: 'javascript:void(0)', text: 'Express.JS', image: 'VersionControl.png' }
//     ];
//
//     useGSAP(() => {
//         const tl = gsap.timeline();
//         tl.from(".animate-text", {
//             x: -150,
//             opacity: 0,
//             duration: 1.2,
//             stagger: 0.2,
//             ease: "power4.out",
//             delay: 0.3
//         });
//     }, { scope: container });
//
//     const trackRef = useRef<HTMLDivElement>(null);
//     const [scrollRange, setScrollRange] = useState(0);
//
//     useEffect(() => {
//         if (!trackRef.current) return;
//
//         const calculateScroll = () => {
//             // Total width of the moving container minus the visible screen width
//             const totalWidth = trackRef.current.scrollWidth;
//             const visibleWidth = window.innerWidth;
//             setScrollRange(totalWidth - visibleWidth);
//         };
//
//         calculateScroll();
//         window.addEventListener('resize', calculateScroll);
//         return () => window.removeEventListener('resize', calculateScroll);
//     }, []);
//
//     // Now dynamic pixel values handle the work smoothly
//     const xLeftToRight = useTransform(progressOne, [0, 1], [0, -scrollRange]);
//     const xRightToLeft = useTransform(progressTwo, [0, 1], [-scrollRange, 0]);
//
//     return (
//         <div ref={container} className="min-h-screen w-full md:w-full lg:w-full bg-black">
//
//             {/* ── Hero Section ── */}
//             {/* ── Hero Section ── */}
//             <div className="relative w-full  overflow-hidden">
//
//                 {/* Background Video Element */}
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
//                 >
//                     <source src="portfolio.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//
//                 {/* Content Container (Keeps text and decorative image on top) */}
//                 <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
//
//                     {/* Text block */}
//                     <div className="flex flex-col justify-center items-start min-h-screen
//                         px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24
//                         w-full md:w-1/2 lg:w-3/5">
//                         <ShinyText
//                             className="animate-text font-serif font-extrabold
//                            text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
//                             text="Deepanshu"
//                             speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
//                         />
//                         <br />
//                         <ShinyText
//                             className="animate-text font-serif font-extrabold
//                            text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
//                             text="Sharma"
//                             speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
//                         />
//                         <br />
//                         <ShinyText
//                             className="animate-text font-serif font-medium
//                            text-xl md:text-2xl lg:text-3xl xl:text-4xl"
//                             text="Not your ordinary developer"
//                             speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
//                         />
//                     </div>
//
//
//                 </div>
//             </div>
//
//             {/* ── Skills Section ── */}
//             <div className="flex flex-col gap-3">
//                 <div className="px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-10">
//                     <ShinyText
//                         className="font-serif font-bold
//                                    text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
//                         text="Skills"
//                         speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
//                     />
//                 </div>
//                 <div className="w-full bg-white">
//                     <div className="relative" style={{ height: '600px' }}>
//                         <FlowingMenu
//                             items={demoItems}
//                             speed={15}
//                             textColor="#ffffff"
//                             bgColor="black"
//                             marqueeBgColor="#F4F3F8"
//                             marqueeTextColor="#120F17"
//                             borderColor="#ffffff"
//                         />
//                     </div>
//                 </div>
//             </div>
//
//             {/* ── "Proof That I Can" Section ── */}
//             <div className="flex flex-col md:flex-row md:items-center gap-x-4 lg:gap-x-6 mt-12 md:mt-16 lg:mt-20 px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24 flex-wrap gap-y-4">
//
//                 <ShinyText
//                     className="font-serif font-bold
//                                text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
//                     text="Proof That I Can"
//                     speed={2} color="#b5b5b5" shineColor="#ffffff" spread={120} direction="left"
//                 />
//                 <RotatingText
//                     texts={['Build', 'Code', 'Design', 'Deploy']}
//                     mainClassName="px-3 md:px-4 bg-white text-black overflow-hidden py-1 md:py-2
//                                   justify-center rounded-2xl font-serif font-bold
//                                   text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
//                     staggerFrom="last"
//                     initial={{ y: "100%" }}
//                     animate={{ y: 0 }}
//                     exit={{ y: "-120%" }}
//                     staggerDuration={0.025}
//                     splitLevelClassName="overflow-hidden"
//                     transition={{ type: "spring", damping: 30, stiffness: 400 }}
//                     rotationInterval={2000}
//                     splitBy="characters"
//                     auto
//                     loop
//                 />
//             </div>
//
//
//             <div className="bg-black text-white">
//
//                 {/* ── PROJECT 1 TRACK (PrepXL) ── */}
//                 {/* h-[300vh] controls how long the page stays locked. Higher = slower, smoother scroll */}
//                 <div ref={projectOneContainer} className="relative h-[300vh] w-full">
//
//                     {/* Sticky Box: Viewport Lock */}
//                     <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
//                         <div className="px-6 md:px-12 lg:px-20 mb-8">
//                             <h2 className="text-4xl md:text-6xl font-bold font-serif text-red-500">
//                                 PrepXL - AI Career Coach
//                             </h2>
//                             <p className="text-zinc-400 mt-2 max-w-xl font-serif">
//                                 Scroll down to cycle through features. The page will unlock once complete.
//                             </p>
//                         </div>
//
//                         {/* Horizontal Animated Container */}
//                         <motion.div
//                             ref={trackRef}
//                             style={{ x: xLeftToRight }}
//                             className="flex gap-8 px-6 md:px-12 lg:px-20 will-change-transform"
//                         >
//                             {/* CARD 1: AI Mock Interviews */}
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">
//                                 <span className="text-red-500 font-mono text-sm mb-2">01 / CORE INTERFACE</span>
//                                 <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-2">AI Mock Interviews</h3>
//                                 <p className="text-zinc-600 font-sans text-sm leading-relaxed max-w-md">
//                                     Engineered the interactive frontend interface for real-time AI simulations, prioritizing responsive layouts, smooth state transitions, and an intuitive user feedback loop.
//                                 </p>
//                             </div>
//
//                             {/* CARD 2: ATS Resume Analysis */}
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">
//                                 <span className="text-red-500 font-mono text-sm mb-2">02 / DATA VISUALIZATION</span>
//                                 <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-2">ATS Resume & Profile Analysis</h3>
//                                 <p className="text-zinc-600 font-sans text-sm leading-relaxed max-w-md">
//                                     Built the data-driven parsing interface, optimizing performance to ensure seamless delivery and crisp rendering of complex resume scoring metrics and feedback.
//                                 </p>
//                             </div>
//
//                             {/* CARD 3: Job Search Platform */}
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">
//                                 <span className="text-red-500 font-mono text-sm mb-2">03 / SEARCH & DISCOVERY</span>
//                                 <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-2">Job Search Platform</h3>
//                                 <p className="text-zinc-600 font-sans text-sm leading-relaxed max-w-md">
//                                     Developed a fluid, low-latency client-side search and filtering experience, optimizing rendering cycles to handle dynamic query results effortlessly.
//                                 </p>
//                             </div>
//
//                             {/* CARD 4: Firebase Authentication */}
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">
//                                 <span className="text-red-500 font-mono text-sm mb-2">04 / ARCHITECTURE & SECURITY</span>
//                                 <h3 className="text-2xl font-bold font-serif text-zinc-900 mb-2">Firebase Auth Integration</h3>
//                                 <p className="text-zinc-600 font-sans text-sm leading-relaxed max-w-md">
//                                     Architected and implemented the entire client-side authentication system using Firebase, securing user routes and managing persistent session states across the platform.
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//
//
//                 {/* ── PROJECT 2 TRACK (CAPRIAGOS) ── */}
//                 <div ref={projectTwoContainer} className="relative h-[300vh] w-full mt-20">
//
//                     {/* Sticky Box: Viewport Lock */}
//                     <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
//                         <div className="px-6 md:px-12 lg:px-20 mb-8 text-right self-end">
//                             <h2 className="text-4xl md:text-6xl font-bold font-serif text-red-500">
//                                 CAPRIAGOS
//                             </h2>
//                             <p className="text-zinc-400 mt-2 max-w-xl font-serif">
//                                 Sustainable fashion for conscious consumers.
//                             </p>
//                         </div>
//
//                         {/* Horizontal Animated Container (Moves Reverse) */}
//                         <motion.div
//                             style={{ x: xRightToLeft }}
//                             className="flex gap-8 px-6 md:px-12 lg:px-20 will-change-transform"
//                         >
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-800">
//                                 <span className="text-red-500 font-mono text-sm mb-2">01 / ECO</span>
//                                 <h3 className="text-2xl font-bold font-serif">Curated Vintage Clothing</h3>
//                             </div>
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-800">
//                                 <span className="text-red-500 font-mono text-sm mb-2">02 / ECO</span>
//                                 <h3 className="text-2xl font-bold font-serif">Sustainable Supply Chains</h3>
//                             </div>
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-800">
//                                 <span className="text-red-500 font-mono text-sm mb-2">03 / ECO</span>
//                                 <h3 className="text-2xl font-bold font-serif">Conscious Fashion Drops</h3>
//                             </div>
//                             <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-white rounded-2xl flex flex-col justify-end p-8 border border-zinc-800">
//                                 <span className="text-red-500 font-mono text-sm mb-2">04 / ECO</span>
//                                 <h3 className="text-2xl font-bold font-serif">Carbon-Neutral Delivery</h3>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//
//                 {/* Extra spacing block just to ensure smooth handoff to the footer */}
//                 <div className="h-40 bg-black" />
//             </div>
//
//
//             <Footer />
//         </div>
//     );
// }

import React, { useRef, useState, useEffect } from 'react';
import ShinyText from "./components/ShinyText.jsx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import RotatingText from "./components/RotatingText.jsx";
import CardSwap, { Card } from "./components/CardSwap.jsx";
import InfiniteMenu from "./components/InfiniteMenu.jsx";
import FlowingMenu from "./components/FlowingMenu.jsx";
import Footer from "./Footer/Footer.jsx"
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Portfolio() {
    const container = useRef(null);

    // 1. ADDED MISSING CONTAINERS FOR SCROLL TARGETING
    const projectOneContainer = useRef(null);
    const projectTwoContainer = useRef(null);
    const trackRef = useRef(null); // Cleaned up TypeScript syntax for .jsx file

    const [scrollRange, setScrollRange] = useState(0);

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
        { link: 'javascript:void(0)', text: 'MongoDB', image: 'Database.jpg' },
        { link: 'javascript:void(0)', text: 'Express.JS', image: 'VersionControl.png' }
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

    // 2. ADDED SCROLL TRACKING LOGIC FOR BOTH SECTIONS
    const { scrollYProgress: progressOne } = useScroll({
        target: projectOneContainer,
        offset: ["start start", "end end"]
    });

    const { scrollYProgress: progressTwo } = useScroll({
        target: projectTwoContainer,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        if (!trackRef.current) return;

        const calculateScroll = () => {
            const totalWidth = trackRef.current.scrollWidth;
            const visibleWidth = window.innerWidth;
            setScrollRange(totalWidth - visibleWidth);
        };

        calculateScroll();
        window.addEventListener('resize', calculateScroll);
        return () => window.removeEventListener('resize', calculateScroll);
    }, []);

    // Bound values are dynamically tracked via scroll progress mapping
    const xLeftToRight = useTransform(progressOne, [0, 1], [0, -scrollRange]);
    const xRightToLeft = useTransform(progressTwo, [0, 1], [-scrollRange, 0]);

    return (
        <div ref={container} className="min-h-screen w-full md:w-full lg:w-full bg-black">

            {/* ── Hero Section ── */}
            <div className="relative w-full overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none opacity-40"
                >
                    <source src="portfolio.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
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
                    mainClassName="px-3 md:px-4 bg-white text-black overflow-hidden py-1 md:py-2
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

            <div className="bg-black text-white">
                {/* ── PROJECT 1 TRACK (PrepXL) ── */}
                <div ref={projectOneContainer} className="relative h-[300vh] w-full">
                    <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                        <div className="px-6 md:px-12 lg:px-20 mb-8">
                            <h2 className="text-4xl md:text-6xl font-bold font-serif text-[#4b4bff]">
                                PrepXL - <span className="text-white"> AI Career Coach</span>
                            </h2>

                        </div>

                        <motion.div
                            ref={trackRef}
                            style={{ x: xLeftToRight }}
                            className="flex  gap-8 px-6 md:px-12  will-change-transform"
                        >
                            <div className="  relative min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-br from-[#4b4bff] to-white rounded-2xl flex flex-col justify-center p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors group">
                                {/* Vector Icon / Abstract Shape */}



                                <h3 className="text-4xl lg:text-6xl font-bold font-serif text-zinc-900 mb-2 ">AI Mock Interviews</h3>
                                <p className="text-white font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl ">
                                    Engineered the interactive frontend interface for real-time AI simulations, prioritizing responsive layouts, smooth state transitions, and an intuitive user feedback loop.
                                </p>
                            </div>

                            <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-br from-[#4b4bff] to-white rounded-2xl flex flex-col justify-center p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">

                                <h3 className="text-4xl font-bold font-serif text-zinc-900 mb-2 lg:text-6xl">ATS Resume & Profile Analysis</h3>
                                <p className="text-white font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl ">
                                    Built the data-driven parsing interface, optimizing performance to ensure seamless delivery and crisp rendering of complex resume scoring metrics and feedback.
                                </p>
                            </div>

                            <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-br from-[#4b4bff] to-white rounded-2xl flex flex-col justify-top md:justify-center p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">

                                <h3 className="text-4xl font-bold font-serif text-zinc-900 mb-2 lg:text-6xl">Job Search Platform</h3>
                                <p className="text-white font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Developed a fluid, low-latency client-side search and filtering experience, optimizing rendering cycles to handle dynamic query results effortlessly.
                                </p>
                            </div>

                            <div className="min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-br from-[#4b4bff] to-white rounded-2xl flex flex-col justify-top md:justify-center p-8 border border-zinc-200 shadow-sm hover:border-zinc-400 transition-colors">

                                <h3 className="text-4xl font-bold font-serif text-zinc-900 mb-2 lg:text-6xl" >Firebase Integration</h3>
                                <p className="text-white font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Architected and implemented the entire client-side authentication system using Firebase, securing user routes and managing persistent session states across the platform.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* ── PROJECT 2 TRACK (CAPRIAGOS) ── */}
                <div ref={projectTwoContainer} className="relative h-[300vh] w-full mt-20">
                    <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
                        <div className="px-6 md:px-12 lg:px-20 mb-8 text-right self-end">
                            <h2 className="text-4xl md:text-6xl font-bold font-serif text-white">
                                CAPRIAGOS
                            </h2>
                            <p className="text-zinc-400 mt-2 max-w-xl font-serif">
                                Sustainable fashion for conscious consumers.
                            </p>
                        </div>

                        <motion.div
                            style={{ x: xRightToLeft }}
                            className="flex gap-8  md:px-12 will-change-transform"
                        >
                            {/* CARD 01: Core Platform */}
                            <div className="relative min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-b from-zinc-900 via-zinc-600 to-white rounded-2xl flex flex-col justify-top md:justify-center p-8 border border-zinc-800 shadow-xl group overflow-hidden">
                                {/* Dynamic Vector Icon */}


                                <h3 className="text-4xl font-bold font-serif text-white mb-2 lg:text-6xl">Curated Vintage Clothing</h3>
                                <p className="text-black font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Architected a secure, serverless MERN & Firebase e-commerce platform, utilizing Firebase Cloud Functions to orchestrate complex backend logic.
                                </p>
                            </div>

                            {/* CARD 02: Secure Payments */}
                            <div className="relative min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-b from-zinc-900 via-zinc-600 to-white rounded-2xl flex flex-col justify-top md:justify-center p-8 border border-zinc-800 shadow-xl group overflow-hidden">
                                {/* Dynamic Vector Icon */}


                                <h3 className="text-4xl font-bold font-serif text-white mb-2 lg:text-6xl">Sustainable Supply Chains</h3>
                                <p className="text-black font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Engineered a secure payment pipeline by integrating Razorpay API via Firebase Functions, ensuring zero client-side exposure of sensitive API keys.
                                </p>
                            </div>

                            {/* CARD 03: Webhook Architecture */}
                            <div className="relative min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-b from-zinc-900 via-zinc-600 to-white rounded-2xl flex flex-col justify-top md:justify-center   p-8 border border-zinc-800 shadow-xl group overflow-hidden">
                                {/* Dynamic Vector Icon */}


                                <h3 className="text-4xl font-bold font-serif text-white mb-2 lg:text-6xl">Conscious Fashion Drops</h3>
                                <p className="text-black font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Designed a scalable architecture that seamlessly handles asynchronous webhooks and automated payment verification routines.
                                </p>
                            </div>

                            {/* CARD 04: Anti-Tampering Engine */}
                            <div className="relative min-w-[80vw] md:min-w-[45vw] h-[50vh] bg-gradient-to-b from-zinc-900 via-zinc-600 to-white rounded-2xl flex flex-col justify-top md:justify-center p-8 border border-zinc-800 shadow-xl group overflow-hidden">
                                {/* Dynamic Vector Icon */}


                                <h3 className="text-4xl font-bold font-serif text-white mb-2 lg:text-6xl">Carbon-Neutral Delivery</h3>
                                <p className="text-black font-medium font-sans text-xl leading-relaxed max-w-md lg:text-2xl">
                                    Implemented bulletproof cryptographic check systems entirely isolated on the backend to completely prevent transaction tampering.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="h-40 bg-black" />
            </div>

            <Footer />
        </div>
    );
}