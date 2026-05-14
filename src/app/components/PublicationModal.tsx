"use client"

import { Box, Modal } from "@mui/material"
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
                            <Box sx={{
                                background: "#60a5fa",
                                width: "10rem",
                                height: "5rem",
                                borderRadius: "2rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "18px",
                                border: "2px solid #3b82f6",
                                transition: "0.2s",
                                "&:hover": {
                                    transform: "translateX(-10px) scale(1.07)"
                                }
                            }}
                                onClick={() => handleChangeModal("feed")}>
                                Feed
                            </Box>
                            <Box
                                sx={{
                                    background: "#eab308",
                                    width: "10rem",
                                    height: "5rem",
                                    borderRadius: "2rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    border: "2px solid #facc15",
                                    transition: "0.2s",
                                    "&:hover": {
                                        transform: "translateX(10px) scale(1.07)"
                                    }      
                                }}
                                onClick={() => handleChangeModal("event")}>
                                Eventos
                            </Box>
                        </div>
                    )}

                    {selectedKindOfModal === "feed" && <FeedModal onClick={() => setSelectedKindOfModal(undefined)} />}

                    {selectedKindOfModal === "event" && <EventModal onClick={() => setSelectedKindOfModal(undefined)} />}

                </div>
            </Modal>


        </main>
    )
}

export default PublicationModal