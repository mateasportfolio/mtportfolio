import { useColorMode, VStack } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Hosting from "./pages/Hosting";
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Header isDark={isDark} toggleColorMode={toggleColorMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/hosting" element={<Hosting />} />
        <Route path="/art" element={<Art />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </VStack>
  );
}
export default App;
