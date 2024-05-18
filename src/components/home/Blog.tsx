import Image from "next/image";
import { blogData } from "./data";

const Blog = () => {
  return (
    <section className="section-width padding-top">
      <div className="flex items-center justify-center">
        <div className="text-center w-[700px]">
          <h2 className="mb-0">
            Insights & Inspiration Explore
            <br /> Our Blog
          </h2>
          <p className="py-5">
            Dive deeper into the world of finance with our engaging blog
            content. From expert financial advice to the latest industry trends
          </p>
        </div>
      </div>
      <div className="md:flex gap-5  pt-10">
        {blogData.map((item, i) => (
          <a href={item.link}>
            <div
              className="w-full h-full bg-scale cursor-pointer mt-14 md:mt-0"
              key={i}
            >
              <div>
                <div>
                  <Image
                    className="rounded-lg "
                    src={item.img}
                    alt="blog images"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div>
                  <p className="pt-5">{item.date}</p>
                  <h6 className="mb-0 font-light py-3">{item.title}</h6>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
