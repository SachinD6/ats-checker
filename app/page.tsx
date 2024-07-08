import Card from "@/components/ui/card-new";
import {
  IconBrandGithub as Github,
  IconBrandGithubFilled,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import ComponentGrid from "@/components/ui/component-grid";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { features } from "@/lib/features";
import { LucideSparkle } from "lucide-react";

export default function Page() {
  return (
    <>
      <div className="w-full max-w-xl px-5 mx-auto xl:px-0 drop-shadow-sm text-center pt-32">
      <BlurFade delay={0.07} inView>
          <a
            href="https://ai.google.dev"
            target="_blank"
            rel="noreferrer"
            className="mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
          >
            <LucideSparkle className="h-5 w-5 text-[#1d9bf0]" />
            <p className="text-sm font-semibold text-[#1d9bf0] drop-shadow-sm">
              Powered by Gemini
            </p>
          </a>
        </BlurFade>

        <BlurFade delay={0.5}>
          <h1
            className="text-center font-display text-4xl font-bold tracking-tight text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
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
          <Link
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white hover:bg-white hover:text-black"
            href="/check-ats"
          
          >
         
            <p>Analyse Resume</p>
          </Link>
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/sachind6/ats-checker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithubFilled />
            <p>
              <span className="hidden sm:inline-block">Source Code</span> 
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
