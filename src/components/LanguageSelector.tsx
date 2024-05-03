"use client";

import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../app/context/LanguageContext';

export function LanguageSelectorModal() {
  const { changeLanguage } = useContext(LanguageContext)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 z-10 transition-opacity" />
        <Dialog.Content className="z-10 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-2xl font-bold text-center">
            Please select a language
          </Dialog.Title>
          <div className="mt-[25px] flex justify-center gap-10">
            <Dialog.Close asChild onClick={() => setIsOpen(false)}>
              <button
                className="bg-redishpinksh py-3 px-7 text-lg rounded-3xl text-white hover:opacity-50 hover:shadow-md hover:shadow-black duration-200 outline-2 outline-none focus:opacity-70 focus:shadow-md focus:shadow-black"
                onClick={() => changeLanguage("en")}
              >
                English
              </button>
            </Dialog.Close>
            <Dialog.Close asChild onClick={() => setIsOpen(false)} lang='pt-br'>
              <button
                className="bg-redishpinksh py-3 px-7 text-lg rounded-3xl text-white hover:opacity-50 hover:shadow-md hover:shadow-black duration-200 outline-2 outline-none focus:opacity-70 focus:shadow-md focus:shadow-black"
                onClick={() => changeLanguage("pt-br")}
                lang='pt-br'
              >
                Português
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}; 