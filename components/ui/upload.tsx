"use client";
import React, { useState } from "react";

import { parseResume } from "@/actions/parse-resume";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { ATSCORE } from "../resume-score/ui/ats-score";
import { CardDemo } from "../resume-score/ui/card";
import {
  CheckCircle2Icon,
  ClipboardIcon,
  Frown,
  HashIcon,
  Smile,
  TextIcon,
  ThumbsUp,
  TypeIcon,
  XCircleIcon,
} from "lucide-react";
import GeneralFeedback from "../resume-score/general-feedback";
import { LayoutGrid } from "@/components/ui/layout-grid";

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [role, setRole] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [parseError, setParseError] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setParseError(null); // Clear any previous errors
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUploading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("role", role);

    try {
      // Call your parseResume function here
      const result = await parseResume(formData);
      setResult(result);
      console.log(result);
      setIsUploading(false);
    } catch (error) {
      setParseError(error?.message || "An error occurred");
    }

    console.log(result);
  };

  const cards = [
    {
      id: 1,
      content: <div>
        <span className="text-lg font-semibo flex gap-2 font-semibold text-primary"><HashIcon className="h-5 w-5"/>Relevance</span>
        <p>
        {result?.result.relevance}
        </p>
        </div>,
      className: "md:col-span-2",
      
    },
    {
      id: 2,
      content: 
      <div>
        <span className="text-lg font-semibold flex gap-2 items-center text-primary"><ClipboardIcon className="h-5 w-5"/>Grammar</span>
        <p>      
        {result?.result.suggestions.grammar}
      </p>
      </div>,
      className: "col-span-1",
    },
  
    {
      id: 3,
      content: <div>
        <span className="text-lg font-semibold flex gap-2 items-center text-primary"><TypeIcon className="h-5 w-5"/>Spelling</span>
        <p>
        {result?.result.suggestions.spelling}
        </p>
      </div>,
      className: "col-span-1",
     
    },
    {
      id: 4,
      content: <div>
        <span className="text-lg font-semibold flex gap-2 items-center text-primary"><TextIcon className="h-5 w-5"/>Formatting</span>
        <p>
        {result?.result.suggestions.formatting}
        </p>
      </div>,
      className: "md:col-span-2",
     
    },
  ];

  return (
    <>
      <form onSubmit={handleSubmit} action={handleSubmit}>
        <Input
          type="file"
          accept="*"
          onChange={handleFileChange}
          disabled={isUploading}
        />
        <br />
        <Input
          type="text"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Enter your role!"
        />{" "}
        <br />
        {/* <input type="text" name="role" value={role} onChange={()=> setRole(role)}/> <br/> */}
        <Button type="submit" disabled={isUploading}>
          {isUploading ? "Generating ATS Score..." : "Analayze resume"}
        </Button>
        {parseError && <p className="error">{parseError}</p>}
      </form>

      {result && (
        <div className="p-4">
          <ATSCORE score={result.result.atsScore} />

          <LayoutGrid cards={cards} />

          <GeneralFeedback title={result.result.generalFeedback} />

          <div className="flex flex-wrap -mx-2 mt-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <CardDemo
                items={result.result.mistakes}
                title="Mistakes"
                iconType="failure"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <CardDemo
                items={result.result.correctThings}
                title="Good Practices"
                iconType="success"
              />
            </div>
            <div className="w-full px-2 mb-4">
              <CardDemo
                items={result.result.suggestions.improvement}
                title="Suggestions"
                iconType="suggestion"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mt-6">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <CardDemo
                items={result.result.suggestions.strengths}
                title="Strengths"
                iconType="strength"
              />
            </div>

            <div className="w-full md:w-1/2 px-2 mb-4">
              <CardDemo
                items={result.result.suggestions.weaknesses}
                title="Weaknesses"
                iconType="weakness"
              />
            </div>
          </div>
{/* 
          <h3 className="text-lg font-semibold mb-2">Relevance</h3>
          <p className="ml-4 mb-4">{result.result.relevance}</p>

          <h3 className="text-lg font-semibold mb-2">Suggestions</h3>
          <h4 className="text-md font-medium mb-1">Grammar</h4>
          <p className="ml-4 mb-4">{result.result.suggestions.grammar}</p>

          <h4 className="text-md font-medium mb-1">Spelling</h4>
          <p className="ml-4 mb-4">{result.result.suggestions.spelling}</p>

          <h4 className="text-md font-medium mb-1">Formatting</h4>
          <p className="ml-4">{result.result.suggestions.formatting}</p> */}
        </div>
      )}
    </>
  );
};

export default UploadForm;



