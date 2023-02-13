import { useRouter } from "next/router";
export default function selectedClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>클라이언트 페이지 셀렉티드</h1>
    </>
  );
}
