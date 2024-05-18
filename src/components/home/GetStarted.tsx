import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="section-width padding-top">
      <div className="relative  xl:py-14">
        <div className="bg-gradient-to-r from-[#101010] to-[#0d0d0d] border border-[#494848] xl:py-36 rounded-2xl xl:rounded-3xl xl:px-10 p-5 xl:p-0">
          <h2
            className="mb-0 font-extralight"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            Get Started
            <br className="hidden xl:block" /> with Labyrinth
          </h2>
          <p className="py-5" data-aos="zoom-in" data-aos-duration="800">
            Ready to experience the future of banking? Sign up for{" "}
            <br className="hidden xl:block" />
            Labyrinth today and unlock a world of convenience.
          </p>
          <div data-aos="zoom-in" data-aos-duration="800">
            <form action="#">
              <input
                type="text"
                placeholder="Enter email here"
                className="w-full md:w-96 px-5 py-3 rounded-md md:rounded-l-md bg-[#1c1c1c] border border-[#3a3939] outline-none text-white"
              />
              <button className="w-full  md:w-36 rounded-md py-3 bg-[#e6a23c] md:ml-[-20px] text-white mt-2 md:mt-0">
                Get Started
              </button>
            </form>
          </div>
          <div
            className="xl:hidden mt-10"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <Image
              className="w-full"
              src="/images/banner-card.png"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div
          className="hidden xl:block absolute top-0 right-[-50px]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Image
            className="w-[80%]"
            src="/images/banner-card.png"
            alt=""
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
