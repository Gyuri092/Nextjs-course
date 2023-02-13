import Link from "next/link";

export default function Homepage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">포트폴리오</Link>
        </li>
        <li>
          <Link href="/clients">클라이언트</Link>
        </li>
      </ul>
    </div>
  );
}
