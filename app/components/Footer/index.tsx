import Logo from "../Logo";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-nyanza">
      <div role="container" className="container">
        <div className="flex justify-center items-center py-10">
          <Logo />
        </div>
        <div className="border-t py-2.5">
          <p className="text-center font-light text-xs">
            © {currentYear} InstaOja Limited. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
