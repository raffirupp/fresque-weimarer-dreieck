import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

// eslint-disable-next-line react-refresh/only-export-components -- Context, Provider und Hook gehören inhaltlich zusammen, Fast-Refresh-Kosten sind hier vernachlässigbar
export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <ModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </ModalContext.Provider>
  )
}
