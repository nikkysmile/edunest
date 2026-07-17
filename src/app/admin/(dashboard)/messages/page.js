import MessageList from "@/components/admin/MessageList";
import { getMessages } from "@/services/messageService";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";

export default async function messagesPage({
  searchParams,
}) {
  const params = await searchParams;

  const page =
    Number(params?.page) || 1;

  const limit = 10;

  const {
    data: messages,
    count,
    error,
  } = await getMessages(page, limit);

  const totalPages = Math.ceil(
    (count ?? 0) / limit
  );

  if (error) {
    return (
      <p className="text-red-500">
        Gagal mengambil data pesan.
      </p>
    );
  }

  if (!messages || messages.length === 0) {
  return (
    <EmptyState
      title="Belum ada pesan"
      description="Belum ada pesan yang masuk."
    />
  );
}

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold">
          Pesan
        </h1>

      </div>

      <MessageList messages={messages} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        basePath="/admin/messages"
      />

    </div>
  );
}