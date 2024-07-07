"use client";

import { TrendingUp } from "lucide-react";
import {
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  Label,
} from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function getFeedbackMessage(score: number) {
  if (score >= 90) {
    return "Excellent work! Your resume is highly optimized for ATS.";
  } else if (score >= 75) {
    return "Great job! Your resume is well-structured and ATS-friendly.";
  } else if (score >= 60) {
    return "Good effort! Your resume meets many ATS criteria.";
  } else if (score >= 45) {
    return "Not bad, but also not good. Consider making a few improvements.";
  } else if (score >= 30) {
    return "Needs improvement. Your resume may struggle with ATS.";
  } else {
    return "Significant improvements needed to make your resume ATS-friendly.";
  }
}

function getActionableTips(score: number) {
  if (score >= 90) {
    return [
      "Keep your resume updated with your latest achievements.",
      "Consider adding more relevant keywords to match job descriptions.",
    ];
  } else if (score >= 75) {
    return [
      "Refine your resume further by adding specific metrics to your achievements.",
      "Ensure your formatting is consistent throughout the document.",
    ];
  } else if (score >= 60) {
    return [
      "Focus on improving the clarity of your job descriptions.",
      "Use more action verbs and industry-specific terminology.",
    ];
  } else if (score >= 45) {
    return [
      "Consider rephrasing sections to make them more concise.",
      "Review your resume for any potential formatting issues.",
    ];
  } else if (score >= 30) {
    return [
      "Highlight your most relevant experience prominently.",
      "Ensure your resume is free from any grammatical or spelling errors.",
    ];
  } else {
    return [
      "Revamp your resume structure to be more ATS-friendly.",
      "Seek professional help to improve your resume's effectiveness.",
    ];
  }
}

export function ATSCORE({ score }: { score: number | string }) {
  const chartData = [
    { browser: "safari", score: score, fill: "var(--color-safari)" },
  ];

  const feedbackMessage = getFeedbackMessage(Number(score));
  const actionableTips = getActionableTips(Number(score));

  return (
    <Card className="flex flex-col my-6">
      <CardHeader className="items-center pb-0">
        <CardTitle>{feedbackMessage}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            width={300}
            height={300}
            data={chartData}
            startAngle={0} // Start from the right side
            endAngle={(360 * Number(score)) / 100} // Adjusting the end angle based on score
            innerRadius={80}
            outerRadius={140}
            className="fill-primary"
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="score" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {score.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          out of 100
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {actionableTips[0]}
        </div>
        <div className="leading-none text-muted-foreground">
          {actionableTips[1]}{" "}
        </div>
      </CardFooter>
    </Card>
  );
}
