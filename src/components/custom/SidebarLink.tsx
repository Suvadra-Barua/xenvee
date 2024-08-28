import { motion } from "framer-motion";
import parse from 'html-react-parser';

interface SidebarLinkProps {
  href: string;
  label: string;
  delay: number;
  isSelected: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  href,
  label,
  delay,
  isSelected,
  onClick,
}) => {
  return (
    <motion.a
      initial={{ x: -120 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.25, delay }}
      href={href}
      onClick={onClick}
      style={{
        // writingMode: "vertical-rl",
      }}
      className={`h-[65px] text-white flex-shrink-0 flex items-center justify-center  text-center 
        bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 
        ${
        isSelected
          ? "opacity-100 border-r-earth-300 bg-[var(--background)] border-r-4"
          : "opacity-70 border-r-transparent"
      }  border-r-solid transition duration-100 w-full 
      hover:bg-[var(--background)] hover:border-r-earth-300 hover:opacity-100 border-r-4 p-2`}
    >
      {parse(label)}
    </motion.a>
  );
};

export default SidebarLink;
