import Link from "next/link";
import Icon from "./Icon";

const DemoPlaceholder = () => {
  return (
    <div className="relative w-full min-h-[256px] mt-2 mb-2">
      <div className="p-2 flex flex-row justify-center items-center gap-2 sm:gap-4">
        <Link
          className="bg-green-600 text-white w-32 py-2 rounded-md shadow-lg flex flex-row justify-center items-center hover:bg-green-700"
          href="https://demo.usememos.com"
          target="_blank"
        >
          Демо
        </Link>
        <Link
          className="bg-white opacity-70 w-32 py-2 rounded-md drop-shadow flex flex-row justify-center items-center hover:bg-gray-100"
          href="https://discord.gg/tfPJa4UmAv"
          target="_blank"
        >
          <Icon.MessageCircle className="w-5 h-auto mr-1" />
          Discord
        </Link>
      </div>
      <img className="hidden sm:block w-full h-auto" src="/demo.png" alt="demo-screenshot" />
      <img className="sm:hidden w-full h-auto" src="/demo-mobile.png" alt="demo-mobile-screenshot" />
    </div>
  );
};

export default DemoPlaceholder;
