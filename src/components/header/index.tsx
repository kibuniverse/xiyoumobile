import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Avatar } from 'antd';
import { filter } from 'remeda';
import { debounce } from 'lodash';

import { menu } from '../../menu';
import './index.less';

interface Menu {
  key: string;
  path: string;
  title: string;
  component: React.FC<any>;
  notInMenu?: undefined | boolean;
}

const Header: React.FC = () => {
  const [key, setKey] = React.useState('home');

  const realMenu: Menu[] = filter((menuItem: Menu) => !menuItem.notInMenu)(
    menu,
  );
  return (
    <header className={`header ${key === 'home' ? 'opcaity' : ''}`}>
      <div className="logo" />
      <div className="menu-router">
        {realMenu.map((item) => (
          <Link
            className="menu-item"
            key={item.key}
            to={item.path}
            onClick={() => {
            setKey(item.key)
          }}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
