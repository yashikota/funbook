import { atom } from "recoil";

import initData from "../../json/init.json";

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

export const resultState = atom({
    key: "resultState",
    default: initData,
});

export const inputErrorState = atom({
    key: "inputErrorState",
    default: false,
});
