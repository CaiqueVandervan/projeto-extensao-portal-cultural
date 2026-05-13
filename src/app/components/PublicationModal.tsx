"use client"

import { Modal } from "@mui/material"
import { useState } from "react"
import FeedModal from "./FeedModal"
import EventModal from "./EventModal"

interface PublicationModalProps {
    open: boolean
    onClose: () => void
}

const PublicationModal = ({ open, onClose }: PublicationModalProps) => {

    const [selectedKindOfModal, setSelectedKindOfModal] = useState<string>()

    const handleChangeModal = (kindOfModal: string) => {
        setSelectedKindOfModal(kindOfModal)
    }

    const handleCloseModal = () => {
        onClose()
        setSelectedKindOfModal(undefined)
    }

    return (
        <main>
            <Modal open={open} onClose={handleCloseModal}>
                <div>
                    {selectedKindOfModal === undefined && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
                            <div className="bg-blue-400 w-40 rounded-2xl h-20 flex  items-center justify-center" onClick={() => handleChangeModal("feed")}>
                                Feed
                            </div>
                            <div className="bg-yellow-500 w-40 rounded-2xl h-20 flex items-center justify-center" onClick={() => handleChangeModal("event")}>
                                Eventos
                            </div>
                        </div>
                    )}

                    {selectedKindOfModal === "feed" && <FeedModal />}

                    {selectedKindOfModal === "event" && <EventModal/>}
                    
                </div>
            </Modal>


        </main>
    )
}

export default PublicationModal