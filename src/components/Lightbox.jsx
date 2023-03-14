import React from "react";
import Lightbox from "yet-another-react-lightbox";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import FlyerBasstoelpel from "../assets/portfolio/FlyerBasstoelpel_Seite_1.png";
import FlyerBasstoelpel2 from "../assets/portfolio/FlyerBasstoelpel2.png";
import Sony from "../assets/portfolio/Sony.png";
import Lodge1 from "../assets/portfolio/Lodge1.png";
import Lodge2 from "../assets/portfolio/Lodge2.png";
import Lodge3 from "../assets/portfolio/Lodge3.png";
import Lodge4 from "../assets/portfolio/Lodge4.png";
import Lodge5 from "../assets/portfolio/Lodge5.png";
import Lodge6 from "../assets/portfolio/Lodge6.png";
import Lodge7 from "../assets/portfolio/Lodge7.png";
import KornSchrot_Seite_1 from "../assets/portfolio/KornSchrot_Seite_1.png";
import KornSchrot2 from "../assets/portfolio/KornSchrot2.png";
import KornSchrot_Seite_3 from "../assets/portfolio/KornSchrot_Seite_3.png";
import KornSchrot_Seite_4 from "../assets/portfolio/KornSchrot_Seite_4.png";
import KornSchrot_Seite_5 from "../assets/portfolio/KornSchrot_Seite_5.png";
import KornSchrot_Seite_6 from "../assets/portfolio/KornSchrot_Seite_6.png";
import KornSchrot_Seite_7 from "../assets/portfolio/KornSchrot_Seite_7.png";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Typo from "../assets/portfolio/Typo.png";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import herz from "../assets/herz.png";
import art from "../assets/portfolio/art.png";
import banner from "../assets/portfolio/banner.png";
import it from "../assets/portfolio/it.png";

export const LightboxComponent = ({ open, setOpen }) => {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      slides={[
        {
          src: art,
          width: 600,
          height: 800,
          title: "Abstract Planet",
          description: "Illustrator",
        },
        {
          src: Faltschachtel,
          width: 600,
          height: 800,
          title: "Faltschachtel",
          description: "Illustrator",
        },

        {
          src: herz,
          width: 600,
          height: 800,
          title: "Herz Tarot Card",
          description: "Photoshop",
        },
        {
          src: FlyerBasstoelpel,
          width: 600,
          height: 800,
          title: "FlyerBasstoelpel",
          description: "InDesign",
        },
        {
          src: FlyerBasstoelpel2,
          width: 600,
          height: 800,
          title: "FlyerBasstoelpel",
          description: "InDesign",
        },
        {
          src: Sony,
          width: 600,
          height: 800,
          title: "Sony",
          description: "Photoshop",
        },
        {
          src: banner,
          width: 600,
          height: 800,
          title: "Flyer",
          description: "Figma",
        },
        {
          src: KornSchrot_Seite_1,
          width: 400,
          height: 800,
          title: "Korn und Schrot",
          description: "Illustrator und InDesign",
        },
        { src: KornSchrot2, width: 400, height: 800 },
        { src: KornSchrot_Seite_3, width: 400, height: 800 },
        { src: KornSchrot_Seite_4, width: 400, height: 800 },
        { src: KornSchrot_Seite_5, width: 400, height: 800 },
        { src: KornSchrot_Seite_6, width: 400, height: 800 },
        { src: KornSchrot_Seite_7, width: 400, height: 800 },
        {
          src: Lodge1,
          width: 400,
          height: 800,
          title: "Lodge",
          description: "InDesign",
        },
        { src: Lodge2, width: 400, height: 800 },
        { src: Lodge3, width: 400, height: 800 },
        { src: Lodge4, width: 400, height: 800 },
        { src: Lodge5, width: 400, height: 800 },
        { src: Lodge6, width: 400, height: 800 },
        { src: Lodge7, width: 400, height: 800 },
        {
          src: Typo,
          width: 400,
          height: 800,
          title: "Tyographie",
          description: "Illustrator und InDesign",
        },
        {
          src: it,
          width: 600,
          height: 800,
          title: "IT Design",
          description: "Figma",
        },
      ]}
      plugins={[Captions, Thumbnails]}
    />
  );
};
