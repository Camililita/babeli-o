import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Feed() {
  const [tab, setTab] = useState('foryou');

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1C2B24] px-4 pb-28 pt-6 font-lora">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <img
          src="/profile.jpg"
          alt="User avatar"
          className="w-9 h-9 rounded-full object-cover"
        />
        <h1 className="text-[28px] font-typewriter">Babel</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-[#1C2B24]/40 text-sm mb-3">
        <button
          className={`pb-1 ${tab === 'foryou' ? 'border-b-2 border-[#1C2B24] font-bold' : 'text-[#999]'}`}
          onClick={() => setTab('foryou')}
        >
          Para ti
        </button>
        <button
          className={`pb-1 ${tab === 'saved' ? 'border-b-2 border-[#1C2B24] font-bold' : 'text-[#999]'}`}
          onClick={() => setTab('saved')}
        >
          Guardados
        </button>
      </div>

      {/* Post */}
      <div className="space-y-10">
        {[1, 2].map((item, idx) => (
          <div key={idx} className="border-b border-dashed border-[#1C2B24]/40 pb-6">
            <div className="flex items-center gap-2 mb-1">
              <img
                src="/profile.jpg"
                alt="Avatar"
                className="w-7 h-7 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-lora">@lalora</p>
                <p className="text-xs text-[#999] -mt-1">González Catán, Argentina</p>
              </div>
            </div>
            <p className="font-bold text-[14px] font-lora uppercase mt-2">
              EL VECINO HABLA CON LOS PAJARITOS
            </p>
            <p className="whitespace-pre-line mt-2 text-sm">
              qué lenta
              {'\n'}es la danza
              {'\n'}de las nubes
              {'\n'}
              {'\n'}que deleitan
              {'\n'}a los pájaros
              {'\n'}
              {'\n'}que miran
              {'\n'}desde los cables
              {'\n'}de la ciudad.
              {'\n'}
              {'\n'}Las miran y comentan
              {'\n'}que los vientos allá arriba
              {'\n'}corren rápido
              {'\n'}
              {'\n'}y que sus antepasados
              {'\n'}sabían volar
              {'\n'}sin nada a lo que aferrarse.
            </p>
            <div className="flex justify-end gap-4 mt-2">
              <img src="/icons/colab.svg" className="w-5" />
              <img src="/icons/mensajito.svg" className="w-5" />
            </div>
          </div>
        ))}
      </div>

      {/* NavBar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F9F9F7] border-t border-[#1C2B24]/10 flex justify-around items-center h-14 text-[#1C2B24]">
        <img src="/icons/casa.svg" className="w-5" />
        <img src="/icons/search.svg" className="w-5" />
        <img src="/icons/manito.svg" className="w-5" />
        <div className="bg-[#1C2B24] rounded-full p-2 -mt-6">
          <img src="/icons/lapiz.svg" className="w-5 invert" />
        </div>
        <img src="/icons/mensajito.svg" className="w-5" />
        <img src="/icons/premio.svg" className="w-5" />
        <img src="/icons/colab.svg" className="w-5" />
      </div>
    </div>
  );
}
