import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";

import Button from "../components/Button.jsx";
import gsap from "gsap";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const imageRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("alex.silva250@hotmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotation: "+=360",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Oi, sou Alexandre Fernandes</p>
              <p className="grid-subtext">
                Com ampla experiência no desenvolvimento web, aprimorei minhas
                habilidades tanto no front quanto no back-end, criando websites
                dinâmicos e responsivo.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
              ref={imageRef}
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Sou especialista em uma série de linguagens, frameworks, and
                ferramentas que me permite construir soluções robustas e
                escaláveis.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: -23.5489,
                    lng: -46.6388,
                    text: "Sao Paulo, Brazil",
                    color: "white",
                    resolution: 5,
                    dotRadius: 10,
                  },
                ]}
                labelSize={3}
                labelDotRadius={1.2}
                labelResolution={10}
              />
            </div>
            <div>
              <p className="grid-headtext">
                Sou muito flexível com fuso horários, comunicação e localização
              </p>
              <p className="grid-subtext">
                Atualmente vivo em São Paulo, Brasil, mas estou aberto a
                trabalhar remotamente para qualquer lugar do mundo.
              </p>
              <a href="#contact">
                <Button text="Entre em contato" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">Minha paixão por programação</p>
              <p className="grid-subtext">
                Amo resolver problemas e construir soluções através do código.
                Programar não é só minha profissão, mas também minha paixão.
                Gosto de explorar novas tecnologias e aprimorar minhas habilidades.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Entre em contato</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  alex.silva250@hotmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
