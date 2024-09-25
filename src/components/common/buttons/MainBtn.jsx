import React from "react";
import { useTranslation } from "react-i18next";
const MainBtn = ({ type, action, text }) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      onClick={action}
      className="w-full duration-300 p-3 flex items-center justify-center font-semibold bg-black text-white hover:bg-opacity-70"
    >
      {t(text)}
    </button>
  );
};

export default MainBtn;
