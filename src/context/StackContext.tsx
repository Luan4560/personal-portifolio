import { createContext, ReactNode } from "react";
import { ApolloIcon } from "../components/Icons/ApolloIcon";
import { CssIcon } from "../components/Icons/CssIcon";
import { GraphQLlIcon } from "../components/Icons/GraphQLICon";
import { HtmlIcon } from "../components/Icons/HtmlIcon";
import { JavascriptIcon } from "../components/Icons/JavascriptIcon";
import { JestIcon } from "../components/Icons/JestIcon";
import { NextIcon } from "../components/Icons/NextIcon";
import { ReactIcon } from "../components/Icons/ReactIcon";
import { ReactNativeIcon } from "../components/Icons/ReactNativeIcon";
import { TypescriptIcon } from "../components/Icons/ReactNativeIcon copy";

const stack = [
  {
    id: 1,
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    id: 2,
    name: "React",
    icon: <ReactIcon />,
  },
  {
    id: 3,
    name: "React Native",
    icon: <ReactNativeIcon />,
  },
  {
    id: 4,
    name: "NextJS",
    icon: <NextIcon />,
  },
  {
    id: 5,
    name: "GraphQL",
    icon: <GraphQLlIcon />,
  },
  {
    id: 6,
    name: "Apollo",
    icon: <ApolloIcon />,
  },
  {
    id: 7,
    name: "Unit Tests",
    icon: <JestIcon />,
  },
  {
    id: 8,
    name: "CSS",
    icon: <CssIcon />,
  },
  {
    id: 9,
    name: "HTML",
    icon: <HtmlIcon />,
  },
  {
    id: 10,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
];

interface StackProps {
  id: number;
  name: string;
  icon: ReactNode;
}

interface StackContextProps {
  stack: StackProps[];
}

interface StackContextProviderProps {
  children: ReactNode;
}

export const StackContext = createContext({} as StackContextProps);

export const StackContextProvider = ({
  children,
}: StackContextProviderProps) => {
  return (
    <StackContext.Provider value={{ stack }}>{children}</StackContext.Provider>
  );
};
