import React from 'react';
import FooterItem from './footerItem';
import './footer.css';
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
    <footer id="footer">
      <div className="container">
        <div className="footer__container">
          {items.map((item, index) => (
            <FooterItem key={index} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
