import { createContext, useState } from "react";

interface IContext {
  mode: boolean;
  setMode: (mode: boolean) => void;
  skills: { id: number; name: string }[];
}

export interface IAbout {
  title: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
}

export interface IVeille {
  title: string;
  textOne: string;
  textTwo?: string;
  textThree?: string;
  textFour?: string;
}

export interface IProject {
  projectName: string;
  projectInformations: string;
  elementClassName?: string;
  compteRenduLink?: string;
  modeOperatoireLink?: string;
  image?: string;
  projectSkills: {id: number, name: string}[];
}

const defaultState = {
  mode: false,
  setMode: () => {},
  skills: [],
};

export const AppContext = createContext<IContext>(defaultState);

export function Context({ children }: any) {
  const [mode, setMode] = useState<boolean>(false);

  const skills: { id: number; name: string }[] = [
    { id: 0, name: "HTML" },
    { id: 1, name: "CSS" },
    { id: 2, name: "Javascript" },
    { id: 2, name: "Figma" },
    { id: 5, name: "Python" },
    { id: 6, name: "SQL" },
    { id: 7, name: "Excel" },
    { id: 8, name: "PowerBI" },
  ];

  return <AppContext.Provider value={{ mode, setMode, skills }}> {children} </AppContext.Provider>;
}
