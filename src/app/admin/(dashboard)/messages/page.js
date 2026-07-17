import MessageList from "@/components/admin/MessageList";
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

      <MessageList messages={messages} />

    </div>
  );
}