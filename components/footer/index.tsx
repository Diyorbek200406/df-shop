import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-[10vh] px-12  bg-slate-600">
      <div>DF-SHOP</div>
      <div className="flex gap-6 items-center">
        <Link href={"https://www.youtube.com/"}>
          <FaYoutube className="w-5 h-5" />
        </Link>
        <Link href={"https://t.me/diyorbekerkinov2004"}>
          <FaTelegram className="w-5 h-5" />
        </Link>
        <Link href={"https://www.instagram.com/"}>
          <FaInstagram className="w-5 h-5" />
        </Link>
        <Link href={"https://www.linkedin.com/"}>
          <FaLinkedin className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
