import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="sobre" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="descobrir" onClick={toggle}>
            Descobrir
          </SidebarLink>
          <SidebarLink to="serviços" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="inscrever-se" onClick={toggle}>
          Inscrever-se
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Entrar</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
