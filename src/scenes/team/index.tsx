import { SelectedPage } from "@/utils/types";
import { motion } from "framer-motion";
import imageFatih from "../../../public/Supervisor/fatih.jpg";
import imageAsa from "../../../public/Team/asa.jpg";
import imageHuda from "../../../public/Team/huda.png";
import imageMarko from "../../../public/Team/marko.jpg";
import imageSatria from "../../../public/Team/satria.jpg";
import imageTyo from "../../../public/Team/tyo.png";
import imageTeam1 from "../../../public/Team/team1.jpg";
import imageTeam2 from "../../../public/Team/team2.jpg";
import imageTeam3 from "../../../public/Team/team3.jpg";
import imageTeam4 from "../../../public/Team/team4.jpg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Ir. Muhammad Alfatih Hendrawan S.T., M.T.",
    role: "Supervisor",
    image: imageFatih,
    bio: "Oversees all project stages, provides guidance, ensures goals are achieved, and helps resolve challenges",
  },
  {
    name: "Muhammad Akmal Indratma",
    role: "Medicine Student Team",
    image: imageTeam1,
    bio: "Provides medical input, identifies user needs, and tests the prototype to meet healthcare standards",
  },
  {
    name: "Marko Refianto",
    role: "Software Engineer Student",
    image: imageTeam2,
    bio: "Developing and testing Internet of Things (IoT) modules, ensuring stable connectivity and accuracy of blood pressure/temperature data for real-time monitoring.",
  },
  {
    name: "Muhammad Adityo Rivalta",
    role: "Hardware Engineer",
    image: imageTeam3,
    bio: "Designing control panel housing using 3D (STL) modeling and EasyEDA to integrate IoT modules (sensors, ESP32), ensuring compatibility, thermal stability, and compliance with medical standards in the physical device structure.",
  },
  {
    name: "yoon Eaindray",
    role: "Biomedical Engineer",
    image: imageTeam4,
    bio: "Validating medical compliance of the device, designing SOAP (Subjective, Objective, Assessment, Plan) interfaces, and ensuring the product’s usability aligns with clinical standards for patient diagnosis and care.",
  },
  // {
  //   name: "Muhammad Adityo Rivalta",
  //   role: "Design Engineer",
  //   image: imageTyo,
  //   bio: "Designs ergonomic and aesthetic physical models, ensuring the design supports the device's technical functions",
  // },
];

const Team = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="team"
      className="py-16 px-4 bg-gray-50"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Team)}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Meet Our Team
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="w-full h-96 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm text-indigo-600 mb-2">{member.role}</p>
                <p className="text-sm text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
