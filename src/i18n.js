const UI = {
  unsavedChangesWarning: {
    ru: "Несохраненные изменения будут потеряны!",
    en: "Unsaved changes will be lost!",
  },
  errorLocationNotAvailable: {
    ru: "Что-то пошло не так :( Локация недоступна",
    en: "Something went wrong :( Location is not available",
  },
  errorPhotoNotAvailable: {
    ru: "Что-то пошло не так :( Фото локации недоступно",
    en: "Something went wrong :( Location photo is not available",
  },

  menuTitle: { ru: "Меню", en: "Menu" },
  saveTitle: { ru: "Сохранить", en: "Save" },
  loadTitle: { ru: "Загрузить", en: "Load" },
  audio: { ru: "Аудио", en: "Audio" },
  text: { ru: "Текст", en: "Text" },
  fullscreen: { ru: "Полный экран", en: "Fullscreen" },
  musicVolume: { ru: "Громкость музыки", en: "Music Volume" },
  fontStyles: { ru: "Шрифты", en: "Font Styles" },
  language: { ru: "Язык", en: "Language" },
  languageRussian: { ru: "Русский", en: "Russian" },
  languageEnglish: { ru: "Английский", en: "English" },

  overwriteSlotConfirm: { ru: "Перезаписать слот?", en: "Overwrite slot?" },
  loadSlotConfirm: { ru: "Загрузить этот слот?", en: "Load this slot?" },

  backlog: { ru: "Журнал", en: "Backlog" },
  jump: { ru: "Перейти", en: "Jump" },

  gooseRun: { ru: "БЕЖАТЬ!!!", en: "RUN!!!" },

  titleBegin: { ru: "Начать", en: "Begin" },
  titleContinue: { ru: "Продолжить", en: "Continue" },
};

export const LANGUAGE_STORAGE_KEY = "manuliatina:language";
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "ru"];

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ru", label: "Русский" },
];

export function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.indexOf(stored) > -1) return stored;
  } catch (e) {}
  return DEFAULT_LANGUAGE;
}

export function storeLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (e) {}
}

export function t(key, lang) {
  const entry = UI[key];
  if (!entry) return key;
  return entry[lang] || entry[DEFAULT_LANGUAGE] || key;
}

// Resolve a value that may be either a plain string or a { ru, en } object.
// Used for location/navigation titles in locations.js.
export function tt(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value[DEFAULT_LANGUAGE] || value.en || "";
}
