import Logo from "@/assets/images/logo/Samantha V Logo cropped.png";
import "../css/Header.css";
import { useState } from "react";
import { cn } from "../utils/helpers";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery();

  const toggleMenu = () => {
    if (!isMobile) return;
    setOpen(!open);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <header>
      <div className="md:container md:mx-auto md:flex md:justify-between">
        <div className="flex justify-between items-center p-2 md:px-0">
          <a href="#" className="flex items-center">
            <img src={Logo} alt="Samantha V." className="w-60" />
          </a>

          <a
            href="#"
            className={cn("header-menu inline-block md:hidden", open && "open")}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </a>
        </div>

        <nav
          className={cn(
            "header-nav flex flex-col items-center justify-center opacity-0 h-0 overflow-hidden transition-opacity md:flex-row md:opacity-100 md:h-auto md:transition-none",
            open && "open"
          )}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-2 mx-auto text-center py-1">
            <li>
              <a href="#about" onClick={toggleMenu} className="px-4 py-2">
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu} className="px-4 py-2">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" onClick={toggleMenu} className="px-4 py-2">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu} className="px-4 py-2">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu} className="px-4 py-2">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
