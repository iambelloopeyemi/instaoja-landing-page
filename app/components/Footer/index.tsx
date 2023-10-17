import Logo from "../Logo";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-nyanza px-20 py-10">
      <div className="flex justify-center items-center mb-10">
        <Logo />
      </div>
      <div className="border-t py-2.5">
        <p className="text-center font-light text-sm">
          © {currentYear} InstaOja Limited. All right reserved
        </p>
      </div>
    </footer>
  );
}
