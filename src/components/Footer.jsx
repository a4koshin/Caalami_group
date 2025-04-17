import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FooterIcons, navigation } from "../constant/index.js";

const Footer = () => {
  return (
    <footer className="bg-[#D9D9D9] text-[#1C427A] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols- md:grid-cols-3 gap-8">
        <div className="">
          <img src={logo} alt="logo" className="w-35 h-14" />
        </div>

        {/* Links */}
        <div>
          <h2 className="text-2xl font-semibold text-[#e73535] mb-4">
            Quick Links
          </h2>
          <div>
            {navigation.map((item) => (
              <Link
                to={item.url}
                key={item.id}
                className="block mb-2  text-[#1C427A] hover:text-[#E73535]"
              >
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold text-[#e73535] mb-4">
            Follow Us
          </h2>
          <div className="flex flex-col gap-[0.9rem] text-left">
            {FooterIcons.map((item) => {
              const Icon = item.icon;
              return (
                <div className=" ">
                  <div
                    key={item.id}
                    className="flex items-center gap-2 text-[#1C427A] cursor-pointer hover:text-[#E73535]"
                  >
                    <span className="text-[#e73535]">
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="font-medium">{item.alt}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-[#1C427A] pt-6 text-center text-[#1C427A] text-sm">
        © {new Date().getFullYear()} Caalami Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
