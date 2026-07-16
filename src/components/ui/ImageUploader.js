"use client";

import { useMemo } from "react";
import AppImage from "./AppImage";

export default function ImageUploader({
  value,
  onChange,
  label = "Upload Gambar",
}) {
  function handleFileChange(e) {
    if (e.target.files?.length > 0) {
      onChange(e.target.files[0]);
    }
  }

  const preview = useMemo(() => {
    if (!value) return null;

    if (typeof value === "string") {
      return value;
    }

    return URL.createObjectURL(value);
  }, [value]);

  return (
    <div className="space-y-3">
      <label className="block font-medium">
        {label}
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full rounded-xl border p-3"
      />

      {preview && (
        <AppImage
          src={preview}
          alt="Preview"
          width={600}
          height={400}
          className="h-48 w-full rounded-xl object-cover"
        />
      )}
    </div>
  );
}