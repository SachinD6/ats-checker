// import { allPosts } from "@/.contentlayer/generated";
import { PostCard } from "@/components/ui/card-binary-view";
// import { compareDesc } from "date-fns";
import { Separator } from "@/components/ui/separator";
import { TextGenerateEffect } from "@/components/ui/text-gen";

import Link from "next/link";
import HackyButton from "@/components/hacky-button";
const Features = () => {
//   const posts = allPosts
//     .filter((post) => post.date)
//     .sort((a, b) => {
//       PostCard;
//       return compareDesc(new Date(a.date), new Date(b.date));
//     });


//features for ai ats checker
const posts = [
    {
        _id: "2",
        title: "AI powered ATS checker",
        description: "Ensure your resume is compatible with Applicant Tracking Systems (ATS) for better visibility.",
        date: "2024-07-04",
        slug: "customizable-templates",
    },
    {
        _id: "3",
        title: "Real-Time Content Suggestions",
        description: "Receive real-time content suggestions and tips to enhance your resume's impact and effectiveness.",
        date: "2024-07-04",
        slug: "real-time-content"
    },

  {
    _id: "1",
    title: " Resume Scoring",
    description: "Generate professional resumes with the power of artificial intelligence, ensuring optimal format and content.",
    date: "2024-07-04",
    slug: "ai-powered-resume-creation",
},
  {
    _id: "5",
    title: "Resume Analytics",
    description: "Track the performance of your resume with detailed analytics and insights to optimize your job search.",
    date: "2024-07-04",
    slug: "resume-analytics",
  }

]

  const firstTwo = [posts[0], posts[1], posts[2], posts[3]];
  return (
    <div className="flex flex-col gap-5 justify-center items-center container max-w-4xl py-6 lg:py-10">
     <h1
  className="relative z-10 text-lg md:text-7xl font-headingAlt text-center font-bold mb-4"
  style={{
    background: "linear-gradient(to bottom, rgba(156, 39, 176, 0.9), rgba(255, 255, 255, 0.9))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  }}
>
  <TextGenerateEffect
    words="Get the trendy's one"
    className="text-lg md:text-6xl font-headingAlt text-center"
  />
</h1>

      <Separator />

      <div className="relative flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
        <hr className="my-8" />
        {firstTwo?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {firstTwo.map((post, index) => (
              <PostCard
                key={post._id}
                title={post.title}
                description={post.description!}
                date={post.date}
              />
            ))}
            <div className="absolute -top-4 -z-10 flex w-full justify-center">
              <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
            </div>
            <div className="absolute -top-4 -z-10 flex w-full justify-center">
              <div className="h-[310px] w-[310px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]" />
            </div>
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
      <div>
        <Link href={"/posts"}>
          <HackyButton key={12} text="Explore More" />
          
        </Link>
      </div>
    </div>
  );
};

export default Features;