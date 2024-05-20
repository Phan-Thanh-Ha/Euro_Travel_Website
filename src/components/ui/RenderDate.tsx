interface RenderDateProps {
  DateStart: string
}
export const RenderDate = ({ DateStart }: RenderDateProps) => {
  return DateStart.split(",").map((item) => {
    return (
      <span
        key={item}
        className="text-xs font-semibold bg-sky-100 rounded-full px-2 py-1 text-blue-default text-center"
      >
        {item}
      </span>
    );
  });
};