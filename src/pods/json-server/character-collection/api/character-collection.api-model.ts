export interface CharacterEntityApi {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  bestSentences: string[];
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
}
