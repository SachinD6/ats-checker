import React from "react";
import { ATSCORE } from "../resume-score/ui/ats-score";
import { ResultCard } from "@/components/resume-score/ui/card";
import GeneralFeedback from "../resume-score/general-feedback";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { generateCards } from "@/lib/generate-cards"; // Adjust the path according to your project structure

//TODO: Fix the type of the result parameter

const ResultDisplay = ({ result }: { result: any }) => {
  const cards = generateCards(result);

  return (
    <div className="p-4">
      <ATSCORE score={result.result.atsScore} />
      <LayoutGrid cards={cards} />
      <GeneralFeedback title={result.result.generalFeedback} />
      <div className="flex flex-wrap -mx-2 mt-6">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <ResultCard
            items={result.result.mistakes}
            title="Mistakes"
            iconType="failure"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <ResultCard
            items={result.result.correctThings}
            title="Good Practices"
            iconType="success"
          />
        </div>
        <div className="w-full px-2 mb-4">
          <ResultCard
            items={result.result.suggestions.improvement}
            title="Suggestions"
            iconType="suggestion"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mt-6">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <ResultCard
            items={result.result.suggestions.strengths}
            title="Strengths"
            iconType="strength"
          />
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <ResultCard
            items={result.result.suggestions.weaknesses}
            title="Weaknesses"
            iconType="weakness"
          />
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
