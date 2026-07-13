import site from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto max-w-7xl px-6 text-center text-slate-600">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>

        <p className="mt-2">
          {site.email}
        </p>
      </div>
    </footer>
  );
}