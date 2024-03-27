import { fetchBlogs } from "@/actions/setting";

export default async function BlogSection() {
  let pr = { Take: 10, Page: 1, Url: "", UrlParent: "/tin-tuc" };

  const blogs = await fetchBlogs(pr);

  return <div>BlogSection</div>;
}
