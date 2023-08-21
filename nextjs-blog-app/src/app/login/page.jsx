export default function Login() {
  return (
    <div className="h-[85vh] flex justify-center items-center">
      <form className="flex flex-col justify-center items-center">
        <p className="text-center text-3xl pb-7">Login</p>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter username"
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
        <button className="border border-[#fff] text-white text-xl px-4 py-2 font-medium rounded-md mt-5 ">
          Login
        </button>
      </form>
    </div>
  );
}
