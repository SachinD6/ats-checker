"use server";

import pdf from "pdf-parse";
import mammoth from "mammoth";
import path from "path";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import { cleanText } from "@/lib/utils";

// Function to parse PDF files using pdf-parse
const parsePdf = async (dataBuffer: Buffer): Promise<string> => {
  const data = await pdf(dataBuffer);
  return data.text;
};

// Main function to parse the resume
export const parseResume = async (data: FormData) => {
  const formData = Object.fromEntries(data);

  // const file: File | null = data.get('file') as unknown as File;
  const file: File | null = formData.file as File;
  const role = formData.role;

  if (!file) throw new Error("No file uploaded");

  const buffer = await file.arrayBuffer();
  const dataBuffer = Buffer.from(buffer);

  const resumeExtension = path.extname(file.name).toLowerCase();

  let resumeData: any = null;

  try {
    if (resumeExtension === ".pdf") {
      resumeData = await parsePdf(dataBuffer);
      resumeData = cleanText(resumeData);
    } else if (resumeExtension === ".docx") {
      const result = await mammoth.extractRawText({ buffer: dataBuffer });
      resumeData = cleanText(result.value);
      resumeData = result;
    } else {
      throw new Error("Unsupported file type");
    }
  } catch (error) {
    console.error("Error parsing resume:", error);
    throw new Error("Error parsing resume");
  }

  console.log(resumeData);

  const { object } = await generateObject({
    model: google("models/gemini-1.5-pro-latest"),
    schema: z.object({
      result: z.object({
        atsScore: z.number(),
        generalFeedback: z.string(),
        mistakes: z.array(z.string()),
        correctThings: z.array(z.string()),
        relevance: z.string(),
        suggestions: z.object({
          grammar: z.string(),
          spelling: z.string(),
          strengths: z.array(z.string()),
          weaknesses: z.array(z.string()),
          improvement: z.array(z.string()),
          formatting: z.string(),
        }),
      }),
    }),
    system: `You are a professional ATS checker responsible for evaluating resumes for ATS compatibility. You will provide feedback on the resume's content, grammar, spelling, and formatting, as well as suggestions for improvement. You will give an overall score for the resume, assess its relevance to the job description, and identify strengths and weaknesses. Additionally, you will provide general feedback, highlight mistakes, and note correct elements in the resume.
`,
    prompt: `
I have provided a structured resume below. Please review it and provide detailed feedback and suggestions for improvement. Your analysis should cover the following areas:

ATS Compatibility Score out of 100: Evaluate the resume's compatibility with Applicant Tracking Systems (ATS) and suggest ways to improve it.
General Feedback: Provide an overall assessment of the resume, including strengths and areas for improvement.
Grammar and Spelling: Identify and correct any grammatical or spelling mistakes.
Good Practices: Highlight any positive aspects of the resume, such as strong skills or relevant experience.
Formatting and Readability: Assess the resume's formatting and readability. Suggest any changes to improve clarity and visual appeal.
Content Relevance: Evaluate the relevance of the content in relation to the desired role. Identify any missing information or unnecessary details.
Skills and Keywords: Check if the resume includes relevant skills and keywords for the target job role. Suggest additional keywords if necessary.
Accomplishments and Impact: Assess how well the resume highlights accomplishments and the impact of previous work. Suggest improvements to better showcase achievements.
Personalization for Target Role: Provide advice on tailoring the resume for a specific job role or industry.
Consistency and Professionalism: Evaluate the consistency and professional tone throughout the resume. Suggest ways to enhance professionalism and coherence.


    Here is the Resume for the role ${role}:
     ${JSON.stringify(resumeData, null, 2)}`
  });

  return object;
};
