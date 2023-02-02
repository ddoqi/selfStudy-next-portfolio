import Head from "next/head";
import Image from "next/image";

// 아까 만들었던 Layout!!
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";

// 가장 처음 열리는 page로,
// <Head>에 있는 부분은 메타데이터로 '크롤링'에서 돌아가게끔 하는것이다.
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>홍다궁 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
