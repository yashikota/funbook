import { atom } from "recoil";

export const languageState = atom({
    key: "languageState",
    default: "",
});

export const functionState = atom({
    key: "functionState",
    default: "",
});

export const responseState = atom({
    key: "responseState",
    default: ["c", "rust"],
});

export const inputErrorState = atom({
    key: "inputErrorState",
    default: false,
});
