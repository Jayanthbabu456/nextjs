import Link from "next/link";
export default function header() {
  return (
    <header className="flex justify-between items-center p-5">
      <Link href="/">
        <p className="text-3xl text-white">My Blog</p>
      </Link>
      <nav>
        <ul className="flex gap-[30px] items-center">
          <Link href="/">
            <li className="text-xl text-white">Login</li>
          </Link>
          <Link href="/">
            <li className="text-xl text-white">Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
