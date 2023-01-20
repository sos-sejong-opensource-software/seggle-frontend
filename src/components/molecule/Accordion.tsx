import { tw } from '@/utils/tailwindMerge';
import { Heading } from '@/components';

type AccordionProps<T extends React.ElementType> = Component<T> & {
  accordions: {
    id: number;
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
};

export function Accordion({ accordions, className, ...props }: AccordionProps<'div'>) {
  return (
    <div
      className={tw(
        'p-5 rounded-2xl shadow-[0_12px_20px_6px_rgb(0,0,0,0.1)] cursor-pointer',
        className
      )}
      {...props}
    >
      {accordions?.map(({ id, title, content }) => (
        <details key={id} className="group py-3">
          <summary className="flex justify-between items-center">
            <Heading as="h5" className="font-semibold">
              {title}
            </Heading>
            <ArrowIcon />
          </summary>
          <div className="pt-4 text-gray-600">{content}</div>
        </details>
      ))}
    </div>
  );
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
