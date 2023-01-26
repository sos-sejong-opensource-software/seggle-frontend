import { NavLink, LinkProps } from 'react-router-dom';

import { tw } from '@/utils/tailwindMerge';

type HeaderProps<T extends React.ElementType> = Component<T>;
type MenuListProps<T extends React.ElementType> = Component<T> & {
  menuList: { name: string; to: string }[];
};
type ToggleButtonProps<T extends React.ElementType> = Component<T> & {
  on: boolean;
};

function HeaderContainer({ className, children, ...props }: HeaderProps<'header'>) {
  return (
    <header className={tw('', className)} {...props}>
      {children}
    </header>
  );
}

function Logo({ className, children, ...props }: HeaderProps<'span'>) {
  return (
    <span className={tw('ml-3 text-lg font-bold sm:text-xl', className)} {...props}>
      <NavLink to="/">{children}</NavLink>
    </span>
  );
}

function Menu({ to, className, children, ...props }: LinkProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          tw(`hover:font-bold ${isActive ? 'font-bold' : ''}`, className)
        }
        {...props}
      >
        {children}
      </NavLink>
    </li>
  );
}

function MenuList({ menuList, className, children, ...props }: MenuListProps<'ul'>) {
  return (
    <ul className={tw('', className)} {...props}>
      {menuList.map(({ name, to }, index) => (
        <Menu to={to} key={index}>
          {name}
        </Menu>
      ))}
      {children}
    </ul>
  );
}

function ToggleButton({ on, onClick, className, ...props }: ToggleButtonProps<'button'>) {
  return (
    <button type="button" onClick={onClick} className={tw('w-6 h-6', className)} {...props}>
      <span className="sr-only">메인 메뉴 열기</span>
      <div aria-hidden="true">
        <span
          className={tw(
            `block h-[1px] w-5 bg-current transform transition duration-300 ease-in-out ${
              on ? '-rotate-45 translate-y-[1px]' : 'translate-y-1.5'
            }`
          )}
        ></span>
        <span
          className={tw(
            `block h-[1px] w-5 bg-current transform transition duration-300 ease-in-out ${
              on ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
            }`
          )}
        ></span>
      </div>
    </button>
  );
}

export const Header = Object.assign(HeaderContainer, {
  Menu,
  MenuList,
  Logo,
  ToggleButton,
});
