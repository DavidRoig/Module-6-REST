import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

export const CharacterCollectionContainer = () => {
  const { characterCollection, total, loadCharacterCollection } =
    useCharacterCollection();
  const history = useHistory();

  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  React.useEffect(() => {
    loadCharacterCollection(searchTerm, currentPage);
  }, []);

  const handleCreateCharacter = () => {
    history.push(linkRoutes.createCharacter);
  };

  const handleEdit = (id: string) => {
    history.push(linkRoutes.editCharacter(id));
  };

  const handleDelete = async (id: string) => {
    await deleteCharacter(id);
    loadCharacterCollection(searchTerm, currentPage);
  };

  const handleSearchOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchOnClick = () => {
    loadCharacterCollection(searchTerm, currentPage);
  };

  const handlePaginationOnClick = (_, page: number) => {
    setCurrentPage(page);
    loadCharacterCollection(searchTerm, page);
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

      <Pagination
        count={total}
        variant="outlined"
        color="primary"
        page={currentPage}
        onChange={handlePaginationOnClick}
      />

      <CharacterCollectionComponent
        characterCollection={characterCollection}
        onCreateCharacter={handleCreateCharacter}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
