import { queryOptions } from "@tanstack/react-query";
import { notFound } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";
import axios from "redaxios";

export type UserType = {
  id: number;
  name: string;
  email: string;
};

export const fetchUsers = createServerFn({ method: "GET" }).handler(
  async () => {
    return axios
      .get<Array<UserType>>("https://jsonplaceholder.typicode.com/users")
      .then((r) =>
        r.data
          .slice(0, 10)
          .map((u) => ({ id: u.id, name: u.name, email: u.email }))
      );
  }
);

export const usersQueryOptions = () =>
  queryOptions({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });

export const fetchUser = createServerFn({ method: "GET" })
  .validator((input: string) => input)
  .handler(async ({ data }) => {
    const user = await axios
      .get<UserType>(`https://jsonplaceholder.typicode.com/users/${data}`)
      .then((r) => r.data)
      .catch((err) => {
        console.error(err);
        if (err.status === 404) {
          throw notFound();
        }
        throw err;
      });

    return user;
  });

export const userQueryOptions = (userId: string) =>
  queryOptions({
    queryKey: ["user", userId],
    queryFn: () => fetchUser({ data: userId }),
  });
