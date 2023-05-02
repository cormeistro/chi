import ServiceBlob from "./components/ServiceBlob";
import styles from "./ServicesSection.module.css";
import { FiPackage } from "react-icons/fi";
// import { IoHammerOutline } from "react-icons/io5";
import {
  MdOutlineChair,
  MdOutlineTableRestaurant,
  MdOutlineFormatPaint,
  MdLightbulbOutline,
  MdOutlineDesignServices,
} from "react-icons/md";

const ServicesSection = () => {
  return (
    <section className={`${styles.servicesSection} section-pad100`}>
      <h1>Our Services</h1>
      <div className={styles.services}>
        <ServiceBlob
          title="Furniture"
          text="Our furniture often starts off as an idea, which quickly moves from a sketch, into the hands of our product development and testing teams. Our products of both comfort and design go through our own manufacturing process before finally ending up in your space. We have our own engineering and manufacturing teams, which gives us the unique ability to design, create, and deliver the perfect product to meet your needs."
          icon={<MdOutlineChair />}
        />
        <ServiceBlob
          title="Interior Design"
          text="We hire only the best and brightest designers and offer you the collective talents of one of the largest in-house design teams in West Michigan, often hireddirectly from the four accredited design schools nearby. Our design packages includes computer renderings, tangible colorboards, complete working drawings, and custom artwork. We design according to your aesthetic and work to increase your sales by keeping customer attention focused on your space."
          icon={<MdOutlineTableRestaurant />}
        />
        <ServiceBlob
          title="Graphic Design"
          text="Our teams of in-house graphic and interior designers work together to create custom graphics for a large range of applications. We strive to convey your brand messaging, highlight local pride, add one-of-a-kind graphic elements and visual movement to a partition divider, or simply provide beautiful art that accents the finishes and décor used in the space."
          icon={<MdOutlineDesignServices />}
        />
        <ServiceBlob
          title="Engineering"
          text="Our tech-savvy team of engineers are the go-to gang for trouble shooting, problem solving, and inventive product engineering. With over sixty years of collective experience, our engineering team continues to support all departments at CHi with their boundless knowledge of design, engineering, construction, manufacturing, and product installation."
          icon={<MdLightbulbOutline />}
        />
        <ServiceBlob
          title="Manufacturing"
          text="With our main office located in one of two furniture capitals in the country, an excellent supply of local resources are readily available. CHi is dedicated to environmentally responsible manufacturing processes, so your dreams of green grandeur can be realized with ease."
          icon={<FiPackage />}
        />
        <ServiceBlob
          title="Decor"
          text="Life, excitement, interest, and texture are what we bring to every space, with a focus on sustainable design decisions. We create unique solutions that suit your brand and customer needs; whether it’s the ambient glow from a hanging pendent, or the soft touch of the upholstery on a custom chair, or the bold graphic wallcovering that ties the whole space together. Every last detail is thoughtfully selected and placed, with the objective of inviting your customers to enjoy your establishment more often."
          icon={<MdOutlineFormatPaint />}
        />
        {/* <ServiceBlob
          title="Installations"
          text="We have certified installers in the US and Latin America so we can get the job done for you quickly at a competitive price. Our highly trained installers will impress you with their skills and professionalism."
          icon={<IoHammerOutline />}
        /> */}
      </div>
    </section>
  );
};

export default ServicesSection;
