import { getMessages } from "@/services/messageService";

export default async function MessagesPage() {
  const { data: messages, error } =
    await getMessages();

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil pesan.
      </p>
    );
  }

  return (
    <div className="mx-auto max-w-6xl">

      <h1 className="mb-8 text-3xl font-bold">
        Inbox Pesan
      </h1>

      <div className="space-y-4">

        {messages.map((message) => (
          <div
            key={message.id}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="font-bold">
                  {message.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {message.email}
                </p>

              </div>

              {!message.is_read && (
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-600">
                  Baru
                </span>
              )}

            </div>

            {message.subject && (
              <h4 className="mt-4 font-semibold">
                {message.subject}
              </h4>
            )}

            <p className="mt-2 whitespace-pre-line text-slate-600">
              {message.message}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}