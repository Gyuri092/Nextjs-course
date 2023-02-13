import { useRouter } from "next/router";

export default function clientProjectsPage() {
  const router = useRouter();

  console.log(router.query);
  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "gyul", clientprojectid: " projecta" },
    });
  }
  return (
    <>
      <h1>클라이언트 중첩페이지</h1>
      <button onClick={loadProjectHandler}>프로젝트 가져오기</button>
    </>
  );
}
