import DiamondBorder from "./DiamondBorder";
import { SponsorCarousel } from "./Sponsors";
import cifShortLogo from "/img/cifLogoShort.webp";
import seal from "/img/seal.png";

export default function Footer() {
  return (
    <>
      <SponsorCarousel />
      <DiamondBorder />
      <footer className="bg-panel-background bg-center pb-2 sm:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between lg:flex-row">
          <div className="my-4 flex gap-5">
            <img
              src={cifShortLogo}
              alt="Choctaw Indian Fair"
              width={160}
              height={160}
              loading="lazy"
            />
            <img
              src={seal}
              alt="Mississippi Band of Choctaw Indians"
              width={170}
              height={160}
              loading="lazy"
            />
          </div>
          <p className="text-md text-center lg:pl-40 xl:pl-24">
            Copyright &copy; {new Date().getFullYear()}. {""}
            <a
              href="https://www.choctaw.org"
              className="text-yellow-200 hover:text-yellow-100"
            >
              Mississippi Band of Choctaw Indians
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>
      <div className="w-full py-4 text-center">
        <p className="text-neutral-200">
          Created by{" "}
          <a
            href="https://nativeconsult.io"
            className="text-indigo-400 hover:text-indigo-200"
            target="_blank"
          >
            Native Consulting Services
          </a>
        </p>
      </div>
    </>
  );
}
