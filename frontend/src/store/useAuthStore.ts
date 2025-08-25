import { GetMeQuery } from '@/graphql/generated';
import { create } from 'zustand';

export interface IAuthStoreState {
  user: GetMeQuery['me'] | null;
  idToken: string | null;
  setUser: (user: GetMeQuery['me'] | null) => void;
  setIdToken: (token: string | null) => void;
}

const useAuthStore = create<IAuthStoreState>((set) => ({
  user: null,
  idToken: null,
  setUser: (user) => set({ user }),
  setIdToken: (token) => set((state) => ({ ...state, idToken: token })),
}));

export default useAuthStore;
