import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Image, Row } from "antd";

const NewsDetailsPage = ({ news }) => {
  return (
    <div>
      <Row style={{ paddingTop: "5vh" }}>
        <Col span={12}>
          <Image
            alt="news-image"
            src={news.image_url}
            width={700}
            height={350}
            responsive
          />
        </Col>
        <Col span={12} style={{ paddingTop: "5vh" }}>
          <h1 style={{fontSize:"35px"}}>{news?.title}</h1>
          <p style={{fontSize:"20px"}}>{news.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetailsPage;

NewsDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const data = await res.json();

//   const paths = data?.map((news) => ({
//     params: { newsId: news?.id },
//   }));

//   return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      news: data,
    },
  };
};
