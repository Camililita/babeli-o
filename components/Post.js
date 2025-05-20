// components/Post.js
import Image from 'next/image';

export default function Post({ user, location, title, poem, avatar }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-1">
        <Image src={avatar} alt={user} width={24} height={24} className="rounded-full object-cover aspect-square" />
        <div>
          <p className="text-sm font-bold">{user}</p>
          <p className="text-xs text-[#1C2B24]/50">{location}</p>
        </div>
      </div>
      <p className="font-bold mt-2 mb-2 uppercase tracking-wide">{title}</p>
      <p className="whitespace-pre-line leading-relaxed mb-4">{poem}</p>
      <div className="flex justify-end gap-4 mb-2">
        <Image src="/icons/guardado.svg" alt="Guardar" width={28} height={28} />
        <Image src="/icons/avioncito.svg" alt="Enviar" width={28} height={28} />
      </div>
      <hr className="border-t-2 border-dashed border-[#1C2B24]/40 my-6" />
    </div>
  );
}
