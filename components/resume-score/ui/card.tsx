import { BellRing, CheckCircleIcon, CheckIcon, XCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

interface CardDemoProps extends CardProps {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

export function CardDemo({ className, title, items, icon, ...props }: CardDemoProps) {
  return (
    <Card className={cn("min-w-[400px] dark:shadow-lg shadow-sm", className)} {...props}>
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
              <div className="flex gap-3 items-center">
                {/* {
                    title === "Mistakes" ? <XCircleIcon className="text-red-600 w-5 h-5" /> : <CheckCircleIcon className="text-green-600 w-5 h-5" />
                } */}
                <div>
                { icon }
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
