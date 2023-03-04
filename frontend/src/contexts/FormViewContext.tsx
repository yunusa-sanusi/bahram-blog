import { createContext, ReactNode, useContext, useState } from 'react';

type FormViewContextType = {
  view: string;
  handleFormView: () => void;
};

type FormView = 'login' | 'signup';

type FormViewProviderProps = {
  children: ReactNode;
};

const FormViewContext = createContext({} as FormViewContextType);

export const FormViewProvider = ({ children }: FormViewProviderProps) => {
  const [view, setView] = useState<FormView>('login');

  const handleFormView = () =>
    view === 'login' ? setView('signup') : setView('login');

  return (
    <FormViewContext.Provider value={{ view, handleFormView }}>
      {children}
    </FormViewContext.Provider>
  );
};

export const useFormViewContext = () => useContext(FormViewContext);
