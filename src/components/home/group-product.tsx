import { fetchProductGroup } from "@/actions/product";
import CarouselGroupProductItem from "@/components/home/carousel-group-item";

export default async function CarouselGroupProduct() {
  const dataGroup = await fetchProductGroup({
    Id: 0,
  });
  if (dataGroup.length > 0) {
    return (
      <div className="flex flex-col gap-12 mt-12">
        {dataGroup.map((group: any, index: number) => (
          <CarouselGroupProductItem key={index} group={group} />
        ))}
      </div>
    );
  }
  return null;
}
