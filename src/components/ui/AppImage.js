import Image from "next/image";

export default function AppImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  sizes = "100vw",
}) {
  const imageSrc =
    src && src.trim() !== ""
      ? src
      : "/images/placeholder.jpg";

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}