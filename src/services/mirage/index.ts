import { createServer, Factory, Model, Response } from "miragejs";
import { faker } from "@faker-js/faker";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    // gerar dados em massa
    factories: {
      user: Factory.extend({
        name(index) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(20);
        },
      }),
    },

    // gerar dados ao iniciar
    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const totalItems = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        console.log(request);
        console.log(page, per_page);
        console.log(pageStart);
        console.log(pageEnd);

        return new Response(
          200,
          { "x-total-count": String(totalItems) },
          { users }
        );
      });
      this.post("/users");

      this.namespace = "";
      this.passthrough(); // caso não encontre no miragejs passe pra api real
    },
  });

  return server;
}
