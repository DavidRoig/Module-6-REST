import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [total, setTotal] = React.useState<number>(0);

  const loadCharacterCollection = (term: string, page: number) => {
    getCharacterCollection(term, page).then((result) => {
      setTotal(result.total);
      return setCharacterCollection(
        mapToCollection(result.data, mapFromApiToVm)
      );
    });
  };

  return { characterCollection, total, loadCharacterCollection };
};
