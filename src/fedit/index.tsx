import * as React from 'react';
import { FC } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Main } from './main';

interface FEditProps {
}

export const FEdit = ({  }: FEditProps) => {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

