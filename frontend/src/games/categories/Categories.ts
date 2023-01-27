import {Languages} from "../../translation/TranslationConfig";
import {Topics} from "../topics/Topics";

export type CategoryData = {
   name: string;
   date: string;
   numQuestions: number;
}

export type Category = Record<Languages, CategoryData>;

export const categories: Map<keyof typeof Topics, { difficulty: string, data: Category }[]> = new Map();
categories.set("FIFTY_QUESTIONS", [
   {
      difficulty: "easy",
      data: {
         de: {name: "Game of Thrones", numQuestions: 50, date: "10.10.2020"},
         en: {name: "Game of Thrones", numQuestions: 50, date: "10/10/2020"}
      },
   }, {
      difficulty: "medium",
      data: {
         de: {name: "Game of Thrones", numQuestions: 50, date: "10.10.2020"},
         en: {name: "Game of Thrones", numQuestions: 50, date: "10/10/2020"}
      },

   },
   {
      difficulty: "hard",
      data: {
         de: {name: "Game of Thrones", numQuestions: 50, date: "10.10.2020"},
         en: {name: "Game of Thrones", numQuestions: 50, date: "10/10/2020"}
      },

   }
]);
categories.set("MUSIC_SMIET", [
   {
      difficulty: "easy",
      data: {
         de: {name: "Game of Thrones", numQuestions: 50, date: "10.10.2020"},
         en: {name: "Game of Thrones", numQuestions: 50, date: "10/10/2020"}
      },
   }
]);