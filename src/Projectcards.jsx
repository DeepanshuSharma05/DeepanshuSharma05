import React from "react";

// ─── Shared SVG defs injected once ───────────────────────────────────────────
const SharedDefs = () => (
    <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
            <pattern id="grid-light" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M20 0H0V20" fill="none" stroke="#0d0d0d" strokeWidth="0.3" opacity="0.08" />
            </pattern>
            <pattern id="grid-dark" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M24 0H0V24" fill="none" stroke="white" strokeWidth="0.3" opacity="0.05" />
            </pattern>
            <marker id="arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#d42b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arr-muted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(249,247,244,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
            <marker id="arr-red-dim" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(212,43,43,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </marker>
        </defs>
    </svg>
);

// ─── SVG Graphics ─────────────────────────────────────────────────────────────

const MockInterviewSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#f9f7f4" />
        <rect width="320" height="140" fill="url(#grid-light)" />
        {/* AI bubbles */}
        <rect x="18" y="22" width="130" height="34" rx="10" fill="#0d0d0d" />
        <rect x="18" y="62" width="100" height="34" rx="10" fill="#0d0d0d" />
        {/* User bubbles */}
        <rect x="172" y="44" width="130" height="34" rx="10" fill="#d42b2b" />
        <rect x="192" y="84" width="110" height="34" rx="10" fill="rgba(212,43,43,0.15)" stroke="#d42b2b" strokeWidth="0.5" />
        <circle cx="18" cy="61" r="3" fill="#0d0d0d" opacity="0.5" />
        {/* AI text lines */}
        <rect x="30" y="34" width="70" height="4" rx="2" fill="white" opacity="0.8" />
        <rect x="30" y="42" width="50" height="4" rx="2" fill="white" opacity="0.5" />
        <rect x="30" y="74" width="55" height="4" rx="2" fill="white" opacity="0.8" />
        <rect x="30" y="82" width="38" height="4" rx="2" fill="white" opacity="0.5" />
        {/* User text lines */}
        <rect x="184" y="56" width="70" height="4" rx="2" fill="white" opacity="0.9" />
        <rect x="184" y="64" width="48" height="4" rx="2" fill="white" opacity="0.6" />
        <rect x="204" y="96" width="60" height="4" rx="2" fill="#d42b2b" opacity="0.8" />
        <rect x="204" y="104" width="42" height="4" rx="2" fill="#d42b2b" opacity="0.5" />
        {/* Mic icon */}
        <circle cx="285" cy="120" r="14" fill="#0d0d0d" />
        <rect x="280" y="110" width="10" height="13" rx="5" fill="white" />
        <path d="M275 121q0 8 10 8t10-8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="285" y1="129" x2="285" y2="133" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        {/* Score chip */}
        <rect x="18" y="108" width="58" height="22" rx="6" fill="#d42b2b" />
        <text x="47" y="123" fontFamily="'DM Mono',monospace" fontSize="9" fill="white" textAnchor="middle" letterSpacing="0.05em">92 / 100</text>
    </svg>
);

const ATSResumeSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#f9f7f4" />
        <rect width="320" height="140" fill="url(#grid-light)" />
        {/* Resume doc */}
        <rect x="20" y="14" width="100" height="118" rx="6" fill="white" stroke="#0d0d0d" strokeWidth="0.5" opacity="0.9" />
        <rect x="30" y="26" width="60" height="5" rx="2" fill="#0d0d0d" opacity="0.7" />
        <rect x="30" y="36" width="78" height="3" rx="1.5" fill="#0d0d0d" opacity="0.2" />
        <rect x="30" y="44" width="70" height="3" rx="1.5" fill="#0d0d0d" opacity="0.2" />
        <rect x="30" y="56" width="45" height="3" rx="1.5" fill="#d42b2b" opacity="0.6" />
        <rect x="30" y="64" width="78" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.15" />
        <rect x="30" y="70" width="65" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.15" />
        <rect x="30" y="82" width="45" height="3" rx="1.5" fill="#d42b2b" opacity="0.6" />
        <rect x="30" y="90" width="78" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.15" />
        <rect x="30" y="96" width="55" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.15" />
        {/* Score ring */}
        <circle cx="210" cy="62" r="46" fill="none" stroke="#0d0d0d" strokeWidth="0.5" opacity="0.1" />
        <circle cx="210" cy="62" r="46" fill="none" stroke="#d42b2b" strokeWidth="3.5" strokeDasharray="218 289" strokeDashoffset="72" strokeLinecap="round" />
        <text x="210" y="68" fontFamily="'DM Serif Display',serif" fontSize="26" fill="#0d0d0d" textAnchor="middle" dominantBaseline="central">87</text>
        <text x="210" y="82" fontFamily="'DM Mono',monospace" fontSize="8" fill="#0d0d0d" textAnchor="middle" opacity="0.5" letterSpacing="0.08em">ATS SCORE</text>
        {/* Tags */}
        <rect x="148" y="118" width="34" height="14" rx="4" fill="#d42b2b" />
        <text x="165" y="128" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" letterSpacing="0.05em">SKILLS</text>
        <rect x="188" y="118" width="38" height="14" rx="4" fill="#0d0d0d" />
        <text x="207" y="128" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" letterSpacing="0.05em">FORMAT</text>
        <rect x="232" y="118" width="40" height="14" rx="4" fill="rgba(212,43,43,0.12)" stroke="#d42b2b" strokeWidth="0.5" />
        <text x="252" y="128" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#d42b2b" textAnchor="middle" letterSpacing="0.05em">IMPACT</text>
    </svg>
);

const JobSearchSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#f9f7f4" />
        <rect width="320" height="140" fill="url(#grid-light)" />
        {/* Search bar */}
        <rect x="18" y="16" width="188" height="30" rx="8" fill="white" stroke="#0d0d0d" strokeWidth="0.5" />
        <circle cx="37" cy="31" r="7" fill="none" stroke="#0d0d0d" strokeWidth="1.5" opacity="0.5" />
        <line x1="42" y1="36" x2="47" y2="41" stroke="#0d0d0d" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <rect x="54" y="27" width="90" height="3" rx="1.5" fill="#0d0d0d" opacity="0.18" />
        {/* Filter pills */}
        <rect x="214" y="16" width="48" height="14" rx="4" fill="#d42b2b" />
        <text x="238" y="26" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" letterSpacing="0.06em">REMOTE</text>
        <rect x="214" y="32" width="46" height="14" rx="4" fill="#0d0d0d" />
        <text x="237" y="42" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" letterSpacing="0.05em">FULLSTACK</text>
        <rect x="268" y="32" width="34" height="14" rx="4" fill="rgba(13,13,13,0.06)" stroke="#0d0d0d" strokeWidth="0.4" />
        <text x="285" y="42" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="#0d0d0d" textAnchor="middle" letterSpacing="0.04em">MERN</text>
        {/* Job rows */}
        <rect x="18" y="55" width="284" height="22" rx="6" fill="white" stroke="#d42b2b" strokeWidth="0.8" />
        <rect x="18" y="83" width="284" height="22" rx="6" fill="white" stroke="#0d0d0d" strokeWidth="0.4" opacity="0.5" />
        <rect x="18" y="111" width="284" height="22" rx="6" fill="white" stroke="#0d0d0d" strokeWidth="0.4" opacity="0.3" />
        <circle cx="30" cy="66" r="4" fill="#d42b2b" />
        <rect x="40" y="62" width="80" height="3.5" rx="1.75" fill="#0d0d0d" opacity="0.7" />
        <rect x="40" y="68" width="56" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.3" />
        <rect x="234" y="60" width="52" height="12" rx="4" fill="#d42b2b" opacity="0.12" />
        <text x="260" y="69" fontFamily="'DM Mono',monospace" fontSize="7" fill="#d42b2b" textAnchor="middle" letterSpacing="0.04em">MATCH 94%</text>
        <circle cx="30" cy="94" r="4" fill="#0d0d0d" opacity="0.2" />
        <rect x="40" y="90" width="80" height="3.5" rx="1.75" fill="#0d0d0d" opacity="0.4" />
        <rect x="40" y="96" width="56" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.15" />
        <circle cx="30" cy="122" r="4" fill="#0d0d0d" opacity="0.1" />
        <rect x="40" y="118" width="80" height="3.5" rx="1.75" fill="#0d0d0d" opacity="0.25" />
        <rect x="40" y="124" width="56" height="2.5" rx="1.25" fill="#0d0d0d" opacity="0.1" />
    </svg>
);

const FirebaseAuthSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#f9f7f4" />
        <rect width="320" height="140" fill="url(#grid-light)" />
        <circle cx="160" cy="70" r="52" fill="none" stroke="#d42b2b" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
        <circle cx="160" cy="70" r="68" fill="none" stroke="#0d0d0d" strokeWidth="0.3" opacity="0.1" strokeDasharray="3 6" />
        {/* Lock body */}
        <rect x="128" y="62" width="64" height="54" rx="8" fill="#0d0d0d" />
        <path d="M148 62 V44 Q160 28 172 44 V62" fill="none" stroke="#0d0d0d" strokeWidth="5" strokeLinecap="round" />
        <circle cx="160" cy="83" r="7" fill="#f9f7f4" />
        <rect x="157" y="83" width="6" height="10" rx="1" fill="#f9f7f4" />
        {/* User nodes */}
        <circle cx="72" cy="30" r="12" fill="white" stroke="#0d0d0d" strokeWidth="0.5" />
        <circle cx="72" cy="25" r="4.5" fill="#0d0d0d" opacity="0.5" />
        <path d="M64 37q0-8 8-8t8 8" fill="#0d0d0d" opacity="0.4" />
        <line x1="84" y1="30" x2="126" y2="55" stroke="#d42b2b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
        <circle cx="72" cy="120" r="12" fill="white" stroke="#0d0d0d" strokeWidth="0.5" />
        <circle cx="72" cy="115" r="4.5" fill="#0d0d0d" opacity="0.5" />
        <path d="M64 127q0-8 8-8t8 8" fill="#0d0d0d" opacity="0.4" />
        <line x1="84" y1="120" x2="126" y2="100" stroke="#0d0d0d" strokeWidth="0.6" strokeDasharray="3 3" opacity="0.3" />
        <circle cx="255" cy="30" r="12" fill="white" stroke="#d42b2b" strokeWidth="0.8" />
        <circle cx="255" cy="25" r="4.5" fill="#d42b2b" opacity="0.7" />
        <path d="M247 37q0-8 8-8t8 8" fill="#d42b2b" opacity="0.5" />
        <line x1="243" y1="30" x2="194" y2="55" stroke="#d42b2b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.7" />
        <rect x="252" y="108" width="34" height="24" rx="6" fill="#d42b2b" />
        <path d="M260 120l5 5 9-9" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VintageSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#0d0d0d" />
        <rect width="320" height="140" fill="url(#grid-dark)" />
        <path d="M160 22 Q160 16 168 16 Q176 16 176 24 Q176 30 168 32" stroke="#f9f7f4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.9" />
        <line x1="100" y1="60" x2="220" y2="60" stroke="#f9f7f4" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <path d="M168 32 L100 60 M168 32 L220 60" stroke="#f9f7f4" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <rect x="110" y="60" width="100" height="65" rx="6" fill="none" stroke="#d42b2b" strokeWidth="0.8" opacity="0.7" />
        <path d="M140 60 Q160 75 180 60" fill="#0d0d0d" stroke="#d42b2b" strokeWidth="0.8" />
        {[78, 85, 92, 99, 106].map((y) => (
            <rect key={y} x="112" y={y} width="96" height="1.5" rx="0.75" fill="white" opacity="0.06" />
        ))}
        <rect x="218" y="70" width="50" height="18" rx="4" fill="#d42b2b" />
        <text x="243" y="82" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" letterSpacing="0.05em">VINTAGE</text>
    </svg>
);

const PaymentPipelineSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#0d0d0d" />
        <rect width="320" height="140" fill="url(#grid-dark)" />
        {/* Client */}
        <rect x="18" y="50" width="72" height="40" rx="8" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.15)" strokeWidth="0.5" />
        <text x="54" y="67" fontFamily="'DM Mono',monospace" fontSize="8" fill="#f9f7f4" textAnchor="middle" opacity="0.6" letterSpacing="0.06em">CLIENT</text>
        <text x="54" y="80" fontFamily="'DM Serif Display',serif" fontSize="11" fill="#f9f7f4" textAnchor="middle">React App</text>
        {/* Arrow */}
        <line x1="90" y1="70" x2="118" y2="70" stroke="#d42b2b" strokeWidth="1.2" markerEnd="url(#arr-red)" />
        <text x="104" y="65" fontFamily="'DM Mono',monospace" fontSize="7" fill="#d42b2b" textAnchor="middle" letterSpacing="0.04em">ORDER</text>
        {/* Firebase Fn */}
        <rect x="118" y="42" width="84" height="56" rx="8" fill="#d42b2b" opacity="0.9" />
        <text x="160" y="63" fontFamily="'DM Mono',monospace" fontSize="7.5" fill="white" textAnchor="middle" opacity="0.85" letterSpacing="0.06em">CLOUD FN</text>
        <text x="160" y="76" fontFamily="'DM Serif Display',serif" fontSize="11" fill="white" textAnchor="middle">Firebase</text>
        <text x="160" y="89" fontFamily="'DM Mono',monospace" fontSize="7" fill="white" textAnchor="middle" opacity="0.7" letterSpacing="0.04em">Secure Layer</text>
        {/* Arrow 2 */}
        <line x1="202" y1="70" x2="230" y2="70" stroke="rgba(249,247,244,0.5)" strokeWidth="1.2" markerEnd="url(#arr-muted)" />
        <text x="216" y="65" fontFamily="'DM Mono',monospace" fontSize="7" fill="rgba(249,247,244,0.5)" textAnchor="middle" letterSpacing="0.04em">VERIFY</text>
        {/* Razorpay */}
        <rect x="230" y="50" width="72" height="40" rx="8" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.15)" strokeWidth="0.5" />
        <text x="266" y="67" fontFamily="'DM Mono',monospace" fontSize="7" fill="#f9f7f4" textAnchor="middle" opacity="0.6" letterSpacing="0.05em">RAZORPAY</text>
        <text x="266" y="80" fontFamily="'DM Serif Display',serif" fontSize="11" fill="#f9f7f4" textAnchor="middle">Payment</text>
        {/* Webhook return */}
        <path d="M302 90 Q300 120 160 120 Q118 120 90 100 Q80 92 90 90" fill="none" stroke="rgba(249,247,244,0.2)" strokeWidth="0.8" strokeDasharray="4 3" />
        <text x="200" y="134" fontFamily="'DM Mono',monospace" fontSize="7" fill="rgba(249,247,244,0.3)" textAnchor="middle" letterSpacing="0.04em">webhook confirmation</text>
    </svg>
);

const ConsciousDropsSVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#0d0d0d" />
        <rect width="320" height="140" fill="url(#grid-dark)" />
        <path d="M160 20 Q220 30 230 80 Q240 130 160 125 Q80 120 90 70 Q100 20 160 20Z" fill="none" stroke="#d42b2b" strokeWidth="1" opacity="0.6" />
        <path d="M160 20 Q220 30 230 80 Q240 130 160 125 Q80 120 90 70 Q100 20 160 20Z" fill="rgba(212,43,43,0.06)" />
        <line x1="160" y1="22" x2="158" y2="122" stroke="white" strokeWidth="0.8" opacity="0.2" />
        <path d="M158 55 Q130 55 110 65" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M158 75 Q128 72 108 84" stroke="white" strokeWidth="0.5" fill="none" opacity="0.12" />
        <path d="M158 95 Q132 94 118 104" stroke="white" strokeWidth="0.5" fill="none" opacity="0.1" />
        <path d="M160 55 Q188 53 208 62" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
        <path d="M160 75 Q190 72 210 82" stroke="white" strokeWidth="0.5" fill="none" opacity="0.12" />
        <rect x="230" y="16" width="72" height="22" rx="6" fill="#d42b2b" />
        <text x="266" y="30" fontFamily="'DM Mono',monospace" fontSize="8" fill="white" textAnchor="middle" letterSpacing="0.05em">ECO DROP</text>
        <circle cx="134" cy="105" r="2.5" fill="#d42b2b" opacity="0.7" />
        <circle cx="150" cy="115" r="2" fill="#d42b2b" opacity="0.5" />
        <circle cx="168" cy="118" r="1.5" fill="#d42b2b" opacity="0.4" />
        <rect x="232" y="50" width="50" height="15" rx="4" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.12)" strokeWidth="0.5" />
        <text x="257" y="60.5" fontFamily="'DM Mono',monospace" fontSize="7" fill="rgba(249,247,244,0.5)" textAnchor="middle" letterSpacing="0.04em">SS / FW 25</text>
        <rect x="232" y="70" width="50" height="15" rx="4" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.12)" strokeWidth="0.5" />
        <text x="257" y="80.5" fontFamily="'DM Mono',monospace" fontSize="7" fill="rgba(249,247,244,0.5)" textAnchor="middle" letterSpacing="0.04em">UPCYCLED</text>
    </svg>
);

const DeliverySVG = () => (
    <svg viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
        <rect width="320" height="140" fill="#0d0d0d" />
        <rect width="320" height="140" fill="url(#grid-dark)" />
        {/* Truck body */}
        <rect x="18" y="55" width="130" height="60" rx="6" fill="rgba(249,247,244,0.05)" stroke="rgba(249,247,244,0.2)" strokeWidth="0.8" />
        {/* Cab */}
        <rect x="148" y="70" width="60" height="45" rx="6" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.2)" strokeWidth="0.8" />
        <rect x="156" y="76" width="44" height="22" rx="3" fill="rgba(212,43,43,0.2)" stroke="#d42b2b" strokeWidth="0.5" />
        {/* Wheels */}
        {[55, 120, 185].map((cx) => (
            <g key={cx}>
                <circle cx={cx} cy="120" r="10" fill="none" stroke="rgba(249,247,244,0.25)" strokeWidth="1.5" />
                <circle cx={cx} cy="120" r="4" fill="rgba(249,247,244,0.1)" />
            </g>
        ))}
        {/* Package */}
        <rect x="36" y="64" width="38" height="38" rx="4" fill="rgba(212,43,43,0.15)" stroke="#d42b2b" strokeWidth="0.5" />
        <line x1="55" y1="64" x2="55" y2="102" stroke="#d42b2b" strokeWidth="0.5" opacity="0.6" />
        <line x1="36" y1="83" x2="74" y2="83" stroke="#d42b2b" strokeWidth="0.5" opacity="0.6" />
        {/* Envelope */}
        <rect x="228" y="28" width="76" height="52" rx="8" fill="rgba(249,247,244,0.07)" stroke="rgba(249,247,244,0.15)" strokeWidth="0.5" />
        <path d="M228 34 L266 58 L304 34" fill="none" stroke="rgba(249,247,244,0.25)" strokeWidth="0.8" />
        <rect x="240" y="60" width="52" height="3" rx="1.5" fill="rgba(249,247,244,0.15)" />
        <rect x="244" y="66" width="38" height="2.5" rx="1.25" fill="rgba(249,247,244,0.09)" />
        <circle cx="304" cy="28" r="8" fill="#d42b2b" />
        <text x="304" y="32" fontFamily="'DM Mono',monospace" fontSize="8.5" fill="white" textAnchor="middle">!</text>
        <rect x="228" y="90" width="76" height="16" rx="4" fill="rgba(249,247,244,0.05)" stroke="rgba(249,247,244,0.1)" strokeWidth="0.5" />
        <text x="266" y="101" fontFamily="'DM Mono',monospace" fontSize="7" fill="rgba(249,247,244,0.4)" textAnchor="middle" letterSpacing="0.04em">BREVO · DELHIVERY</text>
        {/* Arrow truck → email */}
        <path d="M210 85 Q218 85 225 70" fill="none" stroke="rgba(212,43,43,0.5)" strokeWidth="0.8" strokeDasharray="3 3" markerEnd="url(#arr-red-dim)" />
    </svg>
);

