import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form className="bg-slate-200 rounded px-8 pt-6 pb-8 mb-4">
        <input className="w-full rounded p-3 text-gray-700 mt-3" required type="text" placeholder="Username" />
        <input className="w-full rounded p-3 text-gray-700 mt-3" required type="password" placeholder="Password" />

        <Link href={"/"}>
          <button className="w-full bg-blue-500  hover:bg-blue-700 mt-3 text-white p-3 rounded" type="button">
            Sign In
          </button>
        </Link>

        <p className="text-center text-gray-500 text-xs mt-4">&copy;2020 Acme Corp. All rights reserved.</p>
      </form>
    </div>
  );
};

export default Login;
