"use client";
import React, { useState } from "react";

import { parseResume } from "@/actions/analyze-resume";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Loader2Icon } from "lucide-react";
import { SkeletonCard } from "@/components/resume-score/ui/skeleton-card";
import ResultDisplay from "@/components/resume-score/ResultDisplay";
import { useToast } from "@/components/ui/use-toast";

// TODO: HANDLE SIZE MORE THAN 2MB
const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);
  const [role, setRole] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);
  const [result, setResult] = useState<null | {
    result: {
      atsScore: number;
      generalFeedback: string;
      mistakes: string[];
      correctThings: string[];
      relevance: string;
      suggestions: {
        grammar: string;
        spelling: string;
        strengths: string[];
        weaknesses: string[];
        improvement: string[];
        formatting: string;
      };
    };
  }>(null);

  const { toast } = useToast();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    // if (file?.size ?? 0 > MAX_FILE_SIZE) {
    //   setParseError("File size should be less than 2MB");
    //   toast({
    //     title: "Uh oh! Something went wrong.",
    //     description:
    //       parseError || "File size should be less than 2mb",
    //   });
    //   return;
    // }
    setSelectedFile(file);
    setParseError(null); // Clear any previous errors
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    if (selectedFile) {
      formData.append("file", selectedFile);
    }
    formData.append("role", role);

    try {
      const result = await parseResume(formData);
      setResult(result);
      setIsUploading(false);
    } catch (error: any) {
      setParseError(error?.message || "An error occurred");
      toast({
        title: "Uh oh! Something went wrong.",
        description: parseError || "Try refreshing the page & check you internet connectivity.",
      });
      setIsUploading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} action={handleSubmit} className="pt-32">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm ">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs mb-2">PDF</p>
            <p>{selectedFile?.name}</p>
          </div>
          <Input
            type="file"
            id="dropzone-file"
            name="dropzone-file"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={isUploading}
            className="hidden"
          />
        </label>
        <br />
        <Input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter your job role!"
        />{" "}
        <br />
        {/* <input type="text" name="role" value={role} onChange={()=> setRole(role)}/> <br/> */}
        <Button type="submit" disabled={isUploading || !selectedFile}>
          {isUploading ? (
            <>
              Generating ATS Score{" "}
              <Loader2Icon className="h-5 w-5 ml-3 animate-spin" />
            </>
          ) : (
            "Analyze Resume"
          )}
        </Button>
        {/* {parseError && <p className="error">{parseError}</p>} */}
      </form>

      {isUploading && <SkeletonCard />}

      {result && !parseError && <ResultDisplay result={result} />}
    </>
  );
};

export default UploadForm;
