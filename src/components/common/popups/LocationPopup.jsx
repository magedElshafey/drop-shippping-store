import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa6";
import MainBtn from "../buttons/MainBtn";
import CancelBtn from "../buttons/CancelBtn";

const LocationPopup = ({
  showLocationPopup,
  setShowLocationPopup,
  locations,
  setLocation,
  location,
}) => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleConfirm = () => {
    setLocation(locations[activeIndex].title);
    setShowLocationPopup(false);
  };
  const handleCancel = () => setShowLocationPopup(false);
  const popupRef = useRef(null);
  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLocationPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`fixed left-0 ${
        showLocationPopup ? "top-0" : "top-[-300%]"
      } w-screen h-screen bg-black bg-opacity-30 z-50 flex items-center duration-300 justify-center`}
    >
      <div
        ref={popupRef}
        className="w-full lg:w-[550px] bg-white p-4 shadow-lg"
      >
        <p className="text-center font-bold mb-5">
          {t("Choose your location")}
        </p>
        <div className="w-full border h-[250px] overflow-y-auto mb-5">
          <ul className="p-3">
            {locations?.map((item, index) => (
              <li
                onClick={() => setActiveIndex(index)}
                key={index}
                className={`p-2 duration-300 hover:bg-grayColor cursor-pointer flex items-center justify-between ${
                  activeIndex === index ? "bg-grayColor font-bold" : null
                }`}
              >
                <span> {t(item?.title)}</span>
                {activeIndex === index ? <FaCheck size={20} /> : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <div className="w-[150px]">
            <MainBtn type="button" action={handleConfirm} text="confirm" />
          </div>
          <div className="w-[150px]">
            <CancelBtn type="button" action={handleCancel} text="confirm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
