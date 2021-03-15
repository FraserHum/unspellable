import Prismic from "@prismicio/client";
import PrismicDOM from "prismic-dom";
import App from "../pages/_app";

var apiEndpoint = "https://unspellable.cdn.prismic.io/api/v2";

const Client = Prismic.client(apiEndpoint);

export async function predicateQuery(type, predicate, order) {
  const response = await Client.query(
    Prismic.Predicates.at(type, predicate),
    order
  );
  if (response) {
    return response;
  } else return;
}
