"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ProgramForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      title,
      description,
      icon,
    });
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