import "./styles.css";
import { VStack, useColorMode } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Hosting from "./pages/Hosting";
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [open, setOpen] = useState(false);
  // const [isNotSmallerScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      <VStack p={5} align="flex-start" alignItems="center">
        <Header isDark={isDark} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/art" element={<Art />} />
          <Route path="/code" element={<Code />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </VStack>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          // { src: timer },
          { src: "/image2.jpg" },
          { src: "/image3.jpg" },
        ]}
      />
    </>
  );
};
export default App;
