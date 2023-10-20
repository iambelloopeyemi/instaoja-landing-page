import Button from "../Button";
import Logo from "../Logo";

export default function Header() {
  return (
    <div className="container">
      <nav className="flex justify-between items-center p-10">
        <div>
          <Logo />
        </div>
        <div>
          <Button>Get Started</Button>
        </div>
      </nav>
    </div>
  );
}
