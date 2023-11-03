interface LogoIconProps {
  isDesktop?: boolean;
}

function LogoIcon({ isDesktop }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${isDesktop ? "140" : "100"}`}
      height={`${isDesktop ? "30" : "24"}`}
      fill="none"
      viewBox="0 0 100 24"
    >
      <path
        fill="#fff"
        d="M19.224 19.838h-5.43l-.704-1.624H6.134l-.704 1.624H0L8.805 0h1.614l8.805 19.838zm-11.3-5.698H11.3L9.627 9.653 7.924 14.14zM26.273 9.18L32.671.355h5.87l-6.662 9.27 7.748 10.214H33.64l-7.367-9.713v9.713h-5.048V.354h5.048v8.827zM58.215 15.262h2.73V24h-5.049v-4.162H41.632V.354h5.048v14.908h6.487V.354h5.048v14.908zM80.936 19.838h-5.049V9.683l-10.8 10.509h-1.615V.354h5.049v10.067L79.32 0h1.615v19.838zM100 19.838h-5.048V14.73h-2.583l-3.287 5.107h-5.635l4.285-6.642a6.8 6.8 0 01-2.084-2.392c-.49-.964-.734-2.066-.734-3.306 0-1.082.206-2.066.617-2.952a6.601 6.601 0 011.673-2.243A7.578 7.578 0 0189.757.856c.978-.334 2.035-.502 3.17-.502H100v19.484zM92.839 4.782c-.842 0-1.517.256-2.025.768-.51.511-.763 1.17-.763 1.978 0 .826.254 1.495.763 2.007.508.512 1.183.768 2.025.768h2.113v-5.52h-2.113z"
      ></path>
    </svg>
  );
}

export default LogoIcon;