"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import React, { FC, PropsWithChildren } from "react";
import { toast } from "react-hot-toast";

type PreProps = {
  "data-language": string;
  "data-theme": string;
};

const Pre: FC<PropsWithChildren<PreProps>> = ({
  children,
  "data-theme": theme,
  "data-language": language,
}) => {
  const textInput = React.useRef<HTMLPreElement>(null);
  const [isCopied, setCopied] = React.useState(false);

  const onCopy = async () => {
    setCopied(true);

    if (!navigator?.clipboard) {
      toast.error("Access to clipboard rejected!");
    }

    try {
      await navigator.clipboard.writeText(textInput.current.textContent);
      toast.success("Copied");
    } catch {
      toast.error("Failed to copy!");
    }
  };

  React.useEffect(() => {
    if (!isCopied) return;

    const timerId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [isCopied]);

  return (
    <>
      <pre
        className="relative"
        data-theme={theme}
        data-language={language}
        ref={textInput}
      >
        {children}
      </pre>
      <button
        className="absolute top-4 right-4 opacity-0 transition [div:hover>&]:opacity-100"
        onClick={onCopy}
        data-theme={theme}
      >
        {isCopied ? <IconCheck size={20} /> : <IconCopy size={20} />}
      </button>
    </>
  );
};

export default Pre;
