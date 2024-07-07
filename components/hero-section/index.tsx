"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Feeder from "@/components/ui/feeder";
import Spotlight from "@/components/ui/Spotlight";
import { Github } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

export default function HeroSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <div className="mx-auto max-w-6xl mt-12 px-6 lg:px-8 bg-transparent relative">
      <div className="max-w-4xl absolute">
        <Spotlight fill="#9284D4" />
      </div>
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial="hidden"
          ref={ref}
          animate={isInView ? "show" : "hidden"}
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <div className="absolute -top-4 -z-10 flex w-full justify-center">
            <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
          </div>
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-4xl font-bold font-heading tracking-normal sm:text-7xl md:text-9xl"
            style={{
              backgroundImage: "linear-gradient(to right, #FFFFFF, #F3E9FF, #E0D4FF, #C4B7FF, #8678F9)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <Feeder feed="Github" icon={<IconBrandGithub />} />
            <div className="mb-4"></div>
            See ATS Fit powered with AI

          </motion.h1>
          <motion.p
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-6 text-lg leading-8"
          >
            Get deep insights on how well your resume is optimized for ATS.
          </motion.p>

          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link href="/check-ats" className="z-50">
              <Button>Get started</Button>
            </Link>

            <Link
              href="https://github.com/sachind6/ats-checker"
              target="_blank"
              className="z-50"
            >
              <Button
                variant="ghost"
                className="outline-none bg-transparent hover:bg-transparent/5"
              >
                <IconBrandGithub className="mx-2" /> Get the Code &nbsp;
                <span aria-hidden="true">→</span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-16 flow-root sm:mt-24">
        <motion.div
          className="rounded-md"
          initial={{ y: 100, opacity: 0 }} // Image starts from 100px below and fully transparent
          animate={{ y: 0, opacity: 1 }} // Image ends at its original position and fully opaque
          transition={{ type: "spring", stiffness: 50, damping: 20 }} // transition specifications
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            ></motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
