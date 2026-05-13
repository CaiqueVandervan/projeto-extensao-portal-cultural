"use client"

import { TextField } from "@mui/material"
import { FaPhotoVideo } from "react-icons/fa"

const EventModal = () => {

    return (
        <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid gap-3 bg-white p-4 rounded-2xl border-2 border-yellow-500">
            <h1 className="text-center text-[#facc15]">Adicionar Publicação nos Eventos</h1>

                <TextField size="small" label="Título" />

                <TextField size="small" label="Descrição" />

                <div className="border border-[rgba(0,0,0,0.23)] h-32 rounded-lg flex flex-col items-center justify-center gap-2 p-2">
                    <p className="text-sm text-gray-400">
                        Arraste uma imagem ou vídeo (opcional)
                    </p>
                    <FaPhotoVideo size={24} color="#facc15" />
                </div>

        </main>
    )
}

export default EventModal