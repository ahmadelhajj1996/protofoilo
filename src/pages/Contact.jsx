import { FaWhatsapp } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import Title from "../components/Title";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

function Contact() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string()
      .min(10, "Subject must be at least 10 characters")
      .max(500, "Subject must be less than 500 characters")
      .required("Subject is required"),
  });

  // Formik hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      // Handle form submission here
      console.log("Form submitted:", values);

      // Simulate API call
      setTimeout(() => {
        alert("Thank you for your message! I'll get back to you soon.");
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <>
      <div className="flex flex-col gap-y-12 md:gap-y-6">
        <Title
          first={"Get in"}
          second={"Touch"}
          description={
            "I would love to hear from you. Lets create something amazing together!"
          }
        />

        <div className="grid grid-cols-1 lg:min-w-full lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-6 p-4 ps-8 rounded-lg border">
              <a
                href="mailto:ahmad.1996.elhaj@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-3 items-center hover:text-sky-700 transition-colors"
              >
                <Mail size={20} />
              <p className=" text-sm md:text-md  leading-relaxed">ahmad.1996.elhaj@gmail.com</p>  
              </a>

              <a
                href="tel:+971502948810"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-3 items-center hover:text-sky-700 transition-colors"
              >
                <Phone size={20} />
                <p className=" text-sm md:text-md  leading-relaxed"> +971 50 294 8810 </p>
              </a>

              <div className="flex gap-x-3 items-center">
                <MapPin size={20} />
               <p className=" text-sm md:text-md  leading-relaxed"> Sharjah, UAE </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 p-4 ps-8 rounded-lg border">
              <span className="text-center">Connect with me on</span>
              <div className="flex justify-between items-center gap-x-3 w-1/2 mx-auto">
                <a
                  href="https://wa.me/971502948810?text=Hello%20I'm%20interested%20in%20your%20software%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-green-600 transition-colors"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/a-elhaj96/"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ahmadelhajj1996?tab=repositories"
                  rel="noopener noreferrer"
                  className="cursor-pointer hover:text-gray-800 transition-colors"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-y-4 p-4 ps-8 rounded-lg border"
          >
            <div className="flex flex-col gap-y-2 ">
              <div className="flex items-center gap-x-2">
                <User size={17} />
                <h3 className="text-sm ">Name</h3>
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500 text-xs">
                    ({formik.errors.name})
                  </div>
                )}
              </div>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className={`rounded-lg p-1.5 ps-3 text-black focus:outline-none focus:ring-0 focus:border ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "focus:border-sky-900"
                }`}
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <Mail size={17} />
                <h3 className="text-sm">Email</h3>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-xs ">
                    ({formik.errors.email})
                  </div>
                )}
              </div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`rounded-lg p-1.5 ps-3 text-black focus:outline-none focus:ring-0 focus:border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "focus:border-sky-900"
                }`}
                placeholder="youremail@example.com"
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <div className="flex items-center gap-x-2">
                <MessageSquare size={17} />
                <h3 className="text-sm ">Message</h3>
                {formik.touched.subject && formik.errors.subject && (
                  <div className="text-red-500 text-xs">
                    ({formik.errors.subject})
                  </div>
                )}
              </div>
              <textarea
                id="subject"
                name="subject"
                rows={4}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className={`rounded-lg p-1.5 ps-3 text-black focus:outline-none focus:ring-0 focus:border ${
                  formik.touched.subject && formik.errors.subject
                    ? "border-red-500"
                    : "focus:border-sky-900"
                }`}
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className={`cursor-pointer flex gap-x-3 justify-center items-center w-full mt-2 rounded-lg border p-2 transition-all ${
                formik.isSubmitting || !formik.isValid
                  ? "opacity-50 cursor-not-allowed"
                  : " text-md"}`}
            >
              <Send size={20} />
              <p>{formik.isSubmitting ? "Sending..." : "Submit"}</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
