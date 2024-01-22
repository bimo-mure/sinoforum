export async function getAllPost() {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
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
    throw Error("Failed getting data");
  }
}

export async function getRecentUpdates() {
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }/posts?pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt:desc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
        },
      }
    );

    if (!res.ok) throw Error();

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw Error("Failed getting data");
  }
}
