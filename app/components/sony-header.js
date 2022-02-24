import Image from "next/image";
import sonyLogo from "../public/sony_logo.svg";

export default function SonyHeader() {
  return (
    <header className="sony-header">
      <a
        href="https://www.sony.com/ja/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex bg-black"
      >
        <div className="pc-only">
          <Image
            src={sonyLogo}
            alt="SONY"
            className="sony-logo"
            width={71}
            height={13}
          />
        </div>
        <div className="mobile-only">
          <Image
            src={sonyLogo}
            alt="SONY"
            className="sony-logo"
            width={47.5}
            height={8.5}
          />
        </div>
      </a>
    </header>
  );
}
