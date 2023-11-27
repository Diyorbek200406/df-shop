import Link from "next/link";
import { FaHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed z-[1001] top-0 right-0 left-0 h-[10vh] px-12 flex items-center justify-between bg-slate-600">
      <div>DF-SHOP</div>

      <div className="flex items-center gap-8 text-[#eee]">
        <Link href={"/"}>Shop</Link>
        <Link href={"/men"}>Men</Link>
        <Link href={"/women"}>Women</Link>
      </div>

      <div>
        <input type="text" placeholder="Search..." className="rounded px-8 py-1.5" />
      </div>

      <div className="flex items-center gap-6">
        <FaHeart className="w-5 h-5" />
        <FaRegUser className="w-5 h-5" />
        <FaShoppingCart className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Header;
