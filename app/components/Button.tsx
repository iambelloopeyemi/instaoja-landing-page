import { ButtonProp } from "../utils/Props";

export default function Button({
  type = "button",
  toggleModal,
  checkModal = "noModal",
  children,
}: ButtonProp) {
  return (
    <>
      <button
        type={type}
        onClick={toggleModal}
        className={`${
          checkModal === "modal" ? "bg-white" : "bg-olive"
        } block outline-0 border border-olive default:px-2 mobile:px-3 tablet:px-4 default:py-1 mobile:py-1.5 tablet:py-2 rounded-full hover:scale-105`}
      >
        <span
          className={`${
            checkModal === "modal" ? "text-olive" : "text-white"
          }  default:font-semibold mobile:font-bold max-default:text-sm tracking-tight`}
        >
          {children}
        </span>
      </button>
    </>
  );
}
