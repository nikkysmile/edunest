"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { swal } from "@/lib/swal";
import { createTeacher, updateTeacher } from "@/services/teacherService";

export default function TeacherForm({
  initialData,
  isEdit = false,
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  name: initialData?.name ?? "",
  position: initialData?.position ?? "",
  photo: initialData?.photo ?? "",
  bio: initialData?.bio ?? "",
});

  function handleChange(e) {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
}

async function handleSubmit(e) {
  e.preventDefault();

  setLoading(true);

let error;

if (isEdit) {
  ({ error } = await updateTeacher(
    initialData.id,
    form
  ));
} else {
  ({ error } = await createTeacher(form));
}

  if (error) {
    setLoading(false);

    await swal.fire({
      icon: "error",
      title: "Gagal",
      text: "Guru gagal disimpan.",
    });

    return;
  }

  await swal.fire({
    icon: "success",
    title: "Berhasil",
    text: "Guru berhasil ditambahkan.",
    timer: 1800,
    showConfirmButton: false,
  });

  router.push("/admin/teacher");
  router.refresh();
}

  return (
    <form
       onSubmit={handleSubmit}
       className="space-y-6"
    >

      <div>
        <label className="mb-2 block font-medium">
          Nama Guru
        </label>

        <input
          className="w-full rounded-xl border p-3"
          placeholder="Masukkan nama guru"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Jabatan
        </label>

        <input
          name="position"
          value={form.position}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
          placeholder="Contoh: Kepala Sekolah"
         />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Foto
        </label>

        <input
          name="photo"
          value={form.photo}
          onChange={handleChange}
          className="w-full rounded-xl border p-3"
          placeholder="URL Foto"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Bio
        </label>

        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-xl border p-3"
          placeholder="Deskripsi singkat"
        />
      </div>

      <button
       type="submit"
       disabled={loading}
       className="rounded-xl bg-sky-600 px-6 py-3 text-white disabled:cursor-not-allowed disabled:opacity-50 hover:bg-sky-700"
       >
      {loading
        ? "Menyimpan..."
        : isEdit
        ? "Update Guru"
        : "Simpan Guru"}
      </button>

    </form>
  );
}