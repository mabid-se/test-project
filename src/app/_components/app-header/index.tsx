"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logoipsum.png";
import { navLinks } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import ArrowDownSvg from "@/assets/svg/ArrowDownSvg";
import MobileHeader from "@/app/_components/app-header/MobileHeader";

const AppHeader = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = React.useState<boolean>(false);

  return (
    <div className="bg-white shadow-lg w-full">
      <div className="flex max-w-screen-xl justify-between px-6 py-4 lg:p-4 mx-auto">
        <Link href="/">
          <Image src={logo} alt="logoipsum" className="w-36" />
        </Link>
        <div className="hidden lg:flex gap-6">
          {navLinks.map((nav) =>
            nav.child ? (
              <div
                key={nav.name}
                onMouseEnter={() => setOpenDropdown(true)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <Link
                  key={nav.name}
                  href={nav.link}
                  id="dropdownHoverButton"
                  aria-selected={pathname === nav.link}
                  className="aria-selected:underline hover:underline underline-offset-4 decoration-2 font-medium text-base flex gap-1.5 items-center"
                >
                  {nav.name}
                  <ArrowDownSvg className="w-4 h-4 fill-current" />
                </Link>
                {openDropdown && (
                  <div
                    id="dropdownHover"
                    className="z-10 bg-white rounded-md shadow w-inherit fixed mt-2.5 flex flex-col"
                  >
                    {nav.child.map((nav) => (
                      <Link
                        key={nav.name}
                        href={nav.link}
                        className="py-2 px-3 hover:bg-gray-100 text-sm font-medium"
                      >
                        {nav.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={nav.name}
                href={nav.link}
                aria-selected={pathname === nav.link}
                className="aria-selected:underline hover:underline underline-offset-4 decoration-2 font-medium text-base"
              >
                {nav.name}
              </Link>
            )
          )}
        </div>
        <Button className="hidden lg:flex">Get Started</Button>
        <MobileHeader />
      </div>
    </div>
  );
};

export default AppHeader;
