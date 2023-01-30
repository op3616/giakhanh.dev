"use client";

import { IconCommand, IconMenu } from "@tabler/icons-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useKBar } from "kbar";

import { HEADER_LINKS } from "@/config/links";
import Logo from "./Logo";
import Dropdown from "./Dropdown";

const Header = () => {
  const pathname = usePathname();
  const { query } = useKBar();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 shadow-sm saturate-[1.8] backdrop-blur-[10px] dark:bg-black/50 dark:saturate-100">
      <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-1">
          <Logo width={28} height={28} />
        </Link>

        {/* Content */}
        <div className="flex items-center gap-2">
          <ul className="hidden space-x-2 md:flex">
            {HEADER_LINKS.map((link, i) => (
              <li
                key={`header-link-${i}`}
                className={clsx(
                  "rounded py-2 px-3 text-sm font-medium transition-colors duration-300",
                  {
                    ["text-accent-500 hover:bg-accent-100 hover:text-secondary"]:
                      link.href !== pathname,
                  },
                  {
                    ["bg-accent-200"]: link.href === pathname,
                  }
                )}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md duration-300 hover:bg-accent-200"
            onClick={() => query.toggle()}
            aria-label="Command Bar"
          >
            <IconCommand size={20} />
          </button>
          <Dropdown>
            <Dropdown.Trigger>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-md duration-300 hover:bg-accent-200 md:hidden"
                aria-label="Toggle menu"
              >
                <IconMenu size={20} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content>
              {HEADER_LINKS.map((link, i) => (
                <Dropdown.Item key={i}>
                  <Link href={link.href} className="flex items-center gap-4">
                    {link.icon}
                    <div>{link.text}</div>
                  </Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Content>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export default Header;