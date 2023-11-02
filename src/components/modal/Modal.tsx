import { useState } from "react";
import RegistrationForm from "../forms/RegistrationForm";
import CloseButtonModal from "./CloseButtonModal";

function Modal() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleAuthorizationSuccess = () => {
    setIsAuthorized(true);
  };

  return (
    <div
      id="hs-basic-modal"
      className="[--body-scroll:true] hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-hidden"
    >
      <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all mt-12 w-full h-full">
        <div className="flex flex-col bg-[#FFD907] shadow-sm rounded-t-2xl w-full h-full">
          <CloseButtonModal />
          {isAuthorized ? (
            <>GOOD JOB!</>
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
