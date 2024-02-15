import Icon from "./Icon";

export interface FeatureItem {
  icon: Icon.LucideIcon;
  title: string;
  description: string;
  slug?: string;
}

export const MAIN_FEATURES: FeatureItem[] = [
  {
    slug: "privacy-first",
    icon: Icon.Shield,
    title: "Конфиденциальность прежде всего",
    description: "Храните свои данные самостоятельно. Все данные, созданные во время выполнения, сохраняются в файле базы данных SQLite.",
  },
  {
    slug: "plain-text",
    icon: Icon.Edit3,
    title: "Обычный текст с Markdown",
    description: "Весь контент будет сохранен в виде обычного текста, а не HTML. Поддерживается множество полезных синтаксисов уценки.",
  },
  {
    slug: "lightweight",
    icon: Icon.Compass,
    title: "Легкий, но мощный",
    description: "Используя архитектуру Go + React.js + SQLite, весь пакет очень легкий.",
  },
  {
    slug: "customizable",
    icon: Icon.Sliders,
    title: "Настраиваемый",
    description: "Вы можете настроить имя, значок, описание сервера, собственный стиль системы, сценарий выполнения и т. д.",
  },
  {
    slug: "open-source",
    icon: Icon.Github,
    title: "Полностью открытый исходный код",
    description: "Memos считает, что будущее за открытым исходным кодом, и весь код уже доступен на GitHub.",
  },
  {
    slug: "free-forever",
    icon: Icon.Smile,
    title: "Бесплатно навсегда",
    description: "Все функции бесплатны навсегда и никогда не будут взиматься плата ни в какой форме или за содержание.",
  },
];

const SUB_FEATURES: FeatureItem[] = [
  {
    icon: Icon.Star,
    title: "22K+",
    description: "Звезды GitHub",
  },
  {
    icon: Icon.Users,
    title: "170+",
    description: "Авторы",
  },
  {
    icon: Icon.Download,
    title: "1M+",
    description: "Docker Pulls",
  },
  {
    icon: Icon.Package,
    title: "50+",
    description: "Релизов",
  },
];

const FeatureMatrix = () => {
  return (
    <>
      <p className="w-full text-center mt-8 mb-4 sm:px-6 text-xl sm:text-2xl font-normal text-gray-400">Почему Memos?</p>
      <div className="w-full my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 sm:px-12">
        {MAIN_FEATURES.map((featureItem) => (
          <div key={featureItem.title} className="w-full flex flex-col justify-start items-start rounded-2xl bg-zinc-100">
            <div className="w-10 h-10 text-gray-600 rounded-lg">
              <featureItem.icon className="h-10 w-auto" strokeWidth={1} />
            </div>
            <span className="relative text-base sm:text-lg mb-2 mt-4">
              <span>{featureItem.title}</span>
            </span>
            <p className="text-sm text-gray-500">{featureItem.description}</p>
          </div>
        ))}
      </div>
      <div className="w-full mt-4 sm:px-12">
        <div className="w-full bg-white rounded-xl p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SUB_FEATURES.map((featureItem) => (
            <div key={featureItem.title} className="w-full flex flex-row justify-start items-center gap-4">
              <div className="text-gray-600 rounded-lg">
                <featureItem.icon className="h-8 sm:h-10 w-auto" strokeWidth={1} />
              </div>
              <div className="flex flex-col justify-center items-start whitespace-nowrap">
                <p className="text-sm text-gray-500">{featureItem.description}</p>
                <p className="relative text-base font-medium sm:text-lg">{featureItem.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureMatrix;
