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
}

export interface IProject {
  projectName: string;
  projectInformations: string;
  elementClassName?: string;
  link: string;
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
    { id: 3, name: "Typescript" },
    { id: 4, name: "React" },
    { id: 5, name: "Redux" },
    { id: 6, name: "Material UI" },
    { id: 7, name: "Figma" },
  ];

  return <AppContext.Provider value={{ mode, setMode, skills }}> {children} </AppContext.Provider>;
}
