import "../styles/main.scss";
import Page from "../layouts/main";

const index = () => {
  return (
    <Page>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="fullname-container uppercase inline-block">
            <h1 className="fullname-logo inline-block">Edwing Artica</h1>
          </div>
          <div className="uppercase text-lg text-gray-900 inline-block">
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
