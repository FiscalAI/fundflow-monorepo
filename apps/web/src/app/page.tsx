import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ml-12 min-w-full min-h-screen">
      <div className="flex flex-row items-center justify-center min-h-screen">
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 h-full">
          <h1 className=" text-5xl">Transform Your Finances with AI Power!</h1>
          <h2 className=" text-2xl mt-9">
            Revolutionize your finances with our AI-powered app. Effortlessly
            track expenses, optimize investments, and reach your goals—all in
            one place.
          </h2>
          <span>
            <Button variant={"default"} className=" mt-12 rounded-lg text-lg">
              Sign up
            </Button>
            <Button variant={"ghost"} className=" mt-12 rounded-lg text-lg">
              Book a demo
            </Button>
          </span>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 p-4 h-full">
          <Image
            src="/images/heroimg.svg"
            width={500}
            height={500}
            alt="fiscal"
          />
        </div>
      </div>
    </main>
  );
}
