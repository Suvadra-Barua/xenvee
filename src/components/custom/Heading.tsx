"use client";
import { MyLinks } from "@/components/custom/MyLinks";
import { OutlineButton } from "@/components/custom/OutlineButton";

const Heading = () => {
  return (
    <header
      className={` p-4 md:px-14 flex items-center justify-between sticky top-0 z-20 bg-[#11111120] backdrop-blur-md font-bold h-16`}
    >
      <MyLinks />
      <OutlineButton onClick={() => window.open("/fake_resume.pdf")}>
        My resume
      </OutlineButton>
    </header>
  );
};
export default Heading;
