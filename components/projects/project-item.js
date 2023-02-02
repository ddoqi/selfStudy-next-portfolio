// import Image from "next/image";
import Link from "next/link";
import Image from "next/legacy/image";
// import Image from "next/image";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  console.log("data", data.properties.WorkPeriod.date.start);
  const github = data.properties.github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.external.url;
  const tags = data.properties.태그.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const calculatedPeriod = (start, end) => {
    // -를 빼고
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    // 스트링배열을 하나하나로 date 날짜를 만들고
    let startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    console.log(`startDate: ${startDate}`);
    console.log(`endDate: ${endDate}`);

    // 지나간 시간, 시작된 시간을 계산함
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    console.log(`기간 : ${result}`);
    return result;
  };
  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        // objectFit="none"
        // objectFit="contain"
        quality={100}
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <Link href={github} className="text-cyan-500 font-bold">
          깃허브 바로가기
        </Link>
        <p className="my-1">
          작업기간 : {start}~{end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((tag) => (
            <h1
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={tag.id}
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
