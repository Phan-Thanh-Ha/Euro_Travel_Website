import envConfig from "../../config";

export async function fetchMethod(data: object, func: string) {
  let dataPost = {
    ...data,
    GroupId: envConfig.NEXT_PUBLIC_GROUPID,
    GroupUserId: envConfig.NEXT_PUBLIC_GROUPID,
  };
  const response = await fetch(envConfig.NEXT_PUBLIC_API_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
    body: JSON.stringify({
      Json: JSON.stringify(dataPost),
      func: func,
      API_key: envConfig.NEXT_PUBLIC_API_KEY,
    }),
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return JSON.parse(await response.json());
}
