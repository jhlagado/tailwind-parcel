import * as React from 'react';
import { useState } from 'react';
import { EditRow } from './edit-row';
import { Select } from './types';
import { useEventListener } from './util';

const moveLeft = (shift: boolean, sel: Select) => {
  if (shift) {
    const val = (sel.to > sel.from) ? sel.to - 1 : sel.to;
    return { from: sel.from, to: val }
  }
  const val = (sel.from > 0) ? sel.from - 1 : sel.from;
  return { from: val, to: val }
}

const moveRight = (shift: boolean, sel: Select, length: number) => {
  if (shift) {
    const val = (sel.to < length - 1) ? sel.to + 1 : sel.to;
    return { from: sel.from, to: val }
  }
  const val = (sel.from < length - 1) ? sel.from + 1 : sel.from;
  return { from: val, to: sel.to }
}

interface MainProps {
}

export const Main = ({
}: MainProps) => {

  const [selection, setSelection] = useState({ from: 1, to: 2 });
  const words = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+'];

  function handleKeydown({ key, shiftKey }: any) {
    switch (key) {
      case 'ArrowLeft':
        setSelection(moveLeft(shiftKey === true, selection));
        break;
      case 'ArrowRight':
        setSelection(moveRight(shiftKey === true, selection, words.length));
        break;
      case '27':
      case 'Escape':
        setSelection({ from: selection.from, to: selection.from });
        break;
      default:
    }
  }

  useEventListener('keydown', handleKeydown);

  return (
    <div className="p-4 flex-grow bg-gray-200">
      <EditRow words={words} selected={selection} />
    </div>
  );
};