// ─── Card Components ──────────────────────────────────────────────────────────

const cardBase = {
    width: "320px",
    minHeight: "220px",
    borderRadius: "18px",
    border: "0.5px solid rgba(13,13,13,0.12)",
    background: "#f9f7f4",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    flexShrink: 0,
    transition: "border-color 0.2s, box-shadow 0.2s",
    cursor: "default",
};

const cardDark = {
    ...cardBase,
    background: "#0d0d0d",
    border: "0.5px solid rgba(255,255,255,0.1)",
};

const graphicZone = {
    width: "100%",
    height: "140px",
    overflow: "hidden",
    flexShrink: 0,
};

const bodyStyle = {
    padding: "14px 18px 16px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "5px",
};

const tagStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "9px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#d42b2b",
    fontWeight: 500,
};

const titleLight = {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "16px",
    color: "#0d0d0d",
    lineHeight: 1.2,
    fontWeight: 400,
};

const titleDark = {
    ...titleLight,
    color: "#f9f7f4",
};

const descLight = {
    fontSize: "11px",
    color: "rgba(13,13,13,0.55)",
    lineHeight: 1.5,
    fontFamily: "'Outfit', sans-serif",
    marginTop: "2px",
};

const descDark = {
    ...descLight,
    color: "rgba(249,247,244,0.45)",
};

// ─── Card data ────────────────────────────────────────────────────────────────

const prepxlCards = [
    {
        tag: "01 / Core Interface",
        title: "AI Mock Interviews",
        desc: "Engineered the real-time AI simulation frontend — responsive layouts, smooth state transitions, and user feedback loop.",
        Graphic: MockInterviewSVG,
    },
    {
        tag: "02 / Data Visualization",
        title: "ATS Resume & Profile Analysis",
        desc: "Built the data-driven parsing interface for crisp rendering of complex resume scoring metrics and feedback.",
        Graphic: ATSResumeSVG,
    },
    {
        tag: "03 / Search & Discovery",
        title: "Job Search Platform",
        desc: "Developed a fluid, low-latency client-side search and filtering experience handling dynamic query results effortlessly.",
        Graphic: JobSearchSVG,
    },
    {
        tag: "04 / Architecture & Security",
        title: "Firebase Auth Integration",
        desc: "Architected the entire client-side auth system — securing user routes and managing persistent session states.",
        Graphic: FirebaseAuthSVG,
    },
];

const capriagosCards = [
    {
        tag: "01 / Eco",
        title: "Curated Vintage Clothing",
        desc: "Handpicked secondhand pieces with a Firestore-backed catalog and real-time stock management.",
        Graphic: VintageSVG,
    },
    {
        tag: "02 / Architecture & Security",
        title: "Secure Payment Pipeline",
        desc: "Razorpay API routed via Firebase Functions — zero client-side key exposure, tamper-proof transaction verification.",
        Graphic: PaymentPipelineSVG,
    },
    {
        tag: "03 / Eco",
        title: "Conscious Fashion Drops",
        desc: "Seasonal collections of thrifted and upcycled pieces — each drop managed via an admin dashboard with batch Firestore writes.",
        Graphic: ConsciousDropsSVG,
    },
    {
        tag: "04 / Logistics & Notifications",
        title: "Automated Order & Delivery Alerts",
        desc: "Firestore-triggered Cloud Functions polling Delhivery and dispatching branded transactional emails via Brevo SDK.",
        Graphic: DeliverySVG,
    },
];

// ─── Reusable Card ────────────────────────────────────────────────────────────

