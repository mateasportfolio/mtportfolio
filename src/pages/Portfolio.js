import { Box, Text, Button, useMediaQuery, Flex } from "@chakra-ui/react";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import FlyerBasstoelpel from "../assets/portfolio/FlyerBasstoelpel_Seite_1.png";
import FlyerBasstoelpel2 from "../assets/portfolio/FlyerBasstoelpel2.png";
import Sony from "../assets/portfolio/Sony.png";
import KornSchrot_Seite_1 from "../assets/portfolio/KornSchrot_Seite_1.png";
import KornSchrot2 from "../assets/portfolio/KornSchrot2.png";
import KornSchrot_Seite_3 from "../assets/portfolio/KornSchrot_Seite_3.png";
import KornSchrot_Seite_4 from "../assets/portfolio/KornSchrot_Seite_4.png";
import KornSchrot_Seite_5 from "../assets/portfolio/KornSchrot_Seite_5.png";
import KornSchrot_Seite_6 from "../assets/portfolio/KornSchrot_Seite_6.png";
import KornSchrot_Seite_7 from "../assets/portfolio/KornSchrot_Seite_7.png";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lodge1 from "../assets/portfolio/Lodge1.png";
import Lodge2 from "../assets/portfolio/Lodge2.png";
import Lodge3 from "../assets/portfolio/Lodge3.png";
import Lodge4 from "../assets/portfolio/Lodge4.png";
import Lodge5 from "../assets/portfolio/Lodge5.png";
import Lodge6 from "../assets/portfolio/Lodge6.png";
import Lodge7 from "../assets/portfolio/Lodge7.png";

export default function Portfolio() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width: 600px)");

  const [open, setOpen] = useState(false);

  return (
    <>
      <Box>
        <Text as="b" fontSize="4xl" fontWeight="hairline" color="pink.400">
          {" "}
          Made with React.js
        </Text>

        <Box
          alignItems="center"
          display="flex"
          direction={isNotSmallerScreen ? "row" : "column"}
          justifyContent="center"
          width="100%"
        >
          <Button
            w="min-content"
            border="1px solid  #9198e5"
            position="relative"
            p="20px"
            m="10px"
            display="flex"
            fontSize="xl"
            fontWeight="hairline"
            color="pink.400"
          >
            <Link to="/savings-calculator">Savings Calculator</Link>
          </Button>

          <Button
            border="1px solid  #9198e5"
            position="relative"
            p="20px"
            m="10px"
            display="flex"
          >
            <ChakraLink
              fontSize="xl"
              fontWeight="hairline"
              color="pink.400"
              href="https://melodious-arithmetic-98d708.netlify.app/"
              m="30px"
              p="4px"
            >
              Meditation Timer
            </ChakraLink>
          </Button>
        </Box>
      </Box>
      <Flex>
        <button type="button" onClick={() => setOpen(true)}>
          OPEN PORTFOLIO
        </button>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: Faltschachtel, width: 600, height: 800 },
            { src: FlyerBasstoelpel, width: 600, height: 800 },
            { src: FlyerBasstoelpel2, width: 600, height: 800 },
            { src: Sony, width: 600, height: 800 },
            { src: KornSchrot_Seite_1, width: 400, height: 800 },
            { src: KornSchrot2, width: 400, height: 800 },
            { src: KornSchrot_Seite_3, width: 400, height: 800 },
            { src: KornSchrot_Seite_4, width: 400, height: 800 },
            { src: KornSchrot_Seite_5, width: 400, height: 800 },
            { src: KornSchrot_Seite_6, width: 400, height: 800 },
            { src: KornSchrot_Seite_7, width: 400, height: 800 },
            { src: Lodge1, width: 400, height: 800 },
            { src: Lodge2, width: 400, height: 800 },
            { src: Lodge3, width: 400, height: 800 },
            { src: Lodge4, width: 400, height: 800 },
            { src: Lodge5, width: 400, height: 800 },
            { src: Lodge6, width: 400, height: 800 },
            { src: Lodge7, width: 400, height: 800 },
          ]}
          plugins={[Fullscreen, Thumbnails]}
        />
      </Flex>
    </>
  );
}
