import { InfiniteMovingCards } from "@/components/infiniteMovingcard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MailIcon } from "lucide-react";
import Image from "next/image";

const features: { title: string; description: string }[] = [
  {
    title: "Smart Expense Tracking",
    description:
      "Easily categorize and track your expenses in real-time, allowing you to gain a comprehensive understanding of where your money is going.",
  },
  {
    title: "Investment Insights",
    description:
      "Keep a close eye on your investment portfolio with real-time updates and personalized analysis. Our AI algorithms help you optimize your investment strategy for maximum returns.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Set financial goals and track your progress with ease. Whether you're saving for a vacation, a new car, or retirement, our app helps you stay motivated and on track.",
  },
];

export default function Home() {
  return (
    <main className="">
      <div className=" ml-12 flex flex-row items-center justify-center min-h-screen">
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
      <div className=" py-8 bg-[#EAFAEC]">
        <span className="flex flex-row justify-evenly items-center">
          <h4 className=" text-2xl">Simple</h4>
          <h4 className=" text-2xl">Fast</h4>
          <h4 className=" text-2xl">Easy to use</h4>
        </span>
      </div>
      <div className=" flex flex-col justify-center items-center mt-20">
        <h1 className=" text-4xl mb-8">Features</h1>
        <div className=" flex flex-row justify-evenly items-center space-x-12">
          {features && features.map((feature) => <FeaturesCard {...feature} />)}
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center  mt-20">
        <div className=" w-2/3 bg-[#FDFBF9] py-16 border flex flex-col justify-center items-center space-y-8">
          <h1 className=" text-3xl">Start saving today!</h1>
          <h3 className=" text-xl">
            Experience the future of finance management today with our AI
            financial app tracker
          </h3>
          <Button variant={"default"} className=" rounded-lg text-lg px-6 py-3">
            Sign up now
          </Button>
        </div>
      </div>
      <div className=" flex flex-row justify-evenly items-center  mt-20">
        <h1 className=" text-4xl"> Reviews</h1>
        <Image
          src={"/images/reviews.svg"}
          width={400}
          height={400}
          alt="reviews"
        />
      </div>
      <div className="mt-6 mb-2">
        <TestimonialCards />
      </div>
      <div className=" flex flex-col justify-center items-center mt-16">
        <Image
          src={"/images/getInTouch.svg"}
          width={400}
          height={400}
          alt="Get In Touch"
        />
        <h1 className=" text-3xl font-semibold mt-4">Stay in the know</h1>
        <h3 className=" text-xl font-light mt-4 mb-6">
          {" "}
          Sign up to Fund flow AI newsletter for all the latest news,
          <br /> trends and insights from our industry experts.
        </h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <span className=" bg-slate-100 flex flex-row px-4 py-2 rounded-lg">
            <MailIcon size={40} className=" text-green-600" />
            <Input type="email" placeholder="Email" />
          </span>
          <Button
            variant={"ghost"}
            type="submit"
            className="border-2 rounded-lg border-green-600 "
          >
            Subscribe
          </Button>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center mt-16">
        <Image src={"/images/faq.svg"} width={500} height={500} alt="FAQ" />
        <h1 className=" text-4xl mt-8 mb-2">FAQ</h1>
        <div className=" w-2/4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                💳 How much does fund flow cost
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur. Et massa in magna quam.
                Facilisis velit non magnis fermentum massa feugiat eu nunc. Amet
                pretium senectus aliquet
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>💽 How does fund flow work</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur. Et massa in magna quam.
                Facilisis velit non magnis fermentum massa feugiat eu nunc. Amet
                pretium senectus aliquet quam id scelerisque. Ac rhoncus
                placerat penat
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                👩🏽‍🔬 What are the benefits of using Fund flow
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur. Et massa in magna quam.
                Facilisis velit non magnis fermentum massa feugiat
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
}

function FeaturesCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className=" bg-[#FDFBF9] shadow-md w-[300px] p-4 rounded-lg">
      <h3 className=" text-2xl">{title}</h3>
      <p className=" mt-4">{description}</p>
    </div>
  );
}

function TestimonialCards() {
  return (
    <div className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        className=" bg-white"
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
