import ContactLink from "../contact_link";
import ContactUpper from "../contact_upper";

const ContactContainer = () => {
  return (
    <section
      id="Contact"
      aria-labelledby="contact-title"
      className="py-16 bg-accent relative overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-8 left-1/3 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 right-10 w-64 h-64 rounded-full bg-black/10 blur-2xl" />
      </div>
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-2xl rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 shadow-xl">
          <ContactUpper />
          <ContactLink />
        </div>
      </div>
    </section>
  );
};


export default ContactContainer;