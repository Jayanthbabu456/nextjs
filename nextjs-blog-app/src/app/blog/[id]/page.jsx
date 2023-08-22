import Link from "next/link";
import Image from "next/image";

export default function Blogpost({ blog }) {
  return (
    <div className="flex gap-[20px] bg-white p-3 rounded-lg items-center hover:scale-95">
      <div>
        <Link href="/">
          <Image
            src={blog.img}
            width="350"
            height="350"
            className="rounded-md"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-[10px] text-black">
        <p className="text-2xl font-medium">{blog.title}</p>
        <p className="text-xl font-normal">{blog.desc}</p>
      </div>
    </div>
  );
}
