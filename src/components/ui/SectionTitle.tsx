import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
  as: Component = "h2",
}: SectionTitleProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <Component
        className={cn(
          "font-semibold text-neutral-900",
          Component === "h1" && "text-4xl md:text-5xl lg:text-6xl",
          Component === "h2" && "text-3xl md:text-4xl",
          Component === "h3" && "text-2xl md:text-3xl"
        )}
      >
        {title}
      </Component>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export { SectionTitle };
