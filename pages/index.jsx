import "../styles/main.scss";
import Page from "../layouts/main";

const index = () => {
  return (
    <Page>
      <div className="container mx-auto">
        <div className="flex flex-col fullname-container justify-center">
          <div className="uppercase">
            <h1 className="fullname-logo text-3xl lg:text-6xl text-center">
              Edwing Artica
            </h1>
          </div>
          <div className="uppercase text-lg text-gray-900 text-center">
            <h2 className="logo-subtitle inline-block p-2">
              Full Stack Web Developer
            </h2>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default index;
