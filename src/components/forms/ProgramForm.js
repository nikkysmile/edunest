"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import { createProgram } from "@/services/programService";

export default function ProgramForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await createProgram({
      title,
      description,
      icon,
    });

    if (error) {
      alert("Gagal menyimpan program");
      console.log(error);
      return;
    }

    router.push("/admin/program");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label>Icon</label>

        <input
          className="mt-2 w-full rounded-xl border p-3"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>

      <div>
        <label>Judul</label>

        <input
          className="mt-2 w-full rounded-xl border p-3"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Deskripsi</label>

        <textarea
          rows={5}
          className="mt-2 w-full rounded-xl border p-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <Button type="submit">
        Simpan
      </Button>
    </form>
  );
}