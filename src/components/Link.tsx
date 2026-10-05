import type { Link } from "../utils/types";
import { Laptop, CodeXml, LinkIcon } from "lucide-react";

export default function Link({ link }: { link: Link }) {
  if (link.type.toLowerCase() === "code")
    return (
      <a href={link.url} className="flex gap-1">
        <CodeXml width="20" />
        <span>Code</span>
      </a>
    );
  if (link.type.toLowerCase() === "demo")
    return (
      <a href={link.url} className="flex gap-1">
        <Laptop width="20" />
        <span>Demo</span>
      </a>
    );
  return (
    <a href={link.url} className="flex gap-1">
      <LinkIcon width="16" />
      {link.type}
    </a>
  );
}
