type SectionHeaderProps = {
  title: string;
  dir: "r" | "l";
};

export const SectionHeader = ({ title, dir = "r" }: SectionHeaderProps) => {
  return (
    <div
      className='flex items-center gap-6 mb-6'
      // style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
      style={{ flexDirection: "row-reverse"  }}
    >
      <div className='w-full h-px bg-black opacity-30'/>
      <h3>
        <span className={`text-xl md:text-4xl font-bold text-end`}>
          {title}
          <span className="text-earth-500">.</span>
        </span>
      </h3>
    </div>
  );
};
