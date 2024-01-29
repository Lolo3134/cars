import React from 'react';

interface FooterItemProps {
  name: string;
  icon: React.ElementType | string; 
}

const FooterItem: React.FC<FooterItemProps> = ({ name, icon }) => {
  return (
    <div className="footer__item">
      <img className="icon" src={icon} alt="" />
      <div className="footer__item__name">
        <img src="/arrow-footer.svg" alt="" />
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default FooterItem;
