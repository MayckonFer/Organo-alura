import styles from "./styles.module.scss";
import { TextField } from "../TextField";
import { ListSuspended } from "../ListSuspended";
import { Button } from "../Button";

import { useState } from "react";

export function Form(props) {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  function onSave(event) {
    event.preventDefault();
    props.registeredContributor({
      name,
      office,
      image,
      time,
    });

    setName("");
    setOffice("");
    setImage("");
    setTime("");
  }

  return (
    <section className={styles.form}>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField
          value={name}
          change={(value) => setName(value)}
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <TextField
          value={office}
          change={(value) => setOffice(value)}
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <TextField
          value={image}
          change={(value) => setImage(value)}
          required={true}
          label="Imagem"
          placeholder="Digite a url da imagem"
        />
        <ListSuspended
          value={time}
          change={(value) => setTime(value)}
          required={true}
          itens={props.times}
          label="Time"
        />

        <Button>Criar card</Button>
      </form>
    </section>
  );
}
