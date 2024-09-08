import React from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="max-w-[1270px] mx-auto px-5 pt-[13px] pb-[11px] flex items-center justify-between">
      <div>
        <Link to="/" className="block">
          <img src="/Logo.svg" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-[50px]">
        <div className="flex items-center gap-20">
          <button className="button py-[11px] px-5 rounded-[10px] transition-all flex items-center gap-3">
            <IoMenu size={18} />
            Katalog
          </button>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden lg:flex rounded-lg"
          >
            <input
              type="text"
              placeholder="Maxsulotlarni izlash"
              className="outline-none px-5 py-3 xl:min-w-[396px] bg-White rounded-l-lg border border-Secondary max-w-[396px]"
            />
            <button className="py-[13px] px-[18px] border border-MainColor bg-MainColor border-none rounded-r-lg text-white">
              <IoSearch size={18} />
            </button>
          </form>
          <button className="p-[11px] rounded-lg text-MainColor bg-Secondary border-none hover:opacity-80">
            <FaRegHeart size={18} />
          </button>
          <button className="p-[11px] rounded-lg text-MainColor bg-Secondary border-none hover:opacity-80">
            <MdOutlineShoppingCart size={18} />
          </button>
        </div>
        <button className="button py-[11px] px-5 rounded-[10px] transition-all">
          Kirish
        </button>
      </div>
    </div>
  );
}
