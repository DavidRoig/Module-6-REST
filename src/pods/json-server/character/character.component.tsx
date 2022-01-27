import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, RatingComponent } from 'common/components';
import {
  Button,
  IconButton,
  List,
  ListItemText,
  ListItem,
  ListItemSecondaryAction,
} from '@material-ui/core';

import { Delete, Add } from '@material-ui/icons';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  const [bestSentences, setBestSentences] = React.useState<string[]>(
    character.bestSentences
  );
  const [newSentence, setNewSentence] = React.useState<string>('');

  React.useEffect(() => {
    setBestSentences(character.bestSentences);
  }, [character]);

  const deleteSentence = (sentence: string) => {
    const result = character.bestSentences.filter((item) => item !== sentence);

    setBestSentences(result);
    character.bestSentences = result;
  };

  const addSentence = (sentence: string) => {
    character.bestSentences.push(sentence);
    setBestSentences([...character.bestSentences]);
    setNewSentence('');
  };

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="address" label="Address" />
          <RatingComponent name="rating" max={5} />

          <List dense={false}>
            {bestSentences.map((sentence, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText primary={sentence} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => deleteSentence(sentence)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            <ListItem>
              <TextFieldComponent
                name="newBestSentence"
                label="New best sentence"
                placeholder='Type the new sentence and click on "Add Icon"'
                value={newSentence}
                onChange={(e) => setNewSentence(e.target.value)}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="Add"
                  onClick={() => addSentence(newSentence)}
                >
                  <Add />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>

          <TextFieldComponent
            name="description"
            label="Description"
            multiline={true}
            minRows={3}
            maxRows={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
