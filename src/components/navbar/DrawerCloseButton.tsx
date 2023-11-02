function DrawerCloseButton() {
  return (
    <button
      type="button"
      className="self-end inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400 "
      data-hs-overlay="#hs-overlay-right"
    >
      <span className="sr-only">Close modal</span>
      <svg
        width="20"
        height="20"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 22L21.3333 2" stroke="black" strokeWidth="3" />
        <path d="M21.334 22L2.00065 2" stroke="black" strokeWidth="3" />
      </svg>
    </button>
  );
}

export default DrawerCloseButton;
