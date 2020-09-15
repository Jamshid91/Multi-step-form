import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;

  console.log(formData);
  return (
    <Container maxWidth="xs">
      <h1>Ваше контакт</h1>

      <TextField
        label="Телефон"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Эл. адрес"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.previous()}
      >
        Назад
      </Button>

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
