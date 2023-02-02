import Layout from "@/components/layout";
import ProjectItem from "@/components/projects/project-item";
import { DATABASE_ID, TOKEN } from "@/config";
import Head from "next/head";

export default function Projects({ projects }) {
  console.log("projects:", projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>빡코딩 포트폴리오</title>
          <meta name="description" content="오늘도 빡코딩!!" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <h1 className="text-4xl font-bold sm:text-6xl ml-20 mt-5">
            총 프로젝트:
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-3 w-full">
            {projects.results.map((project) => (
              <ProjectItem key={project.id} data={project} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// 여기서 데이터를 가져오는 것
// getStaticProps은 처음 build 타임에 호출이 된다.
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },

    body: JSON.stringify({
      sorts: [{ property: "이름", direction: "ascending" }],
      page_size: 100,
    }),
  };

  // fetch에서 프로미스 객체 다 받아올때까지 기다려(await)

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();
  console.log("projects", projects);

  const projectNames = projects.results.map(
    (project) => project.properties.이름.title[0].plain_text
  );

  console.log("projectNames : ", projectNames);

  return {
    props: { projects },
  };
}
