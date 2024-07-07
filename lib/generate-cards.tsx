import React from "react";
import {
  HashIcon,
  ClipboardIcon,
  TypeIcon,
  TextIcon,
} from "lucide-react";


// TODO: Fix the type of the result parameter
export const generateCards = (result: any) => [
  {
    id: 1,
    content: (
      <div>
        <span className="text-lg font-semibold flex gap-2">
          <HashIcon className="h-5 w-5" />
          Relevance
        </span>
        <p>{result?.result.relevance}</p>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    id: 2,
    content: (
      <div>
        <span className="text-lg font-semibold flex gap-2 items-center">
          <ClipboardIcon className="h-5 w-5" />
          Grammar
        </span>
        <p>{result?.result.suggestions.grammar}</p>
      </div>
    ),
    className: "col-span-1",
  },
  {
    id: 3,
    content: (
      <div>
        <span className="text-lg font-semibold flex gap-2 items-center">
          <TypeIcon className="h-5 w-5" />
          Spelling
        </span>
        <p>{result?.result.suggestions.spelling}</p>
      </div>
    ),
    className: "col-span-1",
  },
  {
    id: 4,
    content: (
      <div>
        <span className="text-lg font-semibold flex gap-2 items-center">
          <TextIcon className="h-5 w-5" />
          Formatting
        </span>
        <p>{result?.result.suggestions.formatting}</p>
      </div>
    ),
    className: "md:col-span-2",
  },
];
