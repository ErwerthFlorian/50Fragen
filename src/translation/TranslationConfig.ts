const TranslatedComponents = {
   MainHeader: "MainHeader",
   CreateRoomButton: "CreateRoomButton",
   JoinRoomButton: "JoinRoomButton",
   AvatarLabel: "AvatarLabel",
   AvatarUploader: "AvatarUploader",
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
   AvatarUploader: {
      de: "Eigenen Avatar benutzen",
      en: "Use own avatar",
   },
   CreateRoomButton: {
      de: "RAUM ERSTELLEN",
      en: "CREATE ROOM",
   },
   JoinRoomButton: {
      de: "RAUM BEITRETEN",
      en: "JOIN ROOM",
   },
   Empty: {
      de: "",
      en: "",
   }
}

