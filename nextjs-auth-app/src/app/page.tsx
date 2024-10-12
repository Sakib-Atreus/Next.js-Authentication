import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-max-screen">
      <h1 className="text-4xl text-center mt-10">
        Welcome To Next Auth Application
      </h1>
      <Image
        src="https://i.ytimg.com/vi/69f5bqRtMtY/maxresdefault.jpg"
        width={900}
        height={200}
        alt="nextAuth"
        className="flex mx-auto"
      />
    </div>
  );
};

export default HomePage;
