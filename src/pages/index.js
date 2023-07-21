import Head from "next/head";
import RootLayout from "../Layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="Home page" description="ok bye bye"></meta>
      </Head>
      <h1>This is my Homepage</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
