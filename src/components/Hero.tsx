import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section>
      <h1>Hi! I'm Samantha.</h1>
      <h2 className="flex flex-row items-center whitespace-pre gap-1">
        <span>I am a</span>
        <Typewriter
          options={{
            strings: [
              "software engineer.",
              "UI/UX designer.",
              "full-stack developer.",
              "pixel perfectionist.",
              "team player.",
              "problem solver.",
              "fern grower.",
            ],
            autoStart: true,
            loop: true,
            delay: 80,
            deleteSpeed: 30,
            pauseFor: 600,
          }}
        />
      </h2>
      <p>
        I enjoy creating high-quality software that is user-centered, scalable,
        and maintainable. I am passionate about solving problems and delivering
        software that is both valuable to users and engaging to use.
      </p>
    </section>
  );
}
