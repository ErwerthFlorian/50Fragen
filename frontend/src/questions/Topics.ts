import {Languages} from "../translation/TranslationConfig";

export type Topic = {
   name: string;
   date: string;
   difficulty: string;
   numQuestions: number;}

export type Topics = Record<Languages, Topic>;


export const topics: Topics[] = [
   {de: { name: "Game of Thrones", numQuestions: 50, difficulty: "Leicht", date: "10.10.2020"}, en: {name: "Game of Thrones", numQuestions: 50, difficulty: "Easy", date: "10/10/2020"}},
   {de: { name: "Game of Thrones", numQuestions: 50,difficulty: "Mittel", date: "10.10.2020"}, en: {name: "Game of Thrones", numQuestions: 50, difficulty: "Medium", date: "10/10/2020"}},
   {de: { name: "Game of Thrones", numQuestions: 50,difficulty: "Schwer", date: "10.10.2020"}, en: {name: "Game of Thrones", numQuestions: 50, difficulty: "Hard", date: "10/10/2020"}},
]