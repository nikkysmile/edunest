"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import { createProgram, updateProgram } from "@/services/programService";

export default function ProgramForm({
  initialData = null,
  isEdit = false,
}) {

  const router = useRouter();

  const [title, setTitle] = useState(
  initialData?.title || ""
);

const [description, setDescription] = useState(
  initialData?.description || ""
);

const [icon, setIcon] = useState(
  initialData?.icon || ""
);

async function handleSubmit(e) {
  e.preventDefault();

  let error;

  if (isEdit) {
    ({ error } = await updateProgram(initialData.id, {
      title,
      description,
      icon,
    }));
  } else {
    ({ error } = await createProgram({
      title,
      description,
      icon,
    }));
  }

  if (error) {
    alert("Gagal menyimpan program.");
    console.error(error);
    return;
  }

  alert(
    isEdit
      ? "Program berhasil diperbarui!"
      : "Program berhasil ditambahkan!"
  );

  router.push("/admin/program");
  router.refresh();
}

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="mb-2 block font-medium">
          Judul Program
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-3"
          placeholder="Contoh: Kelas Seni"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Deskripsi
        </label>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-slate-300 p-3"
          placeholder="Deskripsi program..."
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Icon
        </label>

        <input
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          className="w-full rounded-xl border border-slate-300 p-3"
          placeholder="palette"
        />
      </div>

    <Button type="submit">
  Simpan Program
</Button>

    </form>
  );
}