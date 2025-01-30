import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <NavLinks
          className="h-full flex-col justify-center gap-4"
          textClassName="text-2xl font-semibold">
          <Link
            href={"/login"}
            className="text-2xl font-semibold hover:text-primary transition-colors duration-300 ease-in-out">
            Login
          </Link>

          <Link
            href={"/sign-up"}
            className="text-2xl font-semibold hover:text-primary transition-colors duration-300 ease-in-out">
            Sign Up
          </Link>
        </NavLinks>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
