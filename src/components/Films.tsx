import React from "react";
import { useState, useEffect } from "react";
import userServices, {
  Film,
  FetchFilmsResponse,
} from "../services/user-services";
import { CanceledError } from "axios";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userServices.getAllfilms();
    request
      .then((res) => {
        setFilms(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return (
    <>
      {error && <p color="red">{error}</p>}
      {loading && <div color="white">loading</div>}
      <UnorderedList color="white">
        {films.map((film) => (
          <ListItem key={film.title}>{film.title}</ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default Films;