function ProjectCard({ tag, title, desc, Graphic, dark = false }) {
    const [hovered, setHovered] = React.useState(false);

    const hoverStyle = dark
        ? { borderColor: "rgba(255,255,255,0.22)", boxShadow: "0 6px 28px rgba(0,0,0,0.3)" }
        : { borderColor: "rgba(13,13,13,0.3)", boxShadow: "0 6px 28px rgba(13,13,13,0.07)" };

    return (
        <div
            style={{ ...(dark ? cardDark : cardBase), ...(hovered ? hoverStyle : {}) }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={graphicZone}>
                <Graphic />
            </div>
            <div style={bodyStyle}>
                <span style={tagStyle}>{tag}</span>
                <h3 style={dark ? titleDark : titleLight}>{title}</h3>
                <p style={dark ? descDark : descLight}>{desc}</p>
            </div>
        </div>
    );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionLabel({ name, stack, badge, badgeText }) {
    return (
        <div style={{ padding: "28px 0 10px" }}>
            {/* Label row */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#d42b2b", fontWeight: 500, whiteSpace: "nowrap" }}>
          {name}
        </span>
                <div style={{ flex: 1, height: "0.5px", background: "rgba(13,13,13,0.12)" }} />
            </div>
            {/* Meta row */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'DM Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", color: "rgba(13,13,13,0.4)", textTransform: "uppercase" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d42b2b", flexShrink: 0, display: "inline-block" }} />
                <span>{stack}</span>
                <span style={{ marginLeft: "auto", fontSize: "8px", background: badge ? "rgba(212,43,43,0.08)" : "rgba(212,43,43,0.08)", color: "#d42b2b", border: "0.5px solid rgba(212,43,43,0.3)", borderRadius: "4px", padding: "2px 7px" }}>
          {badgeText}
        </span>
            </div>
        </div>
    );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

/**
 * ProjectCards
 *
 * Drop-in replacement for your two motion.div tracks.
 * Pass `xLeftToRight` and `xRightToLeft` MotionValues from your scroll setup,
 * or omit them and wrap with your own motion.div externally.
 *
 * Usage:
 *   import ProjectCards from "./ProjectCards";
 *   <ProjectCards />
 *
 * Or with motion values:
 *   <ProjectCards xLeftToRight={xLeftToRight} xRightToLeft={xRightToLeft} />
 */
export default function ProjectCards({ xLeftToRight, xRightToLeft, TrackWrapper }) {
    // If framer-motion is available and MotionValues are passed in, wrap tracks.
    // Otherwise falls back to plain divs — safe to use in any context.
    const Track = TrackWrapper || "div";

    const trackBaseStyle = {
        display: "flex",
        gap: "16px",
        padding: "12px 0 16px",
        width: "max-content",
        willChange: "transform",
    };

    return (
        <>
            {/* Inject shared SVG defs once */}
            <SharedDefs />

            {/* ── PrepXL ───────────────────────────────────── */}
            <SectionLabel
                name="PrepXL — AI Career Platform"
                stack="MERN · Firebase · Redux Toolkit"
                badgeText="● Live · 4k+ DAU"
            />

            <div style={{ overflow: "hidden" }}>
                <Track style={xLeftToRight ? { x: xLeftToRight, ...trackBaseStyle } : trackBaseStyle}>
                    {prepxlCards.map((card) => (
                        <ProjectCard key={card.tag} {...card} dark={false} />
                    ))}
                </Track>
            </div>

            {/* ── Capriagos ────────────────────────────────── */}
            <SectionLabel
                name="Capriagos — Serverless E-Commerce"
                stack="Firebase Cloud Functions · Razorpay · Brevo"
                badgeText="● Live"
            />

            <div style={{ overflow: "hidden" }}>
                <Track style={xRightToLeft ? { x: xRightToLeft, ...trackBaseStyle } : trackBaseStyle}>
                    {capriagosCards.map((card) => (
                        <ProjectCard key={card.tag} {...card} dark={true} />
                    ))}
                </Track>
            </div>
        </>
    );
}

/**
 * If you want direct access to the raw card arrays and SVGs, they're exported too.
 */
export { prepxlCards, capriagosCards, ProjectCard, SectionLabel };