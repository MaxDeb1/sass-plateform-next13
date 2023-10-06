import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 background-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-x-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>quill.</span>
          </Link>

          {/* todo : Add mobile navbar */}

          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
            </>
            <LoginLink
              href="/pricing"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Sign in
            </LoginLink>
            <RegisterLink
              href="/pricing"
              className={buttonVariants({
                size: "sm",
              })}
            >
              Get started <ArrowRight className="ml-1.5 h-5 w-5" />
            </RegisterLink>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;