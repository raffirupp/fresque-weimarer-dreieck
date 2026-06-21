import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(null)

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
