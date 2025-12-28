import "./App.css";
import { useTranslation } from "react-i18next";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";


function App() {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* Language Switcher */}
      <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <button onClick={() => i18n.changeLanguage("en")}>English</button>
        <button onClick={() => i18n.changeLanguage("fr")}>Français</button>
        <button onClick={() => i18n.changeLanguage("ar")}>العربية</button>
      </div>
    

      <Header />
      <Navbar />
      <h1>{t("Indembaya Nafaka")}</h1>
      <Section />
      <Footer />
    </>
  );
}

export default App;
