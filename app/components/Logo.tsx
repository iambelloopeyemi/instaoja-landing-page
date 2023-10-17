import Image from "next/image";
import Link from "next/link";
import logo from "../assets/instaoja-logo.png";

export default function Logo() {
  return (
    <>
      <Link href={`/`} className="block w-40 h-auto">
        <Image src={logo} alt="instaOja logo" className="w-full h-auto" />
      </Link>
    </>
  );
}