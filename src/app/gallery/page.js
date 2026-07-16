import PageHeader from "@/components/ui/PageHeader";
import Gallery from "@/components/sections/Gallery";
import { getGalleries } from "@/services/galleryService";

export default async function GalleryPage() {
  const { data: galleries, error } = await getGalleries();

  if (error) {
    console.error(error);
  }

  return (
    <>
      <PageHeader
       
      />

      <Gallery galleries={galleries ?? []} />
    </>
  );
}