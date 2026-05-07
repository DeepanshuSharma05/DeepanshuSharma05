import React from 'react';

// Custom brand SVG icons (lucide-react v1 removed all brand icons)
const InstagramIcon = ({ size = 40, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const TwitterIcon = ({ size = 40, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const LinkedinIcon = ({ size = 40, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const Footer = () => {
    const commonClasses = "flex items-center gap-4 text-4xl font-bold text-[#F7E6CA] hover:text-white transition-colors duration-200 group";

    return (
        <footer className="relative w-full bg-gradient-to-b from-black to-red-600 text-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 pt-20 pb-12">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">

                    {/* Left: Tagline */}
                    <div className="max-w-md">
                        <h2 className="text-5xl font-extrabold mb-4">LET'S CONNECT</h2>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex flex-col gap-6">
                        <a href="https://www.instagram.com/i_sharmadeepanshu?igsh=bjg3emZsdmY2Nndh" target="_blank" rel="noreferrer" className={commonClasses}>
                            <InstagramIcon size={40} className="group-hover:scale-110 transition-transform" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://x.com/A_Student05" target="_blank" rel="noreferrer" className={commonClasses}>
                            <TwitterIcon size={40} className="group-hover:scale-110 transition-transform" />
                            <span>Twitter</span>
                        </a>
                        <a href="https://www.linkedin.com/in/deepanshu-sharma-bb8056285/" target="_blank" rel="noreferrer" className={commonClasses}>
                            <LinkedinIcon size={40} className="group-hover:scale-110 transition-transform" />
                            <span>Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Big Text */}
            <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none select-none">
                <h1 className="text-[28vw] font-black leading-none translate-y-1/4">SOCIAL</h1>
            </div>
        </footer>
    );
};

export default Footer;
