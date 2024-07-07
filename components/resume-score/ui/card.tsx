import {
  AlertTriangle,
  CheckCircleIcon,
  StarIcon,
  ThumbsUpIcon,
  XCircleIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface CardDemoProps extends CardProps {
  title: string;
  items: string[];
  iconType: "success" | "failure" | "strength" | "weakness" | "suggestion";
}

export function ResultCard({
  className,
  title,
  items,
  iconType,
  ...props
}: CardDemoProps) {
  const iconMap = {
    success: <CheckCircleIcon className="text-green-600 w-5 h-5" />,
    failure: <XCircleIcon className="text-red-600 w-5 h-5" />,
    suggestion: <ThumbsUpIcon className="text-blue-600 w-5 h-5" />,
    strength: <StarIcon className="text-violet-600 w-5 h-5" />,
    weakness: <AlertTriangle className="text-orange-600 w-5 h-5" />,
  };
  return (
    <Card
      className={cn(
        "min-w-[400px] border border-black/[0.2] bg-gradient-to-tr from-purple-400/20 to-transparent dark:border-white/[0.2]",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {items.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0 last:pb-0">
              <div className="flex gap-3 items-center border p-2 border-dashed rounded-lg bg-primary-foreground dark:bg-muted shadow-sm">
                <div>{iconType && <div>{iconMap[iconType]}</div>}</div>
                <p className="text-lg leading-6">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
