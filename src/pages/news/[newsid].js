import { useRouter } from "next/router";

const SingleNewsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Single News id : {router.query.newsid}</h1>
    </div>
  );
};

export default SingleNewsPage;
