function Contact() {
  return (
    <section
      id="contact"
      className="mt-48 py-24 px-6 md:px-8 max-w-[800px] mx-auto"
    >
      <h2 className="text-4xl mb-10">Let’s work together</h2>

      {/* EMAIL (keep subtle) */}
      <a
        href="mailto:you@email.com"
        className="text-xl opacity-40 hover:opacity-100 transition"
      >
        email@email.com
      </a>

      {/* TEXT */}
      <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-[500px]">
        Drop me a line anytime, I'd be happy to write back. You can also follow
        me on{" "}
        <a
          href="https://x.com/AxelDevelops1"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            underline
            underline-offset-4
            decoration-2
            decoration-white
            hover:opacity-70
            transition
          "
        >
          X
        </a>
        ,{" "}
        <a
          href="https://bsky.app/profile/axeldevelops.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            underline
            underline-offset-4
            decoration-2
            decoration-white
            hover:opacity-70
            transition
          "
        >
          Bluesky
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/axel-fernandez-b19651240"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-semibold
            underline
            underline-offset-4
            decoration-2
            decoration-white
            hover:opacity-70
            transition
          "
        >
          LinkedIn
        </a>
        . If you are around Seoul, let's meet up for coffee.
      </p>
    </section>
  );
}

export default Contact;
