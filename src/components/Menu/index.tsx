import React, { useEffect } from 'react';
import { CloseButton, MenuContainer, MenuItem } from './styles';
import { ReactComponent as CloseIcon } from '../../assets/img/Close.svg';
import { MenuProps } from '../../types';


const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const sections = ['SCIENCE', 'GENERAL', 'ENTERTAINMENT', 'TECHNOLOGY', 'BUSINESS', 'HEALTH', 'SPORTS'];
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);
  
  return (
    <MenuContainer className={isOpen ? 'open' : ''}>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      
      {sections.map((section, index) => (
        <MenuItem key={index} onClick={onClose}>
          {section}
        </MenuItem>
      ))}
    </MenuContainer>
  );
};

export default Menu;