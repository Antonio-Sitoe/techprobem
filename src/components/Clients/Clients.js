import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Svg } from "../QuoteSvg/Svg";
import { testemunialContent } from "../../helper/testemunial";
import { Section, Slide, Testemunial } from "./style";
import "@splidejs/splide/dist/css/splide.min.css";

const Clients = () => {
  return (
    <Section id="apoio">
      <div className="container">
        <h2>Os nossos Apoiadores</h2>
        <main>
          <div className="content">
            <Image src="/logo2.png" alt="" width={400} height={200} />
          </div>
          <div className="sliders">
            <Splide
              options={{
                type: "slide",
                perPage: 3,
                width: 900,
                pagination: false,
                gap: "1rem",
              }}
              renderControls={() => (
                <Slide className="splide__arrows">
                  <button className="splide__arrow--prev">{"<"}</button>
                  <button className="splide__arrow--next">{">"}</button>
                </Slide>
              )}
            >
              {testemunialContent.map(({ description, name }, i) => {
                return (
                  <SplideSlide key={i}>
                    <Testemunial>
                      <Svg />
                      <p>{description}</p>
                      <div>
                        <div>
                          <h5>{name}</h5>
                        </div>
                      </div>
                    </Testemunial>
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </main>
      </div>
    </Section>
  );
};

export default Clients;
