import { create } from 'zustand'

interface useRegisterModalProps {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useRegisterModal = create<useRegisterModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
