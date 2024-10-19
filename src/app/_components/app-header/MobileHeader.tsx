import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/app/_components/ui/drawer";
import MenuRightSvg from "@/assets/svg/MenuRightSvg";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logoipsum.png";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const MobileHeader = () => {
  const pathname = usePathname();

  return (
    <Drawer direction="left">
      <DrawerTrigger className="lg:hidden">
        <MenuRightSvg className="fill-current w-7 h-auto" />
      </DrawerTrigger>
      <DrawerContent className="bg-white py-12 gap-y-12 items-center h-screen max-w-72 rounded-tr-3xl rounded-br-3xl lg:hidden px-4 border-0">
        <div className="flex flex-col gap-y-6">
          <Link href="/">
            <Image src={logo} alt="logoipsum" className="w-48" />
          </Link>
        </div>
        <div className="flex flex-col">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={`py-4 px-8 text-center font-normal text-xl border-b-2 ${
                pathname === item.link ? "border-primary" : "border-primary/20"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileHeader;
