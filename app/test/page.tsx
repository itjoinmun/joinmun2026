import { FaqSection } from "@/src/modules/landing/faq-section";
import { faqItems } from "@/src/modules/landing/faq-data";

export default function FaqPage() {
  return <FaqSection items={faqItems} />;
}