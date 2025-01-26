import Image from "next/image";
import PageHeader from "../PageHeader";

function AboutPage() {
  return (
    <>
      <PageHeader
        image_url={"/about/about-header.jpg"}
        title={"About Us"}
        page={"about"}
      />
      <section className="mx-auto flex w-full gap-10 py-small lg:px-medium">
        <div className="w-[60%]">
          <h1 className="mb-2 text-xl font-extrabold uppercase text-primary-heading-main md:mb-4 md:text-3xl">
            WELCOME TO TRADEGO LIMITED
          </h1>
          <p className="mb-4 w-full text-justify leading-7">
            At TradeGO Limited, we specialize in delivering high-quality
            cleaning chemicals tailored for commercial laundry operations. With
            a commitment to excellence and innovation, we provide reliable
            solutions to meet the demands of businesses in hospitality,
            healthcare, and industrial sectors.
          </p>
          <p className="mb-4 w-full text-justify leading-7">
            At TradeGO Limited, we take pride in being a trusted partner for
            commercial laundry businesses by offering premium cleaning chemical
            solutions. Our expertise lies in crafting high-performance products
            that meet the rigorous demands of various industries, ensuring
            efficiency, quality, and reliability with every application.
          </p>
          <p className="mb-4 w-full text-justify leading-7">
            Our specialized cleaning chemicals are meticulously formulated to
            address the unique challenges faced by commercial laundry
            operations, from tough stain removal to maintaining fabric quality.
            Whether you are in the hospitality industry managing pristine linens
            for guests, a healthcare facility requiring hospital-grade
            sanitation, or an industrial laundry handling high-volume cleaning
            needs, TradeGO Limited has the perfect solution for you.
          </p>
          <p className="mb-4 w-full text-justify leading-7">
            Our commitment to excellence drives us to continuously innovate,
            elivering products that not only meet but exceed industry standards.
            At the heart of our operations is a focus on customer satisfaction,
            ensuring that your laundry operations run smoothly and effectively.
            By combining cutting-edge technology, sustainable practices, and a
            deep understanding of your needs, we provide solutions that make a
            real difference.
          </p>
          <p className="mb-4 w-full text-justify leading-7">
            Our commitment to excellence drives us to continuously innovate,
            elivering products that not only meet but exceed industry standards.
            At the heart of our operations is a focus on customer satisfaction,
            ensuring that your laundry operations run smoothly and effectively.
            By combining cutting-edge technology, sustainable practices, and a
            deep understanding of your needs, we provide solutions that make a
            real difference.
          </p>
        </div>

        <div className="grid w-[40%] grid-cols-2 grid-rows-2 gap-4">
          {/* First row - Single image spanning two columns */}
          <div className="relative col-span-2 row-span-1 h-96 w-full overflow-hidden">
            <Image
              src="/about/about-1.jpg"
              alt="about"
              width={2000}
              height={1000}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="col-span-2 flex gap-5">
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/about/about-2.jpg"
                alt="about"
                width={2000}
                height={1000}
                className="h-auto w-full object-center"
              />
            </div>
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/about/about-3.jpg"
                alt="about"
                width={2000}
                height={1000}
                className="h-auto w-full object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
