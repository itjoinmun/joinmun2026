import { FaqItem, type FaqItemProps } from "@/src/components/landing/faq-item";

export type FaqEntry = Pick<FaqItemProps, "question" | "answer" | "defaultOpen">;
export interface FaqSectionProps {
  title?: string;
  items: FaqEntry[];
}
export function FaqSection({ title = "Frequently Asked Questions", items }: FaqSectionProps) {
  const midIndex = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midIndex);
  const rightColumn = items.slice(midIndex);

  return (
    <section className="w-full px-4 py-12 md:px-30">
      <h2 className="font-h4 md:font-h1 text-black mb-6 md:mb-8">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-9 items-stretch">
        <div className="flex flex-col gap-3">
          {leftColumn.map((item, i) => (
            <div key={`left-${i}`} className="flex-1 flex flex-col">
              <FaqItem {...item} className="h-full" />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {rightColumn.map((item, i) => (
            <div key={`right-${i}`} className="flex-1 flex flex-col">
              <FaqItem {...item} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}