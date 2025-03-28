import { cn } from "@/lib/utils";

export const Icon = ({ name }: { name: string }) => (
  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600", name)}>
    <div className="w-6 h-6 bg-current rounded-md"></div>
  </div>
);
