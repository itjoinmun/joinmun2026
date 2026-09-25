import { FaqItem, type FaqItemProps } from "@/src/components/landing/faq-item";
import Container from "@/src/components/ui/container";

export type FaqEntry = Pick<FaqItemProps, "question" | "answer" | "defaultOpen">;
export interface FaqProps {
  title?: string;
  items: FaqEntry[];
}
export function Faq({ title = "Frequently Asked Questions", items }: FaqProps) {
  const midIndex = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midIndex);
  const rightColumn = items.slice(midIndex);

  return (
    <section className="w-full py-12 bg-[#FDFAEC]">
      <Container>
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
      </Container>
    </section>
  );
}
