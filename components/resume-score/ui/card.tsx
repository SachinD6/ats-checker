import { AlertTriangle, BellElectric, BellRing, CheckCircleIcon, CheckIcon, ForwardIcon, FrownIcon, InfoIcon, SmileIcon, StarIcon, ThumbsUpIcon, XCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface CardDemoProps extends CardProps {
  title: string;
  items: string[];
  iconType: "success" | "failure" |"strength" | "weakness" | "suggestion";
}

export function CardDemo({ className, title, items, iconType, ...props }: CardDemoProps) {
    const iconMap = {
        "success": <CheckCircleIcon className="text-green-600 w-5 h-5" />,
        "failure": <XCircleIcon className="text-red-600 w-5 h-5" />,
        "suggestion": <ThumbsUpIcon className="text-blue-600 w-5 h-5"/>,
        "strength": <StarIcon className="text-violet-600 w-5 h-5" />,
        "weakness": <AlertTriangle className="text-orange-600 w-5 h-5" />
    }
  return (
    <Card className={cn("min-w-[400px] border border-black/[0.2] bg-gradient-to-tr from-purple-400/20 to-transparent dark:border-white/[0.2]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* <div className="flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div> */}
        {/* </div> */}
        <div>
          {items.map((item, index) => (
            <div key={index} className="mb-4 last:mb-0 last:pb-0">
                {/* TODO: Change the bg colors */}
              <div className="flex gap-3 items-center border p-2 border-dashed rounded-lg bg-primary-foreground dark:bg-muted shadow-sm">
                {/* {
                    title === "Mistakes" ? <XCircleIcon className="text-red-600 w-5 h-5" /> : <CheckCircleIcon className="text-green-600 w-5 h-5" />
                } */}
                <div>
                { iconType && <div>{iconMap[iconType]}</div> }
                </div>
                {/* <CheckIcon className="text-green-600" /> */}
                <p className="text-lg leading-6">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
