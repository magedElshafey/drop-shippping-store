import React, { useState } from "react";
import {
  payments,
  socials,
  aboutBrandsClub,
  helpCenter,
  locations,
} from "../../../data/data";
import FooterTitle from "./FooterTitle";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaLocationDot } from "react-icons/fa6";
import LocationPopup from "../../../components/common/popups/LocationPopup";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [location, setLocation] = useState(locations[0]?.title);
  const [showLocationPopup, setShowLocationPopup] = useState(false);

  return (
    <>
      <div className="w-screen py-4 flex items-center bg-grayColor mt-8 md:mt-10 lg:mt-12">
        <div className="container mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <div>
              <FooterTitle title={aboutBrandsClub?.title} />
              <ul>
                {aboutBrandsClub?.details?.map((item, index) => (
                  <li key={index} className="mb-1 text-slate-600">
                    <Link
                      className=" duration-300 hover:underline"
                      to={item?.path}
                    >
                      {t(item?.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterTitle title={helpCenter?.title} />
              <ul>
                {helpCenter?.details?.map((item, index) => (
                  <li key={index} className="mb-1 text-slate-600">
                    <Link
                      className=" duration-300 hover:underline"
                      to={item?.path}
                    >
                      {t(item?.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <FooterTitle title={socials?.title} />
              <div className="flex items-center gap-3 flex-wrap">
                {socials?.details?.map((item, index) => (
                  <a
                    href={item?.path}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="text-black"
                  >
                    {item?.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <FooterTitle title={payments?.title} />
              <div className="flex items-center gap-3 flex-wrap">
                {payments?.details?.map((item, index) => (
                  <img
                    alt="payments-type"
                    src={item}
                    key={index}
                    loading="lazy"
                    className="w-8"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-end mb-3">
            <div className="flex gap-1">
              <p className="text-slate-600">{t("copyRight")}</p>
              <a
                href="https://alqema.com"
                target="_blank"
                rel="noreferrer"
                className=" duration-300 hover:underline text-slate-600 font-bold"
              >
                {t("al-qema")}
              </a>
              <p>&copy; {currentYear}</p>
            </div>
          </div>
          <div className="w-full flex justify-end  text-slate-600 ">
            <div>
              <p className="font-bold mb-2">{t("my location")}</p>
              <div
                className="w-fit flex gap-1 items-center cursor-pointer"
                onClick={() => setShowLocationPopup(true)}
              >
                <FaLocationDot size={15} />
                <p className="underline">{t(location)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationPopup
        showLocationPopup={showLocationPopup}
        setShowLocationPopup={setShowLocationPopup}
        locations={locations}
        setLocation={setLocation}
        location={location}
      />
    </>
  );
};

export default Footer;
