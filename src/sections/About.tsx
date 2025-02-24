"use client"

import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImg from "@/assets/images/book-cover.png"
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg"
import GithubIcon from "@/assets/icons/github.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import { TechIcon } from "@/components/TechIcon";
import mapImg from "@/assets/images/map.png"
import smileEmoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from 'framer-motion'
import { useRef } from "react";

const toolboxItems = [
  {
    title: 'Java',
    iconType: ChromeIcon,
  },
  {
    title: 'HTML',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
]

const hobbies = [
  {
    title: "Watching TV",
    emoji: "📺",
    left: "5%",
    top: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    left: "35%",
    top: "40%",
  },
  {
    title: "Musics",
    emoji: "🎧",
    left: "50%",
    top: "15%",
  },
  {
    title: "Marathon",
    emoji: "🏃",
    left: "2%",
    top: "35%",
  },
  {
    title: "Languages",
    emoji: "🎓",
    left: "5%",
    top: "65%",
  },
  {
    title: "Eating",
    emoji: "🍽️",
    left: "70%",
    top: "45%",
  },
  {
    title: "Meditating",
    emoji: "🧘",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const contraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrown="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspired me" />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspective." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImg} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
                className="" />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left-sm [animation-duration:30s]" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right-sm [animation-duration:20s]" />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6" />
              <div className="relative flex-1" ref={contraintRef}>
                {hobbies.map(hobby => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-400 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={contraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImg} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileEmoji} alt="Smilling Emoji" className="size-20" />
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};
