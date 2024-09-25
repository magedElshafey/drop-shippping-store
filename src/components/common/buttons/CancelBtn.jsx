import React from "react";
import { useTranslation } from "react-i18next";

const CancelBtn = ({ type, action }) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      onClick={action}
      className="w-full duration-300 p-3 flex items-center justify-center font-semibold bg-white text-black  border border-black"
    >
      {t("cancel")}
    </button>
  );
};

export default CancelBtn;
