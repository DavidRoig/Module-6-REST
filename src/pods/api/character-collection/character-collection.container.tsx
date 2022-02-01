import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    loadCharacterCollection(searchTerm);
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection(searchTerm);
  };

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOnClick = () => {
    loadCharacterCollection(searchTerm);
  };

  return (
    <>
      <TextFieldComponent
        placeholder="Search Character"
        onChange={handleSearchOnChange}
      />
      <Button variant="contained" color="primary" onClick={handleSearchOnClick}>
        Search
      </Button>
      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
