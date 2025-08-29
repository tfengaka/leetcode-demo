import { GetMeQuery } from '@/graphql';
import { create } from 'zustand';

export interface IAuthStoreState {
  user: GetMeQuery['me'] | null;
  loading: boolean;
  idToken: string | null;
  setLoading: (loading: boolean) => void;
  setUser: (user: GetMeQuery['me'] | null) => void;
  setIdToken: (token: string | null) => void;
}

const useAuthStore = create<IAuthStoreState>((set) => ({
  user: null,
  loading: true,
  idToken: null,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set((state) => ({ ...state, loading })),
  setIdToken: (token) => set((state) => ({ ...state, idToken: token })),
}));

export default useAuthStore;
