import Image from "next/image";

export default function Feed() {
  return (
    <main className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 pt-6 pb-3">
        <Image src="/icons/profile.svg" alt="profile" width={32} height={32} />
        <div className="flex space-x-6 text-sm">
          <span className="border-b-2 border-black pb-1">Para ti</span>
          <span className="text-[#999]">Guardados</span>
        </div>
        <h1 className="font-typewriter text-xl">Babel</h1>
      </header>

      {/* Post 1 */}
      <div className="px-4 pb-6">
        <div className="flex items-center space-x-2 mb-1">
          <Image src="/icons/profile.svg" alt="profile" width={24} height={24} />
          <div>
            <p className="text-sm font-medium">@lalora</p>
            <p className="text-xs text-[#666]">González Catán, Argentina</p>
          </div>
        </div>
        <p className="font-bold text-sm mb-2">
          EL VECINO HABLA CON LOS PAJARITOS
        </p>
        <p className="whitespace-pre-line text-sm">
          qué lenta
          {"\n"}es la danza{"
"}de las nubes
          {"\n\n"}que deleitan{"
"}a los pájaros
          {"\n\n"}que miran{"
"}desde los cables{"
"}de la ciudad.
          {"\n\n"}Las miran y comentan{"
"}que los vientos allá arriba{"
"}corren rápido
          {"\n\n"}y que sus antepasados{"
"}sabían volar{"
"}sin nada a lo que aferrarse.
        </p>
        <div className="flex justify-end mt-3 space-x-4">
          <Image src="/icons/like.svg" alt="like" width={20} height={20} />
          <Image src="/icons/send.svg" alt="send" width={20} height={20} />
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-dashed mx-4 border-[#999] my-2" />

      {/* Post 2 */}
      <div className="px-4">
        <div className="flex items-center space-x-2 mb-1">
          <Image src="/icons/profile.svg" alt="profile" width={24} height={24} />
          <div>
            <p className="text-sm font-medium">@delfinasanda</p>
            <p className="text-xs text-[#666]">Caballo Chiquito, Argentina</p>
          </div>
        </div>
        <p className="font-bold text-sm mb-2">
          EL VECINO HABLA CON LOS PAJARITOS
        </p>
        <p className="whitespace-pre-line text-sm">
          qué lenta{"
"}es la danza{"
"}de las nubes
        </p>
        <div className="flex justify-end mt-3">
          <div className="bg-[#1C2B24] p-2 rounded-full">
            <Image src="/icons/write.svg" alt="edit" width={20} height={20} />
          </div>
        </div>
      </div>

      {/* NavBar */}
      <nav className="fixed bottom-0 w-full bg-[#F9F9F7] border-t border-[#ddd] flex justify-around items-center py-2">
        <Image src="/icons/casa.svg" alt="home" width={24} height={24} />
        <Image src="/icons/search.svg" alt="search" width={24} height={24} />
        <Image src="/icons/manito.svg" alt="notifs" width={24} height={24} />
        <div className="bg-[#1C2B24] p-2 rounded-full -mt-6">
          <Image src="/icons/lapiz.svg" alt="write" width={28} height={28} />
        </div>
        <Image src="/icons/mensajito.svg" alt="messages" width={24} height={24} />
        <Image src="/icons/premio.svg" alt="contests" width={24} height={24} />
        <Image src="/icons/colab.svg" alt="collab" width={24} height={24} />
      </nav>
    </main>
  );
}
