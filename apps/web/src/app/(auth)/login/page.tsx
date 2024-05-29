import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "./components/auth-form";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/images/logo.svg"
          width={1280}
          height={843}
          alt="Authentication"
          className=""
        />
        {/* <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        /> */}
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <span
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Dont't have an Account?
          <Link href="/signup">
            {" "}
            <Button variant={"link"}>Register</Button>
          </Link>
        </span>
        <div className="relative h-full flex flex-col justify-evenly items-center bg-muted p-10 text-black lg:flex dark:border-r">
          {/* <div className="absolute inset-0" /> */}

          <Image
            src="/images/logo.svg"
            width={600}
            height={600}
            alt="Authentication"
            className=""
          />

          <blockquote className="space-y-2">
            <p className="text-5xl">Transform your Finance with AI</p>
          </blockquote>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to sign in to your Account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
