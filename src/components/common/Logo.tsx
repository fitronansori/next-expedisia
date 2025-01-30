import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  textClassName?: string;
};

const Logo = ({ className, textClassName }: LogoProps) => {
  return (
    <Link href={"/"} className={cn("flex items-center gap-4", className)}>
      <Image
        src="/assets/icons/logo.svg"
        alt="Logo"
        width={100}
        height={100}
        className="size-10"
      />

      <h1 className={cn("text-2xl font-semibold", textClassName)}>Expedisia</h1>
    </Link>
  );
};
export default Logo;
