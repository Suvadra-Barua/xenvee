import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import { motion } from "framer-motion";

const links = [
  {
    link:"https://www.linkedin.com",
    icon: <AiFillLinkedin  size='2rem'/>
  },
  {
    link:"https://www.github.com",
    icon: <AiFillGithub size='2rem'/>
  },
  {
    link:"https://www.linkedin.com",
    icon: <AiFillTwitterCircle size='2rem'/>
  },
  {
    link:"https://www.linkedin.com",
    icon: <AiFillCodepenCircle size='2rem'/>
  },

];

export const MyLinks = () => {

  return (
    <div className="flex gap-3 pt-2.5">
      {
        links.map((link,id)=>(
          <motion.span
          key={id}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: id * 0.2 }}      >
        <a
          href={link.link}
          target="_blank"
          rel="nofollow"
          className="opacity-50 relative z-20 hover:text-earth-500 hover:opacity-100"
        >
          {link.icon}
        </a>
      </motion.span>
        )
        )
      }

    </div>
  );
};
