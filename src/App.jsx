import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Time } from "./components/Time";

export function App() {
  const [contributors, setContributor] = useState([]);

  const times = [
    {
      name: "Programação",
      colorPrimary: "#57c278",
      colorSecondary: "#d9f7e9",
    },
    {
      name: "Front-End",
      colorPrimary: "#82CFFA",
      colorSecondary: "#E8F8FF",
    },
    {
      name: "Data Science",
      colorPrimary: "#A6D157",
      colorSecondary: "#F0F8E2",
    },
    {
      name: "Devops",
      colorPrimary: "#E06B69",
      colorSecondary: "#FDE7E8",
    },
    {
      name: "UX e Design",
      colorPrimary: "#DB6EBF",
      colorSecondary: "#FAE9F5",
    },
    {
      name: "Mobile",
      colorPrimary: "#FFBA05",
      colorSecondary: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      colorPrimary: "#FF8A29",
      colorSecondary: "#FFEEDF",
    },
  ];

  function newContributorAdd(contributor) {
    setContributor([...contributors, contributor]);
  }

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.name)}
        registeredContributor={(contributor) => newContributorAdd(contributor)}
      />

      {times.map((time) => (
        <Time
          key={time.name}
          name={time.name}
          colorPrimary={time.colorPrimary}
          colorSecondary={time.colorSecondary}
          contributor={contributors.filter(
            (contributor) => contributor.time === time.name
          )}
        />
      ))}
    </div>
  );
}
