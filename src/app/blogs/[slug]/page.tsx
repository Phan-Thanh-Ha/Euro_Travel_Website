import { BlogTravelComp } from "@/app/blogs/[slug]/BlogTravelComp";
import { Breadcrum } from "@/components/home/bread-crumb";
import { HomeIcon } from "@radix-ui/react-icons";

export default async function Blogs_Travel_Experience() {
  return (
    <div className="container px-2 mx-auto mt-10 ">
      <Breadcrum
        items={[
          {
            href: "/",
            title: (
              <>
                <HomeIcon />
              </>
            ),
          },
          { title: "blogs", isCurrentPage: true },
          { title: "Travel_Experience", isCurrentPage: true },
        ]}
      />
      {/* <BlogTravelComp
       /> */}
    </div>
  );
}
