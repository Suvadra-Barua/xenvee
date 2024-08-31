import Script from "next/script";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Archivo, Noto_Sans_JP, Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/custom/SideBar";
import Navbar from "@/components/custom/NavBar";

const siteUrl = "https://sbarua.netlify.app/";
export const metadata: Metadata = {
  title: "Suvadra Barua",
  description:
  "With over 2 years of experience in designing, developing, and deploying decentralized applications (DApps) on Celo, Ethereum, and other blockchain platforms, my approach to project selection is centered around continuous learning and adaptability. I don't limit myself to projects based solely on existing knowledge; instead, I actively seek opportunities for acquiring new skills and insights. I engage in frontend, backend, ML etc. development tasks, demonstrating a willingness to explore and learn new areas. While I may not consider myself a pro in every aspect, I thrive on the challenge of mastering new technologies. Additionally, I have a proven ability to mentor and educate others about blockchain technology and smart contracts"
  ,  keywords: "Suvadra Barua,Suvadra,Barua,blockchain,block",
  robots: "index, follow",
  openGraph: {
    title: "Suvadra Barua",
    description:
      "Explore the academic portfolio of Dipon Talukder, a graduate student specializing in ML,AI. Discover research projects, publications, and professional achievements in ML AI, showcasing a commitment to advancing knowledge and contributing to the field.",
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/profilePic.jpg}`,
        width: 800,
        height: 600,
        alt: "Profile  picture",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Your Site Title",
  //   description: "Your site description here",
  //   // image: 'https://yourwebsite.com/image.jpg',
  // },
};
const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap' // <-- here
})
const open_sans = Open_Sans({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap' // <-- here
});
const archivo = Archivo({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap' // <-- here
})

const linksData = [
  { href: "#persona", label: "Persona", delay: 0.1, id: "persona" },
  { href: "#professional-experience", label: "Professional <br/> Exp.", delay: 0.2, id: "professional-experience" },
  { href: "#prestige", label: "Prestige", delay: 0.3, id: "prestige" },
  { href: "#projects ", label: "Projects", delay: 0.4, id: "projects" },
  { href: "#professional-development", label: "Professional <br/> Development ", delay: 0.5, id: "professional-development" },
  { href: "#participation-presentations", label: "Participation <br/> & <br/> Presentations ", delay: 0.6, id: "participation-presentations" },
  { href: "#contact", label: "Contact ", delay: 0.7, id: "contact" },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} md:grid md:grid-cols-[140px_1fr] bg-earth-100`}>
        <SideBar/>
        {children}</body>
    </html>
  );
}