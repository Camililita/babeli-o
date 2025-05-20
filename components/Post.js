import Image from 'next/image';

export default function Post({ user, location, title, poem }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-1">
        <Image src="/profile/avatar.svg" alt={user} width={24} height={24} className="rounded-full" />
        <div>
          <p className="text-sm font-bold">{user}</p>
          <p className="text-xs text-[#1C2B24]/50">{location}</p>
        </div>
      </div>
      <p className="font-bold mt-2 mb-2 uppercase tracking-wide">{title}</p>
      <p className="whitespace-pre-line leading-relaxed mb-4">{poem}</p>
      <div className="flex gap-4">
        <Image src="/icons/colab.svg" alt="Colaborar" width={20} height={20} />
        <Image src="/icons/send.svg" alt="Enviar" width={20} height={20} />
      </div>
      <hr className="border-t border-dashed border-[#1C2B24]/30 my-6" />
    </div>
  );
}

