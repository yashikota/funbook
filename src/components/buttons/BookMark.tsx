import BookMarkIcon from '@mui/icons-material/Bookmark';
import { IconButton } from '@mui/material';

export default function BookMarkButton() {
    return (
        <IconButton
            size="small"
            sx={{
                position: "relative",
                top: 0,
                right: 0,
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
