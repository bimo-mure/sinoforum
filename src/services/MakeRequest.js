export async function GetRequest({ query }) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
      },
    });

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw Error("Failed fetching data");
  }
}
