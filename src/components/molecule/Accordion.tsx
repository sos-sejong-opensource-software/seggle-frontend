import { tw } from '@/utils/tailwindMerge';
import { Heading, ErrorMessage } from '@/components';

type AccordionProps<T extends React.ElementType> = Component<T> & {
  details: {
    id: number;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
};
type AccordionItemProps<T extends React.ElementType> = Component<T>;

export function Accordion({ details, className, ...props }: AccordionProps<'details'>) {
  return (
    <div className="p-5 rounded-2xl shadow-[0_12px_20px_6px_rgb(0,0,0,0.1)] cursor-pointer">
      {details.length ? (
        details.map(({ id, title, content }) => (
          <details key={id} className={tw('group py-3', className)} {...props}>
            <AccordionTitle>{title}</AccordionTitle>
            <AccordionContent>{content}</AccordionContent>
          </details>
        ))
      ) : (
        /** FIXME: 데이터가 없는 경우, 에러가 아니라 다른 용어 사용 */
        <ErrorMessage className="text-disabled-400 text-base">등록된 내용이 없습니다.</ErrorMessage>
      )}
    </div>
  );
}

function AccordionTitle({ children }: AccordionItemProps<'summary'>) {
  return (
    <summary className="flex justify-between items-center">
      <Heading as="h5" className="font-semibold">
        {children}
      </Heading>
      <ArrowIcon />
    </summary>
  );
}

function AccordionContent({ children }: AccordionItemProps<'div'>) {
  return <div className="pt-4 text-gray-600">{children}</div>;
}

function ArrowIcon() {
  return (
    <span className="transition-all group-open:rotate-180">
      <svg
        fill="none"
        height="24"
        shapeRendering="geometricPrecision"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M6 9l6 6 6-6"></path>
      </svg>
    </span>
  );
}