import Image from "next/image";
import { blogData } from "./data";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <section className="section-width padding-top">
      <div className="flex items-center justify-center">
        <div className="text-center w-[700px]">
          <motion.h2
            className="mb-0"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Insights & Inspiration Explore
            <br /> Our Blog
          </motion.h2>
          <motion.p
            className="py-5"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Dive deeper into the world of finance with our engaging blog
            content. From expert financial advice to the latest industry trends
          </motion.p>
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
