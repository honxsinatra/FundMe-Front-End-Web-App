import Image from "next/image";

const Home = () => {
  return (
    <section>
      <div>
        <Image
          src="/images/fundme.png"
          alt="Icon image"
          width={200}
          height={200}
        />
      </div>
      <nav>
        <ul></ul>
      </nav>
    </section>
  );
};

export default Home;
