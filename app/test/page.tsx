import Card from "@/components/ui/card-new";
import {
  IconBrandGithub as Github,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import WebVitals from "@/components/ui/web-vitals";
import ComponentGrid from "@/components/ui/component-grid";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade";
import { ATSCORE } from "@/components/resume-score/ui/ats-score";

const DEPLOY_URL = "/";

const features = [
  {
    title: "AI-Powered Resume Analysis",
    description:
      "Get instant feedback on your resume with AI-powered analysis that checks for formatting, keyword optimization, and overall readability.",
    large: true,
  },
  {
    title: "Performance Metrics",
    description:
      "Built on advanced algorithms and machine learning models to ensure accurate and fast resume evaluations.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description:
      "Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Built-in Auth + Database",
    description:
      "Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: "Real-Time Content Suggestions",
    description:
      "Receive real-time content suggestions and tips to enhance your resume's impact and effectiveness.",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];

export default function Page() {
  return (
    <>
    <ATSCORE score={40} />
      <div className="w-full max-w-xl px-5 mx-auto xl:px-0 drop-shadow-sm pt-12 text-center">
      <BlurFade delay={0.07} inView>
          <a
            href="https://twitter.com/steventey/status/1613928948915920896"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <Twitter className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0] drop-shadow-sm">
              Introducing Precedent
            </p>
          </a>
        </BlurFade>

        <BlurFade delay={0.5}>
          <h1
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, black, #78716c)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            See your ATS fit powered by AI
          </h1>

          <p className="mt-6 text-center text-gray-500 md:text-xl">
            Get expert tips and instant feedback to refine your resume. Built
            with{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="underline font-semibold text-neutral-600"
            >
              Next.js 15
            </a>{" "}
            <a
              href="https://ai.google.dev/"
              target="_blank"
              className="underline font-semibold text-neutral-600"
            >
              , Gemini AI
            </a>{" "}
            &{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              className="underline font-semibold text-neutral-600"
            >
              Shadcn UI
            </a>
            .
          </p>
        </BlurFade>

        <div className="mx-auto mt-6 flex items-center justify-center space-x-5">
          <a
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white hover:bg-white hover:text-black"
            href={DEPLOY_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Deploy to Vercel</p>
          </a>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/steven-tey/precedent"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub
            </p>
          </a>
        </div>
      </div>

      <div className="my-10 grid w-full max-w-screen-xl grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0 mx-auto">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large?.toString()}
            />
          ))}
      </div>
    </>
  );
}
