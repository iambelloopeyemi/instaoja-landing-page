import Image from "next/image";
import Link from "next/link";
import logo from "../assets/instaoja-logo.png";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="block default:w-28 mobile:w-32 tablet:w-40 h-auto"
      >
        <Image src={logo} alt="instaOja logo" className="max-w-full h-auto" />
      </Link>
    </>
  );
}
