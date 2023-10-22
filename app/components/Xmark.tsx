import { useOpen } from "../hooks/useOpen";

export default function Xmark() {
  const OpenContext = useOpen();
  if (OpenContext === null) {
    return null;
  }
  const { setOpen, setSuccessful } = OpenContext;
  const toggleModal = () => {
    setOpen(false);
    setSuccessful(false);
  };
  return (
    <div onClick={toggleModal} className="flex justify-end mb-5 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="white"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
