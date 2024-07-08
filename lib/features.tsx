
import WebVitals from "@/components/ui/web-vitals";
import Link from "next/link";
import { IconSparkles } from "@tabler/icons-react";
import { Cloud } from "lucide-react";

export const URL = "/check-ats";

export const features = [
  {
    title: "AI-Powered Resume Analysis",
    description:
      "Get instant feedback on your resume with AI-powered analysis that checks for formatting, keyword optimization, and overall readability.",
      demo: <><IconSparkles size={120} className="text-blue-400"/></>,
    large: true,
  },
  {
    title: "Resume Scoring",
    description:
      "Built on top of LLM models to ensure accurate and fast resume evaluations.",
    demo: <WebVitals />,
  },
  {
    title: "One-Click ATS Check",
    description:
      "Easily check your resume's compatibility with ATS systems with just one click.",
    demo: (
      <Link
        className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white hover:bg-white hover:text-black"
        href={URL}
      >
        <p>Check ATS Fit</p>
      </Link>
    ),
  },
  {
    title: "Keywords cloud",
    description:
      "Get cloud of keywords, synonyms and alternative phrasing to use for specific job roles!",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Cloud size={110} className="text-blue-400" />
      </div>
    ),
  },
  {
    title: "Real-Time Suggestions",
    description:
      "Receive real-time content suggestions and tips to enhance your resume's impact and effectiveness.",
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">grammar</span>
        <span className="font-mono font-semibold">formatting</span>
        <span className="font-mono font-semibold">role relevance</span>
        <span className="font-mono font-semibold">AI suggestions</span>
        <span className="font-mono font-semibold">mistakes</span>
        <span className="font-mono font-semibold">strength</span>
      </div>
    ),
  },
];