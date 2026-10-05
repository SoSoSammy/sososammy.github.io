import Logo from "@/assets/images/logo/Samantha V Logo cropped.png";

export default function Footer() {
  return (
    <footer className="md:container md:mx-auto">
      <a href="#top">
        <img src={Logo} alt="Samantha V." className="w-60" />
      </a>
      <p>
        Copyright &copy; {new Date().getFullYear()} Samantha V. All rights
        reserved.
      </p>
    </footer>
  );
}
