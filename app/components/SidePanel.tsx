'use client'

import { useState } from 'react'

export function SidePanel() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative h-screen flex items-center justify-center">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {open ? 'Fechar Painel' : 'Abrir Painel'}
      </button>

      {/* Painel lateral */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white p-4 shadow-lg transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Painel Lateral</h2>
        <p>Aqui vai o conteúdo do painel.</p>
      </div>
    </div>
  )
}

