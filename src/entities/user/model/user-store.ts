import { create } from 'zustand';
import { User, UserDto } from './types';

type UserStore = {
  user: User | null;

  loadUser(): Promise<void>;
  getUser(dto: Omit<UserDto, 'id'>): Promise<User>;
  createUser(dto: UserDto): Promise<User>;
  updateUser(dto: Partial<UserDto>): Promise<User>;
  deleteUser(id: number): Promise<void>;
  resetUser(): Promise<void>;
};

export const useUser = create<UserStore>((set) => ({
  user: null,

  async loadUser() {
    set({ user: {} as User });
  },

  async getUser() {
    set({ user: {} as User });
    return {} as User;
  },

  async createUser() {
    set({ user: {} as User });
    return {} as User;
  },

  async updateUser() {
    return {} as User;
  },

  async deleteUser() {},

  async resetUser() {
    set({ user: null });
  }
}));
