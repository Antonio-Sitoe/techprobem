import React from "react";
import MiniCard from "../MiniCard/MiniCard";
import { RegisterStyle, SectionMiniCard } from "./style";

function Register() {
  return (
    <RegisterStyle className="container" id="parte">
      <div>
        <h2>Quer fazer parte ?</h2>
        <p>Faça sua pré-inscrição e, em breve, entraremos em contato:</p>
      </div>
      <SectionMiniCard>
        <MiniCard title="Sou uma ONG ou projeto social" />
        <MiniCard title="Sou profissional de tecnologia buscando experiência" />
        <MiniCard title="Sou profissional de tecnologia com experiência" />
      </SectionMiniCard>
    </RegisterStyle>
  );
}

export default Register;
