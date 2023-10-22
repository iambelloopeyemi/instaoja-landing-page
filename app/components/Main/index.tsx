"use client";
import { useOpen } from "@/app/hooks/useOpen";
import WaitlistForm from "../WaitlistForm";

export default function Main() {
  const OpenContext = useOpen();
  if (OpenContext === null) {
    return null;
  }
  const { setOpen, setSuccessful } = OpenContext;
  return (
    <main className="min-h-screen default:px-2.5 mobile:px-5 tablet:px-20 default:py-24 mobile:py-28">
      <div role="container" className="container-sm text-center">
        <h1 className="font-semibold default:text-xl mobile:text-2xl tablet:text-3xl laptop:text-4xl mb-8">
          Where <span className="text-yellow-green">Freshness</span> Meets&nbsp;
          <span className="text-yellow-green">Convenience</span>, Right at Your
          Doorstep
        </h1>
        <p className="font-medium tablet:text-lg mb-10">
          InstaÒjà delivers the Essence of Local Markets! Fresh, Affordable, and
          Swift Grocery Delivery in Lagos, Nigeria. Experience Convenience Like
          Never Before.
        </p>
        <div className="flex justify-center">
          <WaitlistForm setOpen={setOpen} setSuccessful={setSuccessful} />
        </div>
      </div>
    </main>
  );
}
