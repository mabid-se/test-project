"use server";

const fetcher = async (url: string, params?: RequestInit | undefined) => {
  const res = await fetch(`${process.env.BACKEND_URL}/${url}`, { ...params });

  const data = await res.json();

  return data;
};

export default fetcher;
