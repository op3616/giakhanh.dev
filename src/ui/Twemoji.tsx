import type { TwemojiProps } from "@/lib/types";
import { kebabCase } from "@/lib/kebab-case";

export function Twemoji({ emoji, size = "twa-lg", className }: TwemojiProps) {
  let cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${
    className || ""
  }`;
  return <i className={cls.trim()} />;
}

export default Twemoji;
