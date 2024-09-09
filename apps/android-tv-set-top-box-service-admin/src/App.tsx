import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { SetTopBoxList } from "./setTopBox/SetTopBoxList";
import { SetTopBoxCreate } from "./setTopBox/SetTopBoxCreate";
import { SetTopBoxEdit } from "./setTopBox/SetTopBoxEdit";
import { SetTopBoxShow } from "./setTopBox/SetTopBoxShow";
import { MediaFileList } from "./mediaFile/MediaFileList";
import { MediaFileCreate } from "./mediaFile/MediaFileCreate";
import { MediaFileEdit } from "./mediaFile/MediaFileEdit";
import { MediaFileShow } from "./mediaFile/MediaFileShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
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
        title={"AndroidTVSetTopBoxService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="SetTopBox"
          list={SetTopBoxList}
          edit={SetTopBoxEdit}
          create={SetTopBoxCreate}
          show={SetTopBoxShow}
        />
        <Resource
          name="MediaFile"
          list={MediaFileList}
          edit={MediaFileEdit}
          create={MediaFileCreate}
          show={MediaFileShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
      </Admin>
    </div>
  );
};

export default App;
