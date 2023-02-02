import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    // global.css에서 클래스 하나 만들어주고, 배경색을 입힘
    // 전체 감싸고있는 레이아웃의 최상위 껍데기에다가 클래스네임을 붙여줬음
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
