import Swal from "sweetalert2";

export const swal = Swal.mixin({
  buttonsStyling: false,

  customClass: {
    confirmButton:
      "rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-700",

    cancelButton:
      "ml-3 rounded-lg bg-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-400",
  },
});