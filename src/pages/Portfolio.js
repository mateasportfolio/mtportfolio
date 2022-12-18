import {
  Box,
  Text,
  Stack,
  Button,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Faltschachtel from "../assets/portfolio/Faltschachtel.png";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import FlyerBasstoelpel from "../assets/portfolio/FlyerBasstoelpel_Seite_1.png";
import FlyerBasstoelpel2 from "../assets/portfolio/FlyerBasstoelpel2.png";
import Sony from "../assets/portfolio/Sony.png";
import KornSchrot_Seite_1 from "../assets/portfolio/KornSchrot_Seite_1.png";
import KornSchrot_Seite_2 from "../assets/portfolio/KornSchrot_Seite_2.png";
import KornSchrot_Seite_3 from "../assets/portfolio/KornSchrot_Seite_3.png";
import KornSchrot_Seite_4 from "../assets/portfolio/KornSchrot_Seite_4.png";
import KornSchrot_Seite_5 from "../assets/portfolio/KornSchrot_Seite_5.png";
import KornSchrot_Seite_6 from "../assets/portfolio/KornSchrot_Seite_6.png";
import KornSchrot_Seite_7 from "../assets/portfolio/KornSchrot_Seite_7.png";

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
        <Stack
          display="flex"
          p="2px"
          position="relative"
          direction={isNotSmallerScreen ? "row" : "column"}
          width="50%"
        >
          <Box
            direction={isNotSmallerScreen ? "row" : "column"}
            width="100%"
            display="flex"
            p="2px"
            m="100px"
            justifyContent="center"
          >
            <Button
              border="1px solid  #9198e5"
              position="relative"
              p="20px"
              m="10px"
              display="flex"
            >
              <Link
                position="relative"
                fontSize="xl"
                fontWeight="hairline"
                color="pink.400"
                href="https://endearing-blini-1b0650.netlify.app"
                m="30px"
                p="4px"
              >
                Savings calculator
              </Link>
            </Button>

            <Button
              border="1px solid  #9198e5"
              position="relative"
              p="20px"
              m="10px"
              display="flex"
            >
              <Link
                fontSize="xl"
                fontWeight="hairline"
                color="pink.400"
                href="https://melodious-arithmetic-98d708.netlify.app/"
                m="30px"
                p="4px"
              >
                Meditation Timer
              </Link>
            </Button>
          </Box>
        </Stack>
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
            { src: KornSchrot_Seite_2, width: 400, height: 800 },
            { src: KornSchrot_Seite_3, width: 400, height: 800 },
            { src: KornSchrot_Seite_4, width: 400, height: 800 },
            { src: KornSchrot_Seite_5, width: 400, height: 800 },
            { src: KornSchrot_Seite_6, width: 400, height: 800 },
            { src: KornSchrot_Seite_7, width: 400, height: 800 },
          ]}
          plugins={[Fullscreen]}
        />
      </Flex>
    </>
  );
}
