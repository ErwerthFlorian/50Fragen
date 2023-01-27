import {Languages} from "../../translation/TranslationConfig";

export const Topics = {
   FIFTY_QUESTIONS: "FIFTY_QUESTIONS",
   MUSIC_SMIET: "MUSIC_SMIET",
}

export const getTopicNames = (topic: keyof typeof Topics): Record<Languages, string> => {
   switch (topic) {
      case "FIFTY_QUESTIONS":
         return {
            de: "Fünfzig Fragen",
            en: "Fifty Questions",
         };

      case "MUSIC_SMIET":
         return {
            de: "Musik-Smiet",
            en: "Music-Smiet",
         }

      default:
         return {de: "", en: ""};
   }
}
