export default function Technology({ technology }: { technology: string }) {
  const technologiesMap = new Map([
    [
      "html",
      {
        name: "HTML",
        color: "E34F26",
        logo: "html5",
        logoColor: "white",
      },
    ],
    [
      "css",
      {
        name: "CSS",
        color: "663399",
        logo: "css",
        logoColor: "white",
      },
    ],
    [
      "javascript",
      {
        name: "javascript",
        color: "F7DF1E",
        logo: "javascript",
        logoColor: "black",
      },
    ],
    [
      "figma",
      {
        name: "figma",
        color: "F24E1E",
        logo: "figma",
        logoColor: "white",
      },
    ],
  ]);
  const data = technologiesMap.get(technology.toLowerCase());
  return (
    <img
      src={`https://img.shields.io/badge/${data?.name}-${data?.color}?style=for-the-badge&logo=${data?.logo}&logoColor=${data?.logoColor}`}
      alt={data?.name}
      className="rounded-md"
    />
  );
}
