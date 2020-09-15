import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, nickName } = formData;

  console.log(navigation);

  return (
    <Container maxWidth="xs">
      <h1>Ваше имя</h1>
      <TextField
        label="Имя"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Фамилия"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Отчество"
        name="nickName"
        value={nickName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Cледующий
      </Button>
    </Container>
  );
};
