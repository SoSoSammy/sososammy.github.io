import Logo from "@/assets/images/logo/Samantha V Logo cropped.png";

export default function Footer() {
  return (
    <footer className="md:container md:mx-auto">
      <div className="px-4 py-6 md:py-10 md:px-0 flex flex-col items-center gap-1">
        <a href="#top">
          <img src={Logo} alt="Samantha V." className="w-60" />
        </a>
        <p>
          Copyright &copy; {new Date().getFullYear()} Samantha V. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
