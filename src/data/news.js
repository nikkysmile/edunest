import { Sprout } from "lucide-react";
import { Music } from "lucide-react";
import { Palette } from "lucide-react";

const news = [
  {
    id: 1,
    title: "Belajar Sambil Bermain",
    description:
      "Anak belajar melalui aktivitas yang menyenangkan.",
    icon: <Palette className="mb-6 h-12 w-12 text-sky-600" />,
  },
  {
    id: 2,
    title: "Pengembangan Karakter",
    description:
      "Menanamkan nilai disiplin, sopan santun, dan percaya diri.",
    icon: <Sprout className="mb-6 h-12 w-12 text-sky-600" />,
  },
  {
    id: 3,
    title: "Kreativitas",
    description:
      "Mengembangkan bakat seni, musik, dan motorik anak.",
    icon: <Music className="mb-6 h-12 w-12 text-sky-600" />,
  },
];

export default news;