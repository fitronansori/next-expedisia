"use client";

import { navData } from "@/constants/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  className?: string;
  textClassName?: string;
  children?: React.ReactNode;
};

const NavLinks = ({ className, textClassName, children }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex", className)}>
      {navData.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className={cn(
            "hover:text-primary transition-colors duration-300 ease-in-out",
            textClassName,
            pathname === item.href && "text-primary"
          )}>
          {item.name}
        </Link>
      ))}

      {children}
    </nav>
  );
};
export default NavLinks;
