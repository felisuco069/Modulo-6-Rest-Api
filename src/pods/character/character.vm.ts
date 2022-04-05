export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  bestSentences?: string[];
}

export const createEmptyCharacter = (isMockApi: boolean): Character => {
  if (isMockApi) {
    return {
      id: '',
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
      },
      location: {
        name: '',
      },
      image: '',
    };
  } else {
    return {
      id: '',
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        name: '',
      },
      location: {
        name: '',
      },
      image: '',
      bestSentences: [],
    };
  }
};
