import Button from "../Button";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-20 py-10">
      <div>
        <Logo />
      </div>
      <div>
        <Button text={`Get Started`} />
      </div>
    </header>
  );
}
