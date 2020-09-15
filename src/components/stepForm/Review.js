import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  IconButton,
  Button,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Names } from "./Names";
export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;
  return (
    <Container maxWidth="xs" style={{ padding: "1rem" }}>
      <h1>Ваша информация</h1>
      <RenderAccordion
        summary="Names"
        go={go}
        detailes={[
          { Имя: firstName },
          { Фамиля: lastName },
          { Отчество: nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        detailes={[
          { Адрес: address },
          { Город: city },
          { Область: state },
          { "Почтовый индекс": zip },
        ]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        detailes={[{ Телефон: phone }, { "Эл. адрес": email }]}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "1rem" }}
        onClick={() => go("submit")}
      >
        Отправить
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, detailes, go }) => {
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {summary}
      </AccordionSummary>
      <div>
        {detailes.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}

        <IconButton
          color="primary"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </Accordion>
  );
};
