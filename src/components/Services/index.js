import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServiceElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={"images/svg-5.svg"} />
          <ServicesH2>Reduza despesas</ServicesH2>
          <ServicesP>Ajudamos a reduzir suas taxas e aumentar sua receita geral</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/svg-6.svg"} />
          <ServicesH2>Escritórios Virtuais</ServicesH2>
          <ServicesP>Você pode acessar nossa plataforma online em qualquer lugar do mundo</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"images/svg-7.svg"} />
          
          
          <ServicesP> <ServicesH2>Sistema Gratuito</ServicesH2>
          <ServicesP>Nosso sistema é 100% Gratuito, sem pegadinhas</ServicesP></ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
