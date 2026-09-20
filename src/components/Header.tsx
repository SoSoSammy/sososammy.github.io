import Logo from "@/assets/images/logo/Samantha V Logo cropped.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="Samantha V." />
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
