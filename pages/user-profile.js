export default function UserProfilePage(props) {
  return <>{props.username}</>;
}

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "규리",
    },
  };
}
