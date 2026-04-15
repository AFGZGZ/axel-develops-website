import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "free20min" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="mt-48 py-24 px-6 md:px-8 max-w-[800px] mx-auto"
    >
      <h2 className="text-4xl mb-10">Let’s work together</h2>
      <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-[500px]">
        Book a free 20 minute consultation{" "}
      </p>
      <button
        className="text-xl opacity-40 hover:opacity-100 transition cursor-pointer"
        data-cal-namespace="free20min"
        data-cal-link="axeldevelops/free20min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
      >
        Schedule a meeting
      </button>
      <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-[500px]">
        Or Drop me a line anytime at:{" "}
      </p>
      <a
        href="mailto:contact@axeldevelops.com"
        className="text-xl opacity-40 hover:opacity-100 transition"
      >
        contact@axeldevelops.com
      </a>
      <p className="mt-10 text-lg md:text-xl leading-relaxed max-w-[500px]">
        I'd be happy to write back. You can also follow me on{" "}
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
