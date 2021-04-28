import * as React from 'react';
import { FC } from 'react';

interface HeaderProps {
}

export const Header: FC<HeaderProps> = ({  }: HeaderProps) => {

  return (
    <h1 className="p-4 bg-gray-400">Header.</h1>
    );
};
