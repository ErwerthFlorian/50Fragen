const TranslatedComponents = {
   MainHeader: "MainHeader",
   CreateRoomButton: "CreateRoomButton",
   JoinRoomButton: "JoinRoomButton",
   JoinRoomLabel: "JoinRoomLabel",
   JoinRoomLabelError: "JoinRoomLabelError",
   AvatarLabel: "AvatarLabel",
   AvatarUploader: "AvatarUploader",
   ChooseCategoryHeader: "ChooseCategoryHeader",
   ChooseCategoryReturn: "ChooseCategoryReturn",
   CategoryDifficulty: "CategoryDifficulty",
   CategoryDate: "CategoryDate",
   CategoryNumQuestions: "CategoryNumQuestions",
   TopicAvailableCategories: "TopicAvailableCategories",
   TopicReturnHome: "TopicReturnHome",
   LanguageToggle: "LanguageToggle",
   ExplainationHeader: "ExplainationHeader",
   ExplainationStep1: "ExplainationStep1",
   ExplainationStep2: "ExplainationStep2",
   ExplainationStep3: "ExplainationStep3",
   ExplainationStep4: "ExplainationStep4",
   Empty: "",
};

export type Languages = "de" | "en";
export type Translation = Record<Languages, string>;
export type TranslatedComponents = keyof typeof TranslatedComponents;

export const Translations: Record<TranslatedComponents, Translation> = {
   MainHeader: {
      de: "Spieleshows Pietsmiet",
      en: "Gameshows Pietsmiet",
   },
   TopicAvailableCategories: {
      de: "Verfügbare Kategorien",
      en: "Avalable Categories",
   },
   TopicReturnHome: {
      de: "Zurück zum Hauptmenü",
      en: "Back to main menu",
   },
   AvatarLabel: {
      de: "Anzeigename",
      en: "Display name",
   },
   LanguageToggle: {
      de: "Sprache umschalten",
      en: "Toggle language",
   },
   CategoryDate: {
      de: "Datum",
      en: "Date",
   },
   CategoryDifficulty: {
      de: "Schwierigkeit",
      en: "Difficulty"
   },
   ChooseCategoryReturn: {
      de: "Zurück zur Spielauswahl",
      en: "Back to game selection",
   },
   CategoryNumQuestions: {
      de: "Anzahl der Fragen",
      en: "Number of Questions"
   },
   AvatarUploader: {
      de: "Eigenen Avatar benutzen",
      en: "Use own avatar",
   },
   CreateRoomButton: {
      de: "RAUM ERSTELLEN",
      en: "CREATE ROOM",
   },
   ChooseCategoryHeader: {
      de: "Wähle eine Kategorie",
      en: "Choose a category.",
   },
   JoinRoomButton: {
      de: "RAUM BEITRETEN",
      en: "JOIN ROOM",
   },
   JoinRoomLabel: {
      de: "Raumnummer",
      en: "Room number",
   },
   JoinRoomLabelError: {
      de: "Bitte gib eine Nummer mit 5 Zahlen ein.",
      en: "Please enter a number with 5 digits.",
   },
   ExplainationHeader: {
      de: "Wie es funktioniert",
      en: "How it works",
   },
   ExplainationStep1: {
      de: "Klicke auf SPIELERAUM ERSTELLEN",
      en: "Click on CREATE GAME ROOM",
   },
   ExplainationStep2: {
      de: "Wähle ein Spiel",
      en: "Choose a game",
   },
   ExplainationStep3: {
      de: "Wähle ein Spielekategorie",
      en: "Choose a game category"
   },
   ExplainationStep4: {
      de: "Teile den Link, um deine Freunde einzuladen",
      en: "Share the link to invite your friends",
   },
   Empty: {
      de: "",
      en: "",
   }
}

