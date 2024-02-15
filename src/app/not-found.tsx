import { Button } from "@mui/joy";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <title>Страница не найдена</title>
      <div className="w-full h-[calc(50vh)] flex flex-col justify-center items-center my-32">
        <h1 className="text-4xl mb-4">404</h1>
        <p className="mb-4 text-xl font-semibold">Страница не найдена</p>
        <Link href="/">
          <Button>Вернуться на домашнюю страницу</Button>
        </Link>
      </div>
    </>
  );
}
