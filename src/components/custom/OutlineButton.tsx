"use client";
type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
};
export const OutlineButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`outline-none border-2 border-earth-500 cursor-pointer p-2 md:py-3 md:px-10
         bg-transparent text-earth-500 rounded relative z-20 overflow-hidden
          transition-colors duration-200
           before:content-[""] before:absolute before:-z-10
            before:bg-earth-500 before:h-full before:w-full 
            before:-left-full before:-top-full before:duration-200 
            transition-left transition-top hover:text-[var(--background-dark)]
             hover:before:left-0 hover:before:top-0 hover:text-white `}
    >
      {children}
    </button>
  );
};
