import { useState } from 'react';

import { Header, LinkButton } from '@/components';
import { PATH } from '@/constants';

export function MainHeader() {
  const [showMenu, setShowMenu] = useState(false);

  const handleButtonClick = () => {
    setShowMenu((state) => !state);
  };

  const menuList = [
    { name: '대회', to: PATH.COMPETITON_LIST },
    { name: '수업', to: PATH.CLASS_LIST },
    { name: '건의게시판', to: PATH.BOARD_LIST },
    { name: '공지사항', to: PATH.ANNOUNCEMENT_LIST },
    { name: 'FAQ', to: PATH.FAQ },
  ];

  return (
    <Header className="sticky flex top-0 h-16 w-full z-50 shadow-[0_12px_20px_6px_rgb(0,0,0,0.05)]">
      <nav className="flex flex-wrap items-center justify-between w-full px-4 sm:px-8">
        <Header.ToggleButton on={showMenu} onClick={handleButtonClick} className="sm:hidden" />
        <Header.Logo>Seggle</Header.Logo>
        <Header.MenuList
          menuList={menuList}
          className={`
            absolute top-16 left-0 flex flex-col items-center gap-4 w-full p-8 backdrop-blur-md
            ${showMenu ? 'flex' : 'hidden'}
            sm:static sm:flex sm:flex-row sm:w-auto sm:p-0
          `}
        />
        <ul>
          <li className="flex gap-2">
            <LinkButton to={PATH.LOGIN} className="text-sm sm:text-base">
              로그인
            </LinkButton>
            <LinkButton to={PATH.REGISTER} className="text-sm sm:text-base">
              회원가입
            </LinkButton>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
