import { generateInfoJobsKeywordsURL } from "./generate-infojobs-keywords-url";

export const queryKeywords = async (prefix: string) => {
  const url = generateInfoJobsKeywordsURL({ prefix });

  if (!url) return;

  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};
