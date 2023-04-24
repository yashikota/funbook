import { useState } from "react";
import { IconButton } from "@mui/material";
import { Box, Modal, Typography } from "@mui/material";

import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CloseIcon from "@mui/icons-material/Close";

export default function ModalButton() {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const style = {
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <IconButton
            size="small"
            onClick={handleModalOpen}
            sx={{
                position: "absolute",
                top: 14,
                right: 10,
                color: "black",
                opacity: 0.5,
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                    opacity: 1
                },
            }}
        >

            <OpenInFullIcon />
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{
                        height: 0,
                        textAlign: "right",
                    }}>
                        <IconButton onClick={handleModalClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        関数名
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        引数
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        戻り値
                    </Typography>
                </Box>
            </Modal>
        </IconButton>
    )
}
