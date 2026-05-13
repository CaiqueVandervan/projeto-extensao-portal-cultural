"use client"

import { Button } from "@mui/material"
import { useState } from "react"
import PublicationModal from "./components/PublicationModal"

const Home = () => {

  const [openPublicationModal, setOpenPublicationModal] = useState<boolean>(false)

  return (
    <main className="h-screen w-full p-2">
      <section className="bg-white h-full rounded-2xl flex flex-col">
        <header className="text-red-600 text-4xl p-4">
          Portal UFC
        </header>
        <div className="px-4 pb-4 flex flex-1 ">
          <div className="w-full flex items-center justify-center">
            feed
          </div>
          <div className="w-full flex items-center justify-center">
            <Button
              variant="contained"
              onClick={() => setOpenPublicationModal(true)}
              sx={{ background: "#ef4444", }}
            >
              Publicar
            </Button>
          </div>
          <div className="w-full flex items-center justify-center">
            eventos
          </div>
        </div>

      </section>

      <PublicationModal open={openPublicationModal} onClose={() => setOpenPublicationModal(false)} />
    </main>
  )
}
export default Home