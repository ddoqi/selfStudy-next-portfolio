import Link from "next/link";
import React from "react";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          웰컴!
          <br className="hidden lg:inline-block" />
          다궁이 포트폴리오❤️
        </h1>
        <p className="mb-8 leading-relaxed">
          {/* 한글입숨 */}
          부패를 크고 청춘을 인간의 스며들어 목숨이 소리다.이것은 미인을 보는
          아니다. 원대하고, 같이 방황하였으며, 따뜻한 몸이 칼이다. 하였으며,
          무엇이 할지니, 위하여서 현저하게 뿐이다. 관현악이며, 반짝이는 대한
          이것이다. 쓸쓸한 같이, 풀이 것이다. 피부가 없으면 있는 뛰노는 아니한
          아름다우냐? 이상, 쓸쓸한 인간에 설산에서 원질이 사막이다. 우리 얼마나
          사랑의 살았으며, 보내는 위하여 있으랴? 앞이 이 커다란 찾아다녀도,
          봄바람을 가는 이것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/project" className="btn-project">
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
