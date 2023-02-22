import { createPortal } from 'react-dom';

import { tw } from '@/utils/tailwindMerge';
import { Heading } from '@/components';

type ModalProps<T extends React.ElementType> = Component<T> & {
  open: boolean;
};
type ModalItemProps<T extends React.ElementType> = Component<T>;

function ModalContainer({ open, children }: ModalProps<'div'>) {
  return open
    ? createPortal(
        <>
          <Dimmed />
          <div className="items-center flex fixed inset-0 z-50">
            <div className="flex flex-col mx-auto max-w-3xl p-6 rounded-lg shadow-lg bg-white">
              {children}
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}

function Header({ className, children, ...props }: ModalItemProps<'header'>) {
  return (
    <header className={tw('p-5 border-b border-slate-200', className)} {...props}>
      <Heading as="h4">{children}</Heading>
    </header>
  );
}

function Body({ className, children, ...props }: ModalItemProps<'main'>) {
  return (
    <main className={tw('p-6', className)} {...props}>
      {children}
    </main>
  );
}

function Footer({ className, children, ...props }: ModalItemProps<'footer'>) {
  return (
    <footer className={tw('flex justify-end p-6 border-t border-slate-200', className)} {...props}>
      {children}
    </footer>
  );
}

function Dimmed({ className, ...props }: ModalItemProps<'div'>) {
  return (
    <div
      className={tw('fixed inset-0 z-40 bg-black opacity-40', className)}
      aria-hidden="true"
      {...props}
    ></div>
  );
}

export const Modal = Object.assign(ModalContainer, {
  Dimmed,
  Header,
  Body,
  Footer,
});
