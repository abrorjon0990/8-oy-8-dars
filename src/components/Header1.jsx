import React from "react";
import { FaLocationDot } from "react-icons/fa6";
function Header1() {
  return (
    <div className="w-full flex justify-between  ">
      <div class="flex items-center gap-2">
        <span class="flex items-center gap-1">
          <FaLocationDot size={20} />
          Toshkent
        </span>
        <span>|</span>
        <span class="hover:underline cursor-pointer">Topshirish punktlari</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="hover:underline cursor-pointer text-purple-600">
          Sotuvchi bo'lish
        </span>
        <span class="hover:underline cursor-pointer text-purple-600">
          Topshirish punktini ochish
        </span>
        <span class="hover:underline cursor-pointer">Savol-javob</span>
        <span class="hover:underline cursor-pointer">Buyurtmalarim</span>
        <select className="p-1">
          <option value="uzbek">Uzb</option>
          <option value="English">Eng</option>
          <option value="Russian">Rus</option>
        </select>
      </div>
    </div>
  );
}

export default Header1;
