import { Arrow3 } from "./common/Arrow";
import TechStack from "./common/TechStack";

const Technologies = () => {
  return (
    <section
      id="Technologies"
      className="relative flex flex-col items-center h-auto px-10 lg:mt-0 "
    >
      <div className="flex flex-col-reverse items-center justify-center w-full md:flex-row">
        <TechStack />
        <div className="grid place-items-center md:ml-20">
          <h2 className="my-10 text-4xl md:text-5xl font-bold border-b-8 border-solid border-[#3b82f6] w-fit">
            TECHNOLOGIES
          </h2>
          <p className="md:text-xl lg:text-2xl max-w-[50ch] font-bold">
            These are a few technologies I've worked and I'm comfortable with
            since I started Web Development. I love React. Currently, I would
            like to learn react native and AWS.
          </p>
        </div>
      </div>
      <Arrow3 />
    </section>
  );
};

export default Technologies;
