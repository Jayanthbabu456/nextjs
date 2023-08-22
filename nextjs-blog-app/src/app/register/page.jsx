import Link from "next/link";
export default function Register() {
  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col justify-center items-center">
        <p className="text-center text-3xl pb-7">Register</p>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name"
          className="text-black text-xl  p-3 outline-none border border-[#828282] rounded-md"
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          className="text-black text-xl  p-3 outline-none border border-[#828282] rounded-md"
        />
        <br />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
          className="text-black text-xl  p-3 outline-none border border-[#828282] rounded-md"
        />
        <Link href="/login">
          <button className="border border-[#fff] text-white text-xl px-4 py-2 font-medium rounded-md mt-5 ">
            Register
          </button>
        </Link>
      </form>
    </div>
  );
}
