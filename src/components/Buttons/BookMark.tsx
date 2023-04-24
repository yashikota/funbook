import BookMarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';

export default function BookMarkButton() {
    return (
        <IconButton
            size="small"
            sx={{
                position: "absolute",
                top: 14,
                right: 50,
                color: "black",
                opacity: 0.5,
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                    opacity: 1
                },
            }}
        >
            <BookMarkIcon />
        </IconButton>
    );
}
