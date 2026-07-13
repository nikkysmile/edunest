export default function ErrorState({
  message = "Terjadi kesalahan."
}) {
  return (
    <div className="py-20 text-center">
      <h3 className="text-red-600 text-xl font-semibold">
        {message}
      </h3>
    </div>
  );
}