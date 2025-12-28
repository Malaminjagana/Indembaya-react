import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <h1>{t("welcome")}</h1>
    </header>
  );
}

export default Header;
