import Image from "next/image";
const HomeBanner = () => {
  return (
    <div className="" id='about'>
    <div className="flex flex-col md:flex-row mt-4 md:mt-16 mx-4 md:mx-8 lg:mx-24 gap-4 md:gap-0">
      <div className="md:w-1/2 order-2 md:order-1 ">
        <MyDetails />
      </div>
      <div className="relative md:w-1/2 flex justify-center items-center order-1 md:order-2">
        <Image
          className="rounded-full border-4 border-dotted border-black bg-earth-300"
          src="/Suvadra_cool.png"
          alt="Suvadra Barua"
          width={400}
          height={400}
        />
      </div>
    </div>
     </div>
  );
};

const MyDetails = () => {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold my-2">Hello, I'm Suvadra Barua</h1>
      <h4 className="text-lg md:text-xl font-semibold mb-4">Software Engineer</h4>
      <article className="text-sm md:text-base text-black/90">
        With over 2 years of experience in designing, developing, and deploying
        decentralized applications (DApps) on Celo, Ethereum, and other
        blockchain platforms, my approach to project selection is centered
        around continuous learning and adaptability. I don't limit myself to
        projects based solely on existing knowledge; instead, I actively seek
        opportunities for acquiring new skills and insights. I engage in
        frontend, backend, ML etc. development tasks, demonstrating a
        willingness to explore and learn new areas. While I may not consider
        myself a pro in every aspect, I thrive on the challenge of mastering new
        technologies. Additionally, I have a proven ability to mentor and
        educate others about blockchain technology and smart contracts
      </article>
    </>
  );
};

export default HomeBanner;
