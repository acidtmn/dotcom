"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "./Icon";

const LatestVersion = () => {
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    axios.get<string>("/api/version").then(({ data }) => {
      setVersion(data);
    });
  }, []);

  return (
    <Link
      className={`${
        !version && "invisible"
      } flex flex-row justify-center items-center my-2 mb-4 px-4 py-2 rounded-full text-sm bg-cyan-100 text-gray-800 border border-cyan-200 hover:shadow hover:bg-cyan-200`}
      href="https://github.com/usememos/memos/releases"
      target="_blank"
    >
      <span className="mr-2">🎉</span>
      Релиз
      <span className="font-medium ml-1">v{version}</span>
      <Icon.ArrowRight className="w-4 h-auto ml-1" />
    </Link>
  );
};

export default LatestVersion;
