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


const posts = [
    {
        _id: "2",
        title: "Customizable Templates",
        description: "Choose from a variety of customizable templates to suit your personal style and professional needs.",
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
      _id: "8",
      title: "ATS Compatibility",
      description: "Ensure your resume is compatible with Applicant Tracking Systems (ATS) for better visibility.",
      date: "2024-07-04",
      slug: "ats-compatibility",
  },
  {
    _id: "1",
    title: "AI-Powered Resume Creation",
    description: "Generate professional resumes with the power of artificial intelligence, ensuring optimal format and content.",
    date: "2024-07-04",
    slug: "ai-powered-resume-creation",
},

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
                slug={post.slug}
              />

              // <article
              //   key={post._id}
              //   className="group relative flex flex-col space-y-2"
              // >
              //   {post.image && (
              //     <Image
              //       src={post.image}
              //       alt={post.title}
              //       width={804}
              //       height={452}
              //       className="rounded-md border bg-muted transition-colors"
              //       priority={index <= 1}
              //     />
              //   )}
              //   <h2 className="text-2xl font-extrabold">{post.title}</h2>
              //   {post.description && (
              //     <p className="text-muted-foreground">{post.description}</p>
              //   )}
              //   {post.date && (
              //     <p className="text-sm text-muted-foreground">
              //       {formatDate(post.date)}
              //     </p>
              //   )}
              //   <Link href={post.slug} className="absolute inset-0">
              //     <span className="sr-only">View Article</span>
              //   </Link>
              // </article>
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
          {/* <button className="bg-transparent mt-2 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transparent py-2.5 px-4 ring-1 ring-white/10 ">
              <span>{"Explore More"}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                ></path>
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </button> */}
        </Link>
      </div>
    </div>
  );
};

export default Features;