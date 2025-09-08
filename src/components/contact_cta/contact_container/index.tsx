import ContactLink from "../contact_link";
import ContactUpper from "../contact_upper";

const ContactContainer = () => {
  return (
    <section
      id="Contact"
      aria-labelledby="contact-title"
      className="py-16 bg-gray-900"
    >
      <div className="container mx-auto px-4 text-center">
        <ContactUpper />
        <ContactLink />
      </div>
    </section>
  );
};


export default ContactContainer;