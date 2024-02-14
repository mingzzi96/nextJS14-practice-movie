import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">HOME</Link>
          {path === "/" ? "✨" : null}
        </li>
        <li>
          <Link href="/about-us">ABOUT US</Link>
          {path === "/about-us" ? "🙋‍♀️" : null}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
