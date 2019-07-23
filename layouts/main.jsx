import Meta from "../components/Meta";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default ({ children }) => (
  <div>
    <Meta />
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="flex-grow-0 bg-red-400">
        <Header />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  </div>
);
