const TranslatedComponents = {
   MainHeader: "MainHeader",
   CreateRoomButton: "CreateRoomButton",
   JoinRoomButton: "JoinRoomButton",
   JoinRoomLabel: "JoinRoomLabel",
   JoinRoomLabelError: "JoinRoomLabelError",
   AvatarLabel: "AvatarLabel",
   AvatarUploader: "AvatarUploader",
   CreateRoomHeader: "CreateRoomHeader",
   TopicDifficulty: "TopicDifficulty",
   TopicDate: "TopicDate",
   TopicNumQuestions: "TopicNumQuestions",
   LanguageToggle: "LanguageToggle",
   Empty: "",
};

export type Languages = "de" | "en";
export type Translation = Record<Languages, string>;
export type TranslatedComponents = keyof typeof TranslatedComponents;

export const Translations: Record<TranslatedComponents, Translation> = {
   MainHeader: {
      de: "50 Fragen - Pietsmiet",
      en: "50 Questions - Pietsmiet",
   },
   AvatarLabel: {
      de: "Anzeigename",
      en: "Display name",
   },
   LanguageToggle: {
      de: "Sprache umschalten",
      en: "Toggle language",
   },
   TopicDate: {
     de: "Datum",
      en: "Date",
   },
   TopicDifficulty: {
     de: "Schwierigkeit",
     en: "Difficulty"
   },
   TopicNumQuestions: {
      de:"Anzahl der Fragen",
      en:"Number of Questions"
   },
   AvatarUploader: {
      de: "Eigenen Avatar benutzen",
      en: "Use own avatar",
   },
   CreateRoomButton: {
      de: "RAUM ERSTELLEN",
      en: "CREATE ROOM",
   },CreateRoomHeader: {
      de: "Wähle ein Thema oder erstelle eine neues Thema.",
      en: "Choose a topic or create a new topic.",
   },
   JoinRoomButton: {
      de: "RAUM BEITRETEN",
      en: "JOIN ROOM",
   },
   JoinRoomLabel: {
      de: "Raumnummer",
      en: "Room number",
   },JoinRoomLabelError: {
      de: "Bitte gib eine Nummer mit 5 Zahlen ein.",
      en: "Please enter a number with 5 digits.",
   },
   Empty: {
      de: "",
      en: "",
   }
}

