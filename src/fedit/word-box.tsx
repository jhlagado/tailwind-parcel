import * as React from 'react';
import { FC, ReactNode } from 'react';

interface WordBoxProps {
  children: ReactNode;
  selected: boolean;
  firstSelected: boolean;
}

export const WordBox: FC<WordBoxProps> = ({ children }: WordBoxProps) => {

  return (
    <div className="word-span">{children}
    </div>
  );
};

