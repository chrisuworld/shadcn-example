// import "public/registry/themes.css";
import { Metadata } from "next";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { ThemesTabs } from "@/components/tabs";
import { GitBranchIcon, StarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Header from "./header";
import EmailSubscribe from "@/components/email-subscribe";

export const metadata: Metadata = {
  title: "Shadcn UI Customizer",
  description:
    "Customize Shadcn UI to match your style. Choose colors, adjust themes, and copy the generated CSS.",
  authors: [
    {
      name: "Christian Glatz",
      url: "https://github.com/chrisuworld/",
    },
    {
      name: "Shadcn",
      url: "https://ui.shadcn.com",
    },
  ],
};

export default function ThemesPage() {
  return (
    <>
      <Header />
      <div className="w-full">
        {/* Hero Section */}
        <ThemeWrapper
          defaultTheme="zinc"
          className="relative flex flex-col items-center justify-center pt-4 md:pt-0 !text-center pb-16"
        >
          <PageHeader className="!text-center flex flex-col gap-2 py-2">
            <PageHeaderHeading>
              ✨ Customize Shadcn UI to Match Your Style ✨
            </PageHeaderHeading>
            <PageHeaderDescription className="w-full !text-center flex justify-center">
              Choose colors, adjust themes, and copy the generated CSS.
            </PageHeaderDescription>
            <div className="flex flex-col items-center w-full justify-center mt-3 gap-6">
              <div className="flex w-full max-w-sm gap-4">
                <Link
                  href="https://github.com/chrisuworld/shadcn-example"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full"
                  )}
                  target="_blank"
                >
                  <StarIcon className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
              <EmailSubscribe />
              <div>
                <p className="flex gap-2 text-center text-sm sm:text-left">
                  <span>
                    Created by{" "}
                    <Link
                      href="https://github.com/chrisuworld/"
                      className="font-medium underline underline-offset-4"
                      target="_blank"
                    >
                      @chrisuworld
                    </Link>
                  </span>
                  {" | "}
                  <span>
                    UI components by{" "}
                    <Link
                      href="https://twitter.com/shadcn"
                      className="font-medium underline underline-offset-4"
                      target="_blank"
                    >
                      @shadcn
                    </Link>
                    .
                  </span>
                </p>
              </div>
            </div>
          </PageHeader>
        </ThemeWrapper>
        {/* Demo or Screenshots Section */}
        <section className="relative">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight">
                See It in Action
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Watch how the Shadcn UI Customizer works in{" "}
                <Link
                  className="text-foreground font-medium underline underline-offset-4"
                  href="/"
                >
                  Themes{" "}
                </Link>{" "}
                or{" "}
                <Link
                  className="text-foreground font-medium underline underline-offset-4"
                  href="/blocks"
                >
                  Blocks{" "}
                </Link>
                !
              </p>
            </div>
            <div className="mt-12">
              <ThemesTabs />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="flex flex-col gap-2 text-center text-sm sm:text-left">
                <span>
                  Created by{" "}
                  <Link
                    href="https://github.com/chrisuworld/"
                    className="font-medium underline underline-offset-4"
                    target="_blank"
                  >
                    @chrisuworld
                  </Link>
                </span>
                <span>
                  UI components by{" "}
                  <Link
                    href="https://ui.shadcn.com"
                    className="font-medium underline underline-offset-4"
                    target="_blank"
                  >
                    Shadcn UI
                  </Link>
                  .
                </span>
                <span className="text-center text-sm sm:text-left">
                  Open source. MIT license.
                </span>
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/chrisuworld/shadcn-example"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                  target="_blank"
                >
                  <StarIcon className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
