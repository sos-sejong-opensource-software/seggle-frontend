import { Accordion, Heading } from '@/components';

import { useFaqAccordion } from './hooks';

export function Faq() {
  const accordions = useFaqAccordion();
  return (
    <>
      <Heading>자주 묻는 질문</Heading>
      <Accordion accordions={accordions ?? []} />
    </>
  );
}
