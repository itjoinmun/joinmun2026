import { cn } from "@/src/lib/utils";

const Container = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cn(
        `mx-auto flex w-full max-w-400 flex-col gap-1 overflow-hidden px-6 md:px-34`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
