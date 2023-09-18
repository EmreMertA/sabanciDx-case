import { create } from 'zustand';

interface YearStore {
  year: string;
  setYear: (year: string) => void;
}

const useYear = create<YearStore>((set) => ({
  year: 'all',
  setYear: (year) => set(() => ({ year })),
}));
export default useYear;
