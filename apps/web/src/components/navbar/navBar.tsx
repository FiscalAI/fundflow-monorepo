"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon, Search } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import TeamSwitcher from "../dashboard/teamSwitcher";
import { MainNav } from "../dashboard/mainNav";
import { UserNav } from "../dashboard/userNav";
import { checkValues } from "@/scripts/check-user-auth";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [logginIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const smallDevice = window.innerWidth <= 800;

    if (smallDevice) {
      setMobileScreen(true);
    }
    // if (process.browser) {
    //   const logginIn: boolean = checkValues();
    //   setLoggedIn(logginIn);
    // }
  }, []);

  return (
    <>
      <div className="border-b h-12 z-auto ">
        <div
          className={cn(
            logginIn
              ? "flex items-center px-4"
              : "flex justify-between items-center px-4",
          )}
        >
          {logginIn ? <TeamSwitcher className=" text-black" /> : <></>}
          <MainNav className="mx-6" loggedin={logginIn} />
          <div className="ml-auto flex items-center space-x-4">
            {logginIn ? (
              <>
                <Search />
                <UserNav />
              </>
            ) : (
              <>
                <Link href="/signin">
                  <Button variant={"outline"} className=" text-black">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
