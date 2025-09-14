import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FooterIcons, navigation } from "../constant/index.js";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1c427a] text-[#d9d9d9] py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols- md:grid-cols-3 gap-8">
          <div className="">
            <img
              src={logo}
              alt="logo"
              className="w-60 h-auto invert brightness-0"
            />
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
                  className="block mb-2  text-[#d9d9d9] hover:text-[#E73535]"
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
              {FooterIcons.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 text-[#d9d9d9] cursor-pointer hover:text-[#E73535]"
                >
                  <span className="text-[#e73535]">{item.icon}</span>
                  <span className="font-medium">{item.alt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="  border-t bg-[#e73535] border-[#1C427A] flex items-center justify-center p-4 text-[#d9d9d9] text-sm">
        © {new Date().getFullYear()} Caalami Group | Developed by Kooshin
      </div>
    </>
  );
};

export default Footer;
