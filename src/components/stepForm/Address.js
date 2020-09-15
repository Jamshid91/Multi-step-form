import React from "react";
import { Container, TextField, Button } from "@material-ui/core";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;

  console.log(formData);
  return (
    <Container maxWidth="xs">
      <h1>Ваше адрес</h1>
      <TextField
        label="Адрес"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Город"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Область"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Почтовый индекс"
        type="number"
        name="zip"
        value={zip}
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
