import Link from "next/link";

import { cn } from "@/lib/utils";

import React from "react";

export function MainNav({
  className,
  loggedin,
  ...props
}: React.HTMLAttributes<HTMLElement> & { loggedin: boolean }) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {loggedin ? (
        <>
          <Link
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard`}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Overview
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/customers`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Customers
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/employees`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Employees
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/products`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href={`${process.env.NEXT_PUBLIC_CLIENT_URL}/dashboard/settings
            `}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Settings
          </Link>
        </>
      ) : (
        <div className="text-md font-medium transition-colors space-x-3">
          <Link href="/pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
          <Link href="/support" className="hover:text-primary">
            Support
          </Link>
        </div>
      )}
    </nav>
  );
}
