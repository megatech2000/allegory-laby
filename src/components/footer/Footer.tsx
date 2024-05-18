import Image from "next/image";

const Footer = () => {
  return (
    <section className="section-width padding-top">
      <div className="py-10 md:flex">
        <div className="w-full h-full">
          <div>
            <div>
              <Image
                className="w-24 md:w-36"
                src="/images/logo.png"
                alt="logo image"
                width={600}
                height={600}
              />
            </div>
            <h1 className="py-3 mb-0 text-left">
              Transform Your
              <br /> Workflow with Labyrinth
            </h1>
            <p>
              Aliquam et tellus urna. Phasellus egetadipiscing elit.
              <br /> Mauris id nunc odio. Aliquam et tellus urna.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex justify-start mt-5 md:justify-end">
          <div>
            <p className="text-white">SOCIAL MEDIA</p>
            <a href="">
              <p className="text-sm pt-3">Instagram</p>
            </a>
            <a href="">
              <p className="text-sm pt-3">Facebook</p>
            </a>
            <a href="">
              <p className="text-sm pt-3">Linkedin</p>
            </a>
            <a href="">
              <p className="text-sm pt-3">Twitter</p>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-[#282828]" />
      <div className="md:flex items-center justify-between py-5">
        <div>
          <p className="text-white text-sm">
            CREATED BY{" "}
            <a href="" className="underline ">
              {" "}
              ALLEGORY
            </a>
          </p>
        </div>
        <div className="mt-5">
          <p className="flex gap-5 items-center text-sm">
            POWERED BY
            <a href="">
              <Image
                className="w-20 md:w-24"
                src="/images/logo.png"
                alt="logo image"
                width={600}
                height={600}
              />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
