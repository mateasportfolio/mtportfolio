import "./styles.css";
import { VStack, useColorMode } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import { SavingsCalculator } from "./features/savings-calculator/SavingsCalculator";
import MeditationTimer from "./features/meditation-timer/MeditationTimer";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p={5} align="flex-start" alignItems="center">
        <Header isDark={isDark} toggleColorMode={toggleColorMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/art" element={<Art />} />
          {/* <Route path="/code" element={<Code />} /> */}
          {/* <Route path="/hosting" element={<Hosting />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/savings-calculator" element={<SavingsCalculator />} />
          <Route path="/meditation-timer" element={<MeditationTimer />} />
        </Routes>
      </VStack>
    </>
  );
};
export default App;
