import { GetRequest } from "./MakeRequest";

export async function getRecentUpdates() {
  const result = await GetRequest({
    query:
      "/posts?pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt:desc",
  });
  return result;
}

export async function getHeroData() {
  const result = await GetRequest({
    query:
      "/posts?pagination[page]=1&pagination[pageSize]=2&[filters][type][$eq]=featured",
  });
  return result;
}

export async function getFeatured() {
  const result = await GetRequest({
    query:
      "/posts?pagination[page]=1&pagination[pageSize]=4&[filters][type][$eq]=featured",
  });
  return result;
}

export async function getOpinion() {
  const result = await GetRequest({
    query:
      "/posts?pagination[page]=1&pagination[pageSize]=4&[filters][category][slug][$eq]=opinion&sort[0]=createdAt:desc",
  });
  return result;
}

export async function getFSIOnTheNews() {
  const result = await GetRequest({
    query:
      "/posts?pagination[page]=1&pagination[pageSize]=4&[filters][category][slug][$eq]=fsi-on-the-news&sort[0]=createdAt:desc",
  });
  return result;
}
