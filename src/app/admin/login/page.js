export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-8 text-center text-3xl font-bold text-sky-600">
          EduNest Admin
        </h1>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <button
            className="w-full rounded-lg bg-sky-600 py-3 font-semibold text-white hover:bg-sky-700"
          >
            Login
          </button>

        </form>

      </div>
    </main>
  );
}