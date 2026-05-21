const UI = {
  unsavedChangesWarning: {
    ru: "Несохраненные изменения будут потеряны!",
    en: "Unsaved changes will be lost!",
    uk: "Незбережені зміни буде втрачено!",
  },
  errorLocationNotAvailable: {
    ru: "Что-то пошло не так :( Локация недоступна",
    en: "Something went wrong :( Location is not available",
    uk: "Щось пішло не так :( Локація недоступна",
  },
  errorPhotoNotAvailable: {
    ru: "Что-то пошло не так :( Фото локации недоступно",
    en: "Something went wrong :( Location photo is not available",
    uk: "Щось пішло не так :( Фото локації недоступне",
  },

  menuTitle: { ru: "Меню", en: "Menu", uk: "Меню" },
  saveTitle: { ru: "Сохранить", en: "Save", uk: "Зберегти" },
  loadTitle: { ru: "Загрузить", en: "Load", uk: "Завантажити" },
  audio: { ru: "Аудио", en: "Audio", uk: "Аудіо" },
  text: { ru: "Текст", en: "Text", uk: "Текст" },
  fullscreen: { ru: "Полный экран", en: "Fullscreen", uk: "Повний екран" },
  musicVolume: { ru: "Громкость музыки", en: "Music Volume", uk: "Гучність музики" },
  fontStyles: { ru: "Шрифты", en: "Font Styles", uk: "Шрифти" },
  language: { ru: "Язык", en: "Language", uk: "Мова" },
  languageRussian: { ru: "Русский", en: "Russian", uk: "Російська" },
  languageEnglish: { ru: "Английский", en: "English", uk: "Англійська" },
  languageUkrainian: { ru: "Украинский", en: "Ukrainian", uk: "Українська" },

  overwriteSlotConfirm: { ru: "Перезаписать слот?", en: "Overwrite slot?", uk: "Перезаписати слот?" },
  loadSlotConfirm: { ru: "Загрузить этот слот?", en: "Load this slot?", uk: "Завантажити цей слот?" },

  backlog: { ru: "Журнал", en: "Backlog", uk: "Журнал" },
  jump: { ru: "Перейти", en: "Jump", uk: "Перейти" },

  gooseRun: { ru: "БЕЖАТЬ!!!", en: "RUN!!!", uk: "ТІКАЙ!!!" },

  titleBegin: { ru: "Начать", en: "Begin", uk: "Почати" },
  titleContinue: { ru: "Продолжить", en: "Continue", uk: "Продовжити" },

  rotateDevice: {
    ru: "Поверните устройство в горизонтальное положение",
    en: "Please rotate your device to landscape",
    uk: "Будь ласка, поверніть пристрій горизонтально",
  },

  documentTitle: {
    en: "Manuliatina — Forest Lullaby, an interactive visual novel",
    uk: "Manuliatina — Лісова Колискова, інтерактивна візуальна новела",
    ru: "Manuliatina — Лесная Колыбельная, интерактивная визуальная новелла",
  },
  documentDescription: {
    en: "Manuliatina (Forest Lullaby) — a free interactive visual novel in your browser. An atmospheric story with choices, music, and changing locations. Play online, no install required.",
    uk: "Manuliatina (Лісова Колискова) — безкоштовна інтерактивна візуальна новела у браузері. Атмосферна історія з вибором, музикою та зміною локацій. Грайте онлайн без встановлення.",
    ru: "Manuliatina (Лесная Колыбельная) — бесплатная интерактивная визуальная новелла в браузере. Атмосферная история с выбором, музыкой и сменой локаций. Играйте онлайн без установки.",
  },
};

export const LANGUAGE_STORAGE_KEY = "manuliatina:language";
export const DEFAULT_LANGUAGE = "en";
export const SUPPORTED_LANGUAGES = ["en", "ru", "uk"];

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "uk", label: "Українська" },
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

// Resolve a value that may be either a plain string or a { ru, en, uk } object.
// Used for location/navigation titles in locations.js.
export function tt(value, lang) {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] || value[DEFAULT_LANGUAGE] || value.en || value.ru || "";
}

export function applyDocumentMetadata(lang) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.title = t("documentTitle", lang);
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("documentDescription", lang));
}
