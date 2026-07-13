import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ProgramPage() {
  return (
    <h2 className="text-3xl font-bold">
      Manajemen Program
    </h2>
  );
  
  <Link href="/admin/program/new">
  <Button>
    Tambah Program
  </Button>
</Link>
}