export const theme = {
  colors: {
    primary: "text-sky-600",
    secondary: "text-slate-700",

    heading: "text-slate-900",
    body: "text-slate-600",

    background: "bg-white",
    section: "bg-slate-50",
    card: "bg-white",
  },

  button: {
    base: "rounded-xl px-6 py-3 font-semibold transition",

    primary:
      "bg-sky-600 text-white hover:bg-sky-700",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100",
  },

   card: {
    base:
      "rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl",
  },

  radius: {
    card: "rounded-2xl",
    button: "rounded-xl",
  },

  shadow: {
    card: "shadow-md",
    hover: "hover:shadow-xl hover:-translate-y-1 transition",
  },

  spacing: {
    section: "py-24",
    container: "max-w-7xl mx-auto px-6",
  },
};