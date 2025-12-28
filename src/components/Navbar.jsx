import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <ul>
        <li>{t("about")}</li>
        <li>{t("services")}</li>
        <li>{t("contact")}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
