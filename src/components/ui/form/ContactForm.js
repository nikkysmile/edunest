"use client";

import { useState } from "react";

import { swal } from "@/lib/swal";
import { createMessage } from "@/services/messageService";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    const { error } = await createMessage(form);

    setLoading(false);

    if (error) {
      await swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Pesan gagal dikirim.",
      });

      return;
    }

    await swal.fire({
      icon: "success",
      title: "Berhasil",
      text: "Pesan berhasil dikirim.",
    });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-5"
    >
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nama"
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full rounded-xl border p-3"
        required
      />

      <input
        name="subject"
        value={form.subject}
        onChange={handleChange}
        placeholder="Subjek"
        className="w-full rounded-xl border p-3"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows={6}
        placeholder="Tulis pesan..."
        className="w-full rounded-xl border p-3"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-sky-600 px-6 py-3 text-white hover:bg-sky-700 disabled:opacity-50"
      >
        {loading ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}