import { create } from 'zustand'

type CursorType = {
    varient: "default" | "link" | "text"

    setDefault: () => void
    setLink: () => void
    setText: () => void
}

export const CursorController = create<CursorType>((set, get) => {
    return ({
        varient: "default",
        setDefault: () => set(() => ({varient:"default"})),
        setLink: () => set(() => ({varient:"link"})),
        setText: () => set(() => ({varient:"text"})),
    })
})
    
