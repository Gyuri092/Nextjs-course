import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <>
      <h1>포트폴리오 페이지 입니다.</h1>
    </>
  );
}
