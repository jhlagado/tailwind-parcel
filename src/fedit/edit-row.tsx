import * as React from 'react';
import { FC } from 'react';
import { Select } from './types';
import { WordBox } from './word-box';

type Word = string;

interface EditRowProps {
  selected: Select;
  words: Word[];
}

export const EditRow: FC<EditRowProps> = ({ words, selected }: EditRowProps) => {

  return (
    <div className="edit-row">{
      words.map((word, index) => <WordBox key={word} firstSelected={index === selected.from} selected={index >= selected.from && index <= selected.to}>{word}</WordBox>)
    }</div>
  );
};

