// components/Post.js
import Image from 'next/image';

export default function Post({ user, location, title, poem, avatar }) {
  return (
    <div className="mb-10">
      <div className="flex gap-2 mb-1">
        <Image src={avatar} alt={user} width={36} height={36} className="rounded-full object-cover aspect-square" />
        <div>
          <p className="text-sm font-bold">{user}</p>
          <p className="text-xs text-[#1C2B24]/50">{location}</p>
        </div>
      </div>
      <div className="ml-[46px]">
        <p className="font-extrabold mt-2 mb-2 uppercase tracking-wide text-[13px]">{title}</p>
        <p className="whitespace-pre-line leading-relaxed mb-4 text-[15px]">{poem}</p>
        <div className="flex justify-end gap-4 mb-2">
          <Image src="/icons/guardado.svg" alt="Guardar" width={28} height={28} />
          <Image src="/icons/avioncito.svg" alt="Enviar" width={28} height={28} />
        </div>
        <hr className="border-t border-dashed border-[#1C2B24]/40 my-10" style={{ borderTopStyle: 'dashed', borderTopWidth: '4px', borderSpacing: '2px' }} />
      </div>
    </div>
  );
}
