import Link from "next/link";
import navigation from "@/config/navigation";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-sky-600">
          EduNest
        </h1>

        <nav className="hidden gap-8 md:flex">
          {
            navigation.map((item)=>(
            <Link
              key={item.href}
              href={item.href}
            >

            {item.name}

             </Link>
             ))
            }
        </nav>
      </div>
    </header>
  );
}