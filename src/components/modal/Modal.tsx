import { useState } from "react";
import AuthorizationConfirmed from "../forms/AuthorizationConfirmed";
import RegistrationForm from "../forms/RegistrationForm";
import CloseButtonModal from "./CloseButtonModal";

function Modal() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [name, setName] = useState("");

  const handleAuthorizationSuccess = (name: string) => {
    console.log(name);

    setName(name);
    setIsAuthorized(true);
  };

  return (
    <div
      id="hs-basic-modal"
      className="[--body-scroll:true] hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-hidden"
    >
      <div
        className={`${
          isAuthorized ? "pt-[10rem]" : "pt-12"
        } flex justify-center hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all  w-full h-full sm:h-auto`}
      >
        <div className="px-8 sm:px-16 pb-6 pt-4 sm:pb-8 sm:pt-6  w-full sm:w-[28rem] relative flex flex-col bg-[#FFD907] shadow-sm rounded-t-2xl sm:rounded-2xl">
          <CloseButtonModal />
          {isAuthorized ? (
            <AuthorizationConfirmed name={name} />
          ) : (
            <RegistrationForm
              handleAuthorizationSuccess={handleAuthorizationSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
