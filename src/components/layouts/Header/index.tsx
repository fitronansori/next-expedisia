import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header>
      <div className="container h-16 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <div className="hidden lg:flex items-center gap-10">
          <NavLinks
            className="items-center gap-10"
            textClassName="font-medium"
          />
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>

            <Button asChild>
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
};
export default Header;
