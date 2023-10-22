"use client";
import { useOpen } from "@/app/hooks/useOpen";
import Logo from "../Logo";
import Button from "../Button";

export default function Header() {
  const OpenContext = useOpen();
  if (OpenContext === null) {
    return null;
  }
  const { setOpen } = OpenContext;
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <header>
      <div role="container" className="container">
        <nav className="flex justify-between items-center default:px-2.5 mobile:px-5 tablet:px-10 py-10">
          <div>
            <Logo />
          </div>
          <div onClick={toggleOpen}>
            <Button>Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
