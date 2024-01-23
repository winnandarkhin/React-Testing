import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h3 className="mb-5 text-lg">React Testing</h3>
      <ul className="list-disc">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/list-item">List Item</Link>
        </li>
        <li>
          <Link href="/button">Button</Link>
        </li>
      </ul>
    </div>
  );
}
