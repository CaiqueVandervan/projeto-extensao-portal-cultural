"use client"

import { TextField } from "@mui/material"
import { FaPhotoVideo } from "react-icons/fa"
import { IoMdArrowRoundBack } from "react-icons/io";

interface EventModalProps {
    onClick: () => void
}

const EventModal = ({ onClick }: EventModalProps) => {

    return (
        <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl border-2 border-yellow-500 w-96">

            <div className="relative mb-3">
                <IoMdArrowRoundBack className="absolute top-1 cursor-pointer"
                    color="#facc15"
                    onClick={onClick} />
                <h1 className="text-center text-[#facc15]">Adicionar Publicação nos Eventos</h1>
            </div>

            <div className="grid gap-3">
                <TextField size="small" label="Título" />

                <TextField size="small" label="Descrição" />

                <div className="border border-[rgba(0,0,0,0.23)] h-32 rounded-lg flex flex-col items-center justify-center gap-2 p-2">
                    <p className="text-sm text-gray-400">
                        Arraste uma imagem ou vídeo (opcional)
                    </p>
                    <FaPhotoVideo size={24} color="#facc15" />
                </div>
            </div>
        </main>
    )
}

export default EventModal