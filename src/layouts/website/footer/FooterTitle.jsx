import React from "react";
import { useTranslation } from "react-i18next";
const FooterTitle = ({ title }) => {
  const { t } = useTranslation();
  return <p className="font-bold text-base lg:text-md mb-4 ">{t(title)}</p>;
};

export default FooterTitle;
