"use client";
import { useOpen } from "../hooks/useOpen";
import ModalContainer from "./ModalContainer";
import Xmark from "./Xmark";
import WaitlistForm from "./WaitlistForm";
import Button from "./Button";

export default function Modal() {
  const OpenContext = useOpen();
  if (OpenContext === null) {
    return null;
  }
  const { isOpen, setOpen, isSuccessful, setSuccessful } = OpenContext;
  const toggleModal = () => {
    setOpen(false);
    setSuccessful(false);
  };

  return (
    <>
      {isOpen && (
        <ModalContainer>
          <Xmark />
          <p className="text-white font-medium tablet:text-xl mb-5">
            Enter your email to get notified when the application is ready
          </p>
          <div className="flex justify-center">
            <WaitlistForm
              setOpen={setOpen}
              setSuccessful={setSuccessful}
              isModal
              checkModal="modal"
            />
          </div>
        </ModalContainer>
      )}
      {isSuccessful && (
        <ModalContainer>
          <p className="text-white font-medium tablet:text-xl mb-5">
            Email submitted successfully
          </p>
          <div className="flex justify-center">
            <Button toggleModal={toggleModal} checkModal="modal">
              Close
            </Button>
          </div>
        </ModalContainer>
      )}
    </>
  );
}
