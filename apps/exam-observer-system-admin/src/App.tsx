import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { InvigilatorList } from "./invigilator/InvigilatorList";
import { InvigilatorCreate } from "./invigilator/InvigilatorCreate";
import { InvigilatorEdit } from "./invigilator/InvigilatorEdit";
import { InvigilatorShow } from "./invigilator/InvigilatorShow";
import { ObserverList } from "./observer/ObserverList";
import { ObserverCreate } from "./observer/ObserverCreate";
import { ObserverEdit } from "./observer/ObserverEdit";
import { ObserverShow } from "./observer/ObserverShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ExamObserverSystem"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Invigilator"
          list={InvigilatorList}
          edit={InvigilatorEdit}
          create={InvigilatorCreate}
          show={InvigilatorShow}
        />
        <Resource
          name="Observer"
          list={ObserverList}
          edit={ObserverEdit}
          create={ObserverCreate}
          show={ObserverShow}
        />
      </Admin>
    </div>
  );
};

export default App;
