export interface CharacterApi {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  bestSentences: string[];
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
}
