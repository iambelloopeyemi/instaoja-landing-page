import { ReactNode } from "react";

export default function ModalContainer({ children }: { children: ReactNode }) {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90 z-10 flex justify-center items-center default:px-5 mobile:px-10">
      <div className="max-w-[500px] h-fit bg-olive z-50 p-5 text-center rounded-lg">
        {children}
      </div>
    </div>
  );
}
