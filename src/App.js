import Header from "./components/Header";
import FirstSection from "./components/FirsSection";
import { AboutSection } from "./components/AboutSection";
import { PhotosSection } from "./components/PhotosSection";
import Contact from "./components/Contact";

function App() {
  const images = [
    {
      id: 1,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t31.18172-8/17157671_964951403639595_8885980264332018330_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IIOVSFGnt0QAX8Pd8BK&_nc_ht=scontent.fvag3-1.fna&oh=00_AfBJia5Hz9YdYPHfJkC51kD_MH11ijBXSqnh4_kLITFz2g&oe=65DFB2FE", // Ajuste aqui
    },
    {
      id: 2,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t31.18172-8/12185041_936259446459419_363151944476351490_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=4dc865&_nc_ohc=X-Goi21T6B8AX-S2mbS&_nc_ht=scontent.fvag3-1.fna&oh=00_AfAkauhVqmgkB9R0NWL36XJBiy2HAldChble0Tm3S8JgiQ&oe=65DFB7B1", // Ajuste aqui
    },
    {
      id: 3,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t1.18169-9/11026784_10152847325410488_7012616670784298216_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=4dc865&_nc_ohc=IbR0dL1ETAcAX_KTo-S&_nc_ht=scontent.fvag3-1.fna&oh=00_AfDzAaF0ErywZ27X9C1bE-q_osVUeTrjmwIdFNPBYmKQuA&oe=65DFBC38", // Ajuste aqui
    },
    {
      id: 4,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t1.18169-9/11025232_536949306443233_1435727426567440070_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=4dc865&_nc_ohc=lBl5wdanPoMAX_tgOXK&_nc_ht=scontent.fvag3-1.fna&oh=00_AfCN9cuAuAegAMLeY8KCWVNMBZz86AehBTzdMc2B90U1Sg&oe=65DFC6AC", // Ajuste aqui
    },
    {
      id: 5,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t31.18172-8/10514295_476066355864862_783151614239373590_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=QKim8xLbi0QAX8nHTja&_nc_ht=scontent.fvag3-1.fna&oh=00_AfDcAUq2d8AJVLVNIFsUR_HIYrSVwKC_noNDYyBDGfVCJw&oe=65DFE0C1", // Ajuste aqui
    },
    {
      id: 6,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t1.18169-9/11046362_536949056443258_3812904385235258544_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=4dc865&_nc_ohc=03m-bfkJjdcAX-ss_PE&_nc_ht=scontent.fvag3-1.fna&oh=00_AfCb3qje5_TEWLLv0ws6ATK5eTUm2Gu4JPBFIO0flXzweQ&oe=65DFDFD0", // Ajuste aqui
    },
    {
      id: 7,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t31.18172-8/10518665_476067235864774_3063551072159228507_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=ZWLRpVu_5m4AX-eAl3Y&_nc_ht=scontent.fvag3-1.fna&oh=00_AfAx7_oUb2IhCRmUwLTdyAL3h8kpY6BVLUQZavr_9OLCOQ&oe=65DFD585", // Ajuste aqui
    },
    {
      id: 8,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t1.18169-9/11143386_554736671331163_1627132651693282417_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=4dc865&_nc_ohc=d3pe2AgZDREAX-Puvsc&_nc_ht=scontent.fvag3-1.fna&oh=00_AfD6P1cRH8EuF-GeZLrKkWA15U-gqNWyCWwMRMtlN3isAA&oe=65DFD8CC", // Ajuste aqui
    },
    {
      id: 9,
      src: "https://scontent.fvag3-1.fna.fbcdn.net/v/t1.18169-9/13179372_1605106809804633_3159127357772972842_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=4dc865&_nc_ohc=6o5CEaZXWsEAX-0FSM-&_nc_ht=scontent.fvag3-1.fna&oh=00_AfALd2viJwjH4pk4RbL0dbe5Ny_hWravFy9P3T1ak3XfYA&oe=65DFAC6E", // Ajuste aqui
    },
  ];

  return (
    <div>
      <Header />
      <FirstSection />
      <AboutSection />
      <PhotosSection images={images} />
      <Contact />
    </div>
  );
}

export default App;
