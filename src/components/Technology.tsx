export default function Technology({ technology }: { technology: string }) {
  const technologiesMap = new Map([
    [
      "html5",
      {
        color: "E34F26",
        logoColor: "white",
      },
    ],
    [
      "css",
      {
        color: "663399",
        logoColor: "white",
      },
    ],
    [
      "javascript",
      {
        color: "F7DF1E",
        logoColor: "black",
      },
    ],
    [
      "figma",
      {
        color: "F24E1E",
        logoColor: "white",
      },
    ],
    [
      "python",
      {
        color: "3776AB",
        logoColor: "white",
      },
    ],
    [
      "ruby",
      {
        color: "CC342D",
        logoColor: "white",
      },
    ],
    [
      "c",
      {
        color: "A8B9CC",
        logoColor: "black",
      },
    ],
    [
      "c++",
      {
        color: "00599C",
        logoColor: "white",
      },
    ],
    [
      "kotlin",
      {
        color: "7F52FF",
        logoColor: "white",
      },
    ],
    [
      "typescript",
      {
        color: "3178C6",
        logoColor: "white",
      },
    ],
    [
      "react",
      {
        color: "61DAFB",
        logoColor: "black",
      },
    ],
    [
      "ruby on rails",
      {
        color: "D30001",
        logoColor: "white",
      },
    ],
    [
      "fastapi",
      {
        color: "009688",
        logoColor: "white",
      },
    ],
    [
      "jetpack compose",
      {
        color: "4285F4",
        logoColor: "white",
      },
    ],
    [
      ".net",
      {
        color: "512BD4",
        logoColor: "white",
      },
    ],
    [
      "tailwind css",
      {
        color: "06B6D4",
        logoColor: "white",
      },
    ],
    [
      "bootstrap",
      {
        color: "7952B3",
        logoColor: "white",
      },
    ],
    [
      "google cloud",
      {
        color: "4285F4",
        logoColor: "white",
      },
    ],
    [
      "git",
      {
        color: "F03C2E",
        logoColor: "white",
      },
    ],
    [
      "github",
      {
        color: "181717",
        logoColor: "white",
      },
    ],
    [
      "github copilot",
      {
        color: "000000",
        logoColor: "white",
      },
    ],
    [
      "claude code",
      {
        color: "D97757",
        logoColor: "white",
      },
    ],
    [
      "mysql",
      {
        color: "4479A1",
        logoColor: "white",
      },
    ],
    [
      "postgresql",
      {
        color: "4169E1",
        logoColor: "white",
      },
    ],
    [
      "firebase",
      {
        color: "DD2C00",
        logoColor: "white",
      },
    ],
    [
      "docker",
      {
        color: "2496ED",
        logoColor: "white",
      },
    ],
    [
      "linux",
      {
        color: "FCC624",
        logoColor: "black",
      },
    ],
  ]);

  const normalizedTechnology = technology.toLowerCase();
  const data = technologiesMap.get(normalizedTechnology);
  const color = !data ? "d6d6d7" : data.color;
  const logoColor = !data ? "000000" : data.logoColor;

  return (
    <img
      src={`https://img.shields.io/badge/${encodeURIComponent(technology)}-${color}?style=for-the-badge&logo=${encodeURIComponent(normalizedTechnology)}&logoColor=${logoColor}`}
      alt={technology}
      className="rounded-md"
    />
  );
}
