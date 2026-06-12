import { useTranslation } from "react-i18next";
import mala from "../assets/mala.jpeg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <p>{t("footer")}</p>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        
      </ul>

     
    </footer>
  );
}
