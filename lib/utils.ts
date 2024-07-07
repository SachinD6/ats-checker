import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as emailValidator from "email-validator";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



const sectionKeywords = {
  personalInfo: ["email", "phone", "linkedin", "github", "contact", "address"],
  summary: ["summary", "objective", "professional summary", "career summary"],
  education: ["education", "academic background", "academic qualifications"],
  workExperience: ["experience", "work experience", "employment history", "professional experience", "career history", "work history"],
  skills: ["skills", "technical skills", "key skills", "core competencies", "tools"],
  certifications: ["certifications", "licenses", "accreditations"],
  projects: ["projects", "portfolio", "case studies"],
  languages: ["languages", "language proficiency", "language skills"],
  awards: ["awards", "honors", "recognitions"],
  publications: ["publications", "research papers", "articles", "patents"],
  volunteerExperience: ["volunteer experience", "community service", "volunteer work", "extracurricular"],
  professionalMemberships: ["professional memberships", "affiliations", "memberships"],
  interests: ["interests", "hobbies", "personal interests"],
  references: ["references", "referees"],
};

const detectSection = (line: string): keyof typeof sectionKeywords | null => {
  for (const section in sectionKeywords) {
    if (sectionKeywords[section as keyof typeof sectionKeywords].some(keyword => line.toLowerCase().includes(keyword))) {
      return section as keyof typeof sectionKeywords;
    }
  }
  return null;
};

const extractPersonalInfo = (line: string, sections: any) => {
  if (emailValidator.validate(line)) {
    sections.personalInfo.push(`Email: ${line}`);
  } else if (line.match(/\b\d{10,}\b/)) {
    sections.personalInfo.push(`Phone: ${line}`);
  } else if (line.toLowerCase().includes("linkedin")) {
    sections.personalInfo.push(`LinkedIn: ${line}`);
  } else if (line.match(/^(?!.*@)[a-zA-Z\s]+$/) && sections.personalInfo.length === 0) {
    sections.personalInfo.push(`Name: ${line}`);
  } else {
    sections.personalInfo.push(line);
  }
};

export const cleanText = (text: string) => {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line);

    const sections = {
      personalInfo: [] as string[],
      summary: [] as string[],
      education: [] as string[],
      workExperience: [] as string[],
      skills: [] as string[],
      certifications: [] as string[],
      projects: [] as string[],
      languages: [] as string[],
      awards: [] as string[],
      publications: [] as string[],
      volunteerExperience: [] as string[],
      professionalMemberships: [] as string[],
      interests: [] as string[],
      references: [] as string[],
    };
  

  let currentSection: keyof typeof sections | null = null;

  lines.forEach((line) => {
    const detectedSection = detectSection(line);
    if (detectedSection) {
      currentSection = detectedSection;
      if (detectedSection !== 'personalInfo') {
        sections[currentSection].push(line); // Add the section header for context
      }
    } else if (currentSection) {
      if (currentSection === 'personalInfo') {
        extractPersonalInfo(line, sections);
      } else {
        sections[currentSection].push(line);
      }
    } else {
      sections.personalInfo.push(line); // Fallback to personal info if no section is detected yet
    }
  });

  // Post-process sections to remove headers if necessary
  for (const section in sections) {
    const sectionData = sections[section as keyof typeof sections];
    if (sectionData.length > 0 && sectionData[0].toLowerCase().includes(sectionKeywords[section as keyof typeof sections][0])) {
      sectionData.shift(); // Remove section header
    }
  }

  return sections;
};

