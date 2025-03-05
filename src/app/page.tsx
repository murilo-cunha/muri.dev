import Links from "@/components/links";

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Murilo Cunha</h1>
      <p className="mt-2 text-lg sm:text-xl">Machine Learning Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Murilo Cunha, machine learning engineer based in
          Belgium.
        </p>

        <br />

        <p>
          This is a small project to showcase some projects.
        </p>

        <br />

        <p>
          You can find me in the links below.
        </p>
      </div>

      <Links />
    </div>
  );
}
