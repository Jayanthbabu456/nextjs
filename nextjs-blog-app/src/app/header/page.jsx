import Link from "next/link";

export default function Header() {
  const loggedIn = true;

  return (
    <header className="flex justify-between items-center p-5">
      <Link href="/">
        <p className="text-3xl text-white">My Blog</p>
      </Link>
      <nav>
        <ul className="flex gap-[30px] items-center">
          {loggedIn ? (
            <>
              <li className="text-xl text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl text-white">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-xl text-white">
                <Link href="/login">Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="text-xl text-white">
                <button className="border border-[#fff] px-4 py-2 rounded-md">
                  <Link href="/login">Login</Link>
                </button>
              </li>
              <li className="text-xl text-white">
                <button className="border border-[#fff] px-4 py-2 rounded-md">
                  <Link href="/register">Register</Link>
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
