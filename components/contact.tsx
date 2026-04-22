"use client";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/contact", {
        firstName,
        lastName,
        email,
        organization,
        message,
      });

      toast.success("Message sent successfully!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setOrganization("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div>
      <section className="py-24 bg-[#080d18]">
        <Toaster position="top-right" />
        <style>{`
        @keyframes dashFlow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -44; }
        }
        @keyframes pulseRing {
          0%   { opacity: 0.55; }
          70%  { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.10; }
          50%       { opacity: 0.22; }
        }
        .flow-line {
          stroke-dasharray: 6 5;
          animation: dashFlow 1.6s linear infinite;
        }
        .pulse-ring {
          animation: pulseRing 2.4s ease-out infinite;
        }
        .center-glow-anim {
          animation: breathe 3s ease-in-out infinite;
        }
        .outer-node { cursor: pointer; }
        .outer-node .node-ring {
          transition: stroke 0.3s, filter 0.3s;
        }
        .outer-node .node-label {
          transition: fill 0.3s;
        }
       .outer-node:hover .node-ring {
  stroke: url(#hoverGradient);
  filter: drop-shadow(0 0 8px #00d4aa99);
}
        
      `}</style>

        <div className="container mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column – Animated Network Diagram */}
            <div className="flex justify-center">
              <svg
                className="w-full max-w-lg overflow-visible"
                viewBox="0 0 480 440"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="cGrad"
                    gradientUnits="userSpaceOnUse"
                    x1="174"
                    y1="154"
                    x2="306"
                    y2="286"
                  >
                    <stop offset="0%" stopColor="#00d4aa" />
                    <stop offset="50%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#00d4aa" />
                    <animateTransform
                      attributeName="gradientTransform"
                      type="rotate"
                      from="0 240 220"
                      to="360 240 220"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </linearGradient>

                  <filter
                    id="fGlowCenter"
                    x="-60%"
                    y="-60%"
                    width="220%"
                    height="220%"
                  >
                    <feGaussianBlur stdDeviation="8" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter
                    id="fDot"
                    x="-300%"
                    y="-300%"
                    width="700%"
                    height="700%"
                  >
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <radialGradient id="cGlowBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00d4aa" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#00d4aa" stopOpacity="0" />
                  </radialGradient>

                  <path id="p-tl" d="M240,220 L100,90" />
                  <path id="p-tr" d="M240,220 L380,90" />
                  <path id="p-bl" d="M240,220 L100,360" />
                  <path id="p-br" d="M240,220 L380,360" />

                  <linearGradient
                    id="hoverGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#00D4AA" />
                    <stop offset="100%" stopColor="#7B6FE8" />
                  </linearGradient>
                </defs>

                {/* Animated dashed lines */}
                <line
                  className="flow-line"
                  x1="240"
                  y1="220"
                  x2="100"
                  y2="90"
                  stroke="#1e3255"
                  strokeWidth="1.5"
                />
                <line
                  className="flow-line"
                  x1="240"
                  y1="220"
                  x2="380"
                  y2="90"
                  stroke="#1e3255"
                  strokeWidth="1.5"
                  style={{ animationDelay: "-0.4s" }}
                />
                <line
                  className="flow-line"
                  x1="240"
                  y1="220"
                  x2="100"
                  y2="360"
                  stroke="#1e3255"
                  strokeWidth="1.5"
                  style={{ animationDelay: "-0.8s" }}
                />
                <line
                  className="flow-line"
                  x1="240"
                  y1="220"
                  x2="380"
                  y2="360"
                  stroke="#1e3255"
                  strokeWidth="1.5"
                  style={{ animationDelay: "-1.2s" }}
                />

                {/* Travelling dots */}
                <circle r="4.5" fill="#00d4aa" filter="url(#fDot)">
                  <animateMotion
                    dur="2.2s"
                    repeatCount="indefinite"
                    keyPoints="1;0"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href="#p-tl" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.85;1"
                    dur="2.2s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4.5" fill="#00d4aa" filter="url(#fDot)">
                  <animateMotion
                    dur="2.2s"
                    begin="-0.55s"
                    repeatCount="indefinite"
                    keyPoints="1;0"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href="#p-tr" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.85;1"
                    dur="2.2s"
                    begin="-0.55s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4.5" fill="#00d4aa" filter="url(#fDot)">
                  <animateMotion
                    dur="2.2s"
                    begin="-1.1s"
                    repeatCount="indefinite"
                    keyPoints="1;0"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href="#p-bl" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.85;1"
                    dur="2.2s"
                    begin="-1.1s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle r="4.5" fill="#00d4aa" filter="url(#fDot)">
                  <animateMotion
                    dur="2.2s"
                    begin="-1.65s"
                    repeatCount="indefinite"
                    keyPoints="1;0"
                    keyTimes="0;1"
                    calcMode="linear"
                  >
                    <mpath href="#p-br" />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    keyTimes="0;0.1;0.85;1"
                    dur="2.2s"
                    begin="-1.65s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Outer nodes */}
                <g className="outer-node node-tl">
                  <circle
                    className="node-ring"
                    cx="100"
                    cy="90"
                    r="52"
                    fill="#0a1120"
                    stroke="#1a2a42"
                    strokeWidth="1.2"
                  />
                  <text
                    className="node-label"
                    x="100"
                    y="84"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Resource
                  </text>
                  <text
                    className="node-label"
                    x="100"
                    y="100"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Recovery
                  </text>
                </g>
                <g className="outer-node node-tr">
                  <circle
                    className="node-ring"
                    cx="380"
                    cy="90"
                    r="52"
                    fill="#0a1120"
                    stroke="#1a2a42"
                    strokeWidth="1.2"
                  />
                  <text
                    className="node-label"
                    x="380"
                    y="84"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    LED
                  </text>
                  <text
                    className="node-label"
                    x="380"
                    y="100"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Displays
                  </text>
                </g>
                <g className="outer-node node-bl">
                  <circle
                    className="node-ring"
                    cx="100"
                    cy="360"
                    r="52"
                    fill="#0a1120"
                    stroke="#1a2a42"
                    strokeWidth="1.2"
                  />
                  <text
                    className="node-label"
                    x="100"
                    y="354"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    EV
                  </text>
                  <text
                    className="node-label"
                    x="100"
                    y="370"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Platforms
                  </text>
                </g>
                <g className="outer-node node-br">
                  <circle
                    className="node-ring"
                    cx="380"
                    cy="360"
                    r="52"
                    fill="#0a1120"
                    stroke="#1a2a42"
                    strokeWidth="1.2"
                  />
                  <text
                    className="node-label"
                    x="380"
                    y="354"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Green
                  </text>
                  <text
                    className="node-label"
                    x="380"
                    y="370"
                    textAnchor="middle"
                    fill="#5a6a85"
                    fontSize="12"
                    fontFamily="Sora, sans-serif"
                  >
                    Energy
                  </text>
                </g>

                {/* Center node */}
                <circle
                  className="center-glow-anim"
                  cx="240"
                  cy="220"
                  r="100"
                  fill="url(#cGlowBg)"
                />
                <circle
                  className="pulse-ring"
                  cx="240"
                  cy="220"
                  r="72"
                  fill="none"
                  stroke="#00d4aa"
                  strokeWidth="1.2"
                  opacity="0.55"
                />
                <circle
                  cx="240"
                  cy="220"
                  r="66"
                  fill="#0a1120"
                  stroke="url(#cGrad)"
                  strokeWidth="2.2"
                  filter="url(#fGlowCenter)"
                />
                <text
                  x="240"
                  y="225"
                  textAnchor="middle"
                  fill="#00d4aa"
                  fontSize="14"
                  fontWeight="500"
                  fontFamily="Sora, sans-serif"
                  letterSpacing="0.5"
                >
                  UniqInvent
                </text>
              </svg>
            </div>

            {/* Right Column – Contact Form */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#00d4aa] mb-5">
                Get in touch
              </p>
              <h2 className="text-4xl md:text-5xl font-extralight text-white mb-12 leading-tight">
                Start a conversation
              </h2>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-8">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="custom-input w-full bg-transparent border-0 border-b border-[#1e2e48] text-white placeholder:text-[#2e3f5c] text-sm py-3 outline-none focus:border-[#00d4aa] transition-colors duration-200 hover:border-[#00d4aa]"
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="custom-input w-full bg-transparent border-0 border-b border-[#1e2e48] text-white placeholder:text-[#2e3f5c] text-sm py-3 outline-none focus:border-[#00d4aa] transition-colors duration-200 hover:border-[#00d4aa]"
                  />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="custom-input w-full bg-transparent border-0 border-b border-[#1e2e48] text-white placeholder:text-[#2e3f5c] text-sm py-3 outline-none focus:border-[#00d4aa] transition-colors duration-200 hover:border-[#00d4aa]"
                />
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="Organization"
                  className="custom-input w-full bg-transparent border-0 border-b border-[#1e2e48] text-white placeholder:text-[#2e3f5c] text-sm py-3 outline-none focus:border-[#00d4aa] transition-colors duration-200 hover:border-[#00d4aa]"
                />
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your interest"
                  className="w-full bg-transparent border-0 border-b border-[#1e2e48] text-white placeholder:text-[#2e3f5c] text-sm py-3 outline-none focus:border-[#00d4aa] transition-colors duration-200 hover:border-[#00d4aa]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#00d4aa] text-[#080d18] text-[11px] font-semibold uppercase tracking-[0.25em] py-3 hover:bg-[#00bfa0] transition-colors duration-200  bg-primary text-primary-foreground px-3 text-sm font-medium uppercase tracking-widest rounded-sm
      transition-all duration-300
      hover:shadow-[0_0_30px_8px_rgba(0,255,200,0.4)]
      hover:brightness-105
      hover:-translate-y-2.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[60vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/website-footer-Video.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
