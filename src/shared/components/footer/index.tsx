// footer.tsx
import React from 'react';
import FooterItem from './footerItem';
import s from './footer.module.scss';
import { Instagram, Telegram, WhatsApp, Twitter } from 'shared/constants';

interface Item {
 name: string;
 icon: React.ElementType | string;
}

const Footer: React.FC = () => {
  const items: Item[] = [
    { name: 'Instagram', icon: Instagram },
    { name: 'Telegram', icon: Telegram },
    { name: 'WhatsApp', icon: WhatsApp },
    { name: 'Twitter', icon: Twitter },
  ];

  return (
    <footer id={s.footer}>
      <div className={s.container}>
        <div className={s.footer__container}>
          {items.map((item, index) => (
            <FooterItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
