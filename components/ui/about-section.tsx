"use client";

import { useRef } from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import aboutImage from "@/images/images (12).jpg";

export default function AboutSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.18,
        duration: 0.45,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -18,
      opacity: 0,
    },
  };
  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.18,
        duration: 0.45,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };

  return (
    <section
      id="about"
      className="relative bg-[#0b0d12] text-white py-16 px-4"
      ref={heroRef}
    >
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="flex flex-wrap justify-between items-center gap-6 mb-8 w-full">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-[#3ca2fa]">*</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-neutral-400"
              >
                ABOUT PRARAMBHX
              </TimelineContent>
            </div>
            <div className="flex gap-3">
              <TimelineContent
                as="a"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="#"
                className="w-8 h-8 border border-white/10 bg-white/5 rounded-lg flex items-center justify-center"
              >
                <Facebook size={16} />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="#"
                className="w-8 h-8 border border-white/10 bg-white/5 rounded-lg flex items-center justify-center"
              >
                <Instagram size={16} />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="#"
                className="w-8 h-8 border border-white/10 bg-white/5 rounded-lg flex items-center justify-center"
              >
                <Linkedin size={16} />
              </TimelineContent>
              <TimelineContent
                as="a"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                href="#"
                className="w-8 h-8 border border-white/10 bg-white/5 rounded-lg flex items-center justify-center"
              >
                <Youtube size={16} />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg
              className="w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
            >
              <defs>
                <clipPath id="clip-inverted" clipPathUnits="objectBoundingBox">
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                href={aboutImage.src}
              ></image>
            </svg>
          </TimelineContent>

          <div className="flex flex-wrap justify-between items-center py-4 text-sm text-neutral-400">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#3ca2fa] font-semibold">10+ years</span>
                <span>flight systems research</span>
                <span className="text-neutral-600">|</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#3ca2fa] font-semibold">40+ labs</span>
                <span>trained nationwide</span>
              </div>
            </TimelineContent>
            <div className="flex flex-col gap-2">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex text-2xl items-center gap-2"
              >
                <span className="text-[#3ca2fa] font-semibold">120+</span>
                <span className="uppercase text-neutral-400 text-xs">deployments</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2"
              >
                <span className="text-[#3ca2fa] font-semibold">30%</span>
                <span>faster prototyping cycles</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl leading-tight font-semibold text-white mb-6">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.08}
                staggerFrom="first"
                reverse
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 28,
                  delay: 0.6,
                }}
              >
                Building autonomous flight systems for the next generation.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-6 text-neutral-300"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm leading-relaxed"
              >
                <p>
                  PrarambhX designs advanced drone platforms, flight controllers,
                  and research-grade autonomy stacks for real-world deployment.
                  We combine rigorous engineering with hands-on training.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm leading-relaxed"
              >
                <p>
                  Our teams work with universities, startups, and industry
                  partners to prototype, test, and scale aerial systems across
                  mapping, inspection, and logistics.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-[#3ca2fa] text-2xl font-bold mb-2"
              >
                PRARAMBHX
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-neutral-400 text-sm mb-6"
              >
                Drone Technology and Research Collective
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-white/90 font-medium">
                  Ready to collaborate on your next aerial project?
                </p>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-[#3ca2fa] hover:bg-[#2d8fe0] shadow-lg shadow-[#3ca2fa]/40 border border-[#3ca2fa]/40 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-black px-5 py-3 rounded-lg cursor-pointer font-semibold"
              >
                LET'S COLLABORATE <ArrowRight size={18} />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
