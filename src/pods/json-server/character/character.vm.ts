export interface Character {
  id: string;
  name: string;
  description: string;
  rating: number;
  address: string;
  city: string;
  image: string;
  bestSentences: string[];
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  description: '',
  rating: 0,
  address: '',
  city: '',
  image: '',
  bestSentences: [],
});
