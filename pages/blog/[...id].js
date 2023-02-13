import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>블로그 게시물</h1>
    </>
  );
}
