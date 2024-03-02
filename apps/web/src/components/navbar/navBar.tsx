"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
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

const NavBar = () => {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [logginIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const smallDevice = window.innerWidth <= 800;

    if (smallDevice) {
      setMobileScreen(true);
    }
    // const logginIn = checkValues();
    setLoggedIn(logginIn);
  }, []);

  return (
    <nav className="bg-opacity-50 backdrop-filter backdrop-blur-lg flex items-center justify-between fixed z-20 w-full">
      <div className="flex flex-row justify-between items-center w-full h-16 px-4">
        <div className="flex flex-row items-center space-x-4 ">
          <div className="text-2xl font-bold ">
            <Link href="/">
              <Image src={"/Logo.png"} alt="logo" width={200} height={100} />
            </Link>
          </div>
        </div>
        {mobileScreen ? (
          <div className=" grid grid-cols-2">
            <div>
              <Sheet>
                <SheetTrigger className=" justify-items-end items-end">
                  <MenuIcon size={30} />
                </SheetTrigger>
                <SheetContent side={"left"}>
                  <SheetHeader>
                    <SheetTitle>Contents</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Link href="/pricing">
                        <Button variant={"ghost"}>Pricing</Button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Link href="/about">
                        <Button variant={"ghost"}>About</Button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Link href="/support">
                        <Button variant={"ghost"}>Contact</Button>
                      </Link>
                    </div>
                    {logginIn ? (
                      <>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Link href="/signin">
                            <Button variant={"ghost"}>Login</Button>
                          </Link>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Link href="/signup">
                            <Button>Get Started</Button>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Link href="/dashboard">
                          <Button variant={"ghost"}>Dashboard</Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </SheetContent>
                <SheetClose />
              </Sheet>
            </div>
            <div>
              {/* {logginIn ? ( */}
              {/* <> */}
              {/* <UserAvatar /> */}
              {/* </> */}
              {/* ) : ( */}
              {/* <></> */}
              {/* )} */}
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-row items-center space-x-4 border rounded-full z-20 shadow-sm h-10">
              <Link href="/pricing">
                <Button variant={"ghost"} className="text-lg  rounded-full">
                  Pricing
                </Button>
              </Link>
              <Link href="/about">
                <Button variant={"ghost"} className="text-lg  ">
                  About
                </Button>
              </Link>
              <Link href="/support">
                <Button variant={"ghost"} className="text-lg ">
                  Contact
                </Button>
              </Link>
            </div>
            <div
              className="flex flex-row
                items-center
                space-x-4
                "
            >
              {/* {logginIn ? ( */}
              <>{/* <UserAvatar /> */}</>
              {/* ) : ( */}
              <>
                <Link href="/signin">
                  <Button variant={"outline"} className=" text-black">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button variant={"outline"} className=" text-black">
                    Sign Up
                  </Button>
                </Link>
              </>
              {/* )} */}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
