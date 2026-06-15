import { MessageCircle } from "lucide-react";

export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5561986838241"
      target="_blank"
      rel="noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition-all
        hover:scale-110
      "
    >
      <MessageCircle size={28} />
    </a>
  );
}