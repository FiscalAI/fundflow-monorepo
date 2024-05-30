import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function NavBarComponent() {
  return (
    <div className=" h-16 flex flex-row justify-between items-center mx-5">
      <Image src="/images/logo.svg" width={150} height={150} alt="logo" />
      <div>
        <Link href="/feature">
          <Button variant={"ghost"} className=" mr-4">
            Features
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant={"ghost"} className=" mr-4">
            Contact US
          </Button>
        </Link>
        <Link href="/viewdemo">
          <Button variant={"ghost"} className=" mr-4">
            Demo Dashboard
          </Button>
        </Link>
      </div>
      <div className="flex flex-row">
        <Link href={"/signup"}>
          <Button variant={"default"} className=" mr-4">
            Sign up
          </Button>
        </Link>
        <div>
          <Link href={"/login"}>
            <Button variant={"outline"} className=" mr-4">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
