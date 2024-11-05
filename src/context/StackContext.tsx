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
import Web3Icon from "../components/Icons/Web3Icon";
import SolidityIcon from "../components/Icons/SolidityIcon";
import NodeIcon from "../components/Icons/NodeIcon";

const stack = [
  {
    id: 0,
    name: "Nodejs",
    icon: <NodeIcon />,
  },
  {
    id: 1,
    name: "Solidity",
    icon: <SolidityIcon />,
  },
  {
    id: 2,
    name: "Web3/Blockchain",
    icon: <Web3Icon />,
  },
  {
    id: 3,
    name: "Typescript",
    icon: <TypescriptIcon />,
  },
  {
    id: 4,
    name: "React",
    icon: <ReactIcon />,
  },
  {
    id: 5,
    name: "React Native",
    icon: <ReactNativeIcon />,
  },
  {
    id: 6,
    name: "NextJS",
    icon: <NextIcon />,
  },
  {
    id: 7,
    name: "GraphQL",
    icon: <GraphQLlIcon />,
  },
  {
    id: 8,
    name: "Apollo",
    icon: <ApolloIcon />,
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
