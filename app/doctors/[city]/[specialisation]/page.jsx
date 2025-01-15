import TawkToChat from "@/components/TawktoChat";
import React from "react";

const Page = async ({ params }) => {
  const data = [
    {
      id: "s999",
      department: "",
      departmentv2: "",
      generalTerm: "",
      imgUrl: "https://assets.bigohealth.com/departments/All.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_all_doctor.png",
      minAmount: 0,
      rank: 99,
      category: 1,
    },
    {
      id: "s1",
      department: "General Physician",
      departmentv2: "Physician",
      generalTerm: "diabetes#fever#cold",
      imgUrl: "https://assets.bigohealth.com/departments/physician.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_general_physician.png",
      minAmount: 100,
      rank: 95,
      category: 1,
    },
    {
      id: "s3",
      department: "Gynecologist",
      departmentv2: "Gynecology",
      generalTerm: "women#ivf#woman#abortion#menstruation#menstrual",
      imgUrl: "https://assets.bigohealth.com/departments/Gynaecology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_gynocology.png",
      minAmount: 100,
      rank: 90,
      category: 1,
    },
    {
      id: "s2",
      department: "Pediatrician",
      departmentv2: "Pediatrics",
      generalTerm: "child#baby",
      imgUrl: "https://assets.bigohealth.com/departments/pediatrics.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_paediatrics.png",
      minAmount: 100,
      rank: 85,
      category: 1,
    },
    {
      id: "s7",
      department: "Dermatologist",
      departmentv2: "Dermatology",
      generalTerm: "dermo#skin#itch",
      imgUrl: "https://assets.bigohealth.com/departments/Dermatology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_dermatologist.png",
      minAmount: 99,
      rank: 80,
      category: 1,
    },
    {
      id: "s4",
      department: "Dentist",
      departmentv2: "Dentist",
      generalTerm: "teeth#cavity#toothache#gums",
      imgUrl: "https://assets.bigohealth.com/departments/dentist.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_dentist.png",
      minAmount: 99,
      rank: 75,
      category: 1,
    },
    {
      id: "s17",
      department: "Psychiatrist",
      departmentv2: "Psychiatry",
      generalTerm: "mind#depression#anxiety#stress",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/psychiatry.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_psychiatry.png",
      minAmount: 100,
      rank: 70,
      category: 1,
    },
    {
      id: "s18",
      department: "Neurologist",
      departmentv2: "Neurology",
      generalTerm: "neuro#brain#neurology",
      imgUrl: "https://assets.bigohealth.com/departments/Neurology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_neurology.png",
      minAmount: 99,
      rank: 65,
      category: 2,
    },
    {
      id: "s10",
      department: "Ophthalmologist",
      departmentv2: "Ophthalmology",
      generalTerm: "eye",
      imgUrl: "https://assets.bigohealth.com/departments/opthamology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_ophthamology.png",
      minAmount: 0,
      rank: 60,
      category: 1,
    },
    {
      id: "s6",
      department: "E-N-T",
      departmentv2: "E-N-T",
      generalTerm: "ear#nose#throat#eye",
      imgUrl: "https://assets.bigohealth.com/departments/ent.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_ent.png",
      minAmount: 0,
      rank: 55,
      category: 1,
    },
    {
      id: "s26",
      department: "Oncologist",
      departmentv2: "Oncology",
      generalTerm: "tumor#cancer",
      imgUrl: "https://assets.bigohealth.com/departments/Oncologist.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_oncology.png",
      minAmount: 0,
      rank: 50,
      category: 2,
    },
    {
      id: "s5",
      department: "Cardiologist",
      departmentv2: "Cardiology",
      generalTerm: "heart",
      imgUrl: "https://assets.bigohealth.com/departments/cardiology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_cardiology.png",
      minAmount: 100,
      rank: 50,
      category: 2,
    },
    {
      id: "s32",
      department: "Gastroenterologist",
      departmentv2: "Gastroenterology",
      generalTerm: "intenstine",
      imgUrl:
        "https://assets.bigohealth.com/departments/Gastroenterologist.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_gas_entrology.png",
      minAmount: 0,
      rank: 49,
      category: 2,
    },
    {
      id: "s23",
      department: "Nephrologist",
      departmentv2: "Nephrology",
      generalTerm: "kidney#nephro",
      imgUrl: "https://assets.bigohealth.com/departments/nephrologist.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_nephrology.png",
      minAmount: 0,
      rank: 48,
      category: 2,
    },
    {
      id: "s34",
      department: "Pulmonologist",
      departmentv2: "Pulmonology",
      generalTerm: "athma#tb#tuberculosis#respiratory#breath",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/Pulmonologist.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_pulmonology.png",
      minAmount: 0,
      rank: 47,
      category: 2,
    },
    {
      id: "s16",
      department: "Dietitian",
      departmentv2: "Dietitian",
      generalTerm: "diet#food",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/diet.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_dietician.png",
      minAmount: 100,
      rank: 45,
      category: 5,
    },
    {
      id: "s14",
      department: "General Surgeon",
      departmentv2: "General Surgery",
      generalTerm: "surgeon",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/genral_surgeon.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_general_surgeon.png",
      minAmount: 99,
      rank: 40,
      category: 3,
    },
    {
      id: "s9",
      department: "Laparoscopic Surgeon",
      departmentv2: "Laparoscopic Surgery",
      generalTerm: "surgeon#surgery",
      imgUrl: "https://assets.bigohealth.com/departments/laparoscopic.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_laparoscopic_surgery.png",
      minAmount: 99,
      rank: 35,
      category: 3,
    },
    {
      id: "s8",
      department: "Urologist",
      departmentv2: "Urology",
      generalTerm: "urine",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/kidney.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_kidney_urine.png",
      minAmount: 100,
      rank: 30,
      category: 2,
    },
    {
      id: "s13",
      department: "Bariatric Surgery",
      departmentv2: "Bariatric Surgery",
      generalTerm: "weight loss",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/bariatric.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_bariatric_surgery.png",
      minAmount: 1500,
      rank: 25,
      category: 3,
    },
    {
      id: "s11",
      department: "Orthopedic",
      departmentv2: "Orthopedic",
      generalTerm: "bone#vein",
      imgUrl: "https://assets.bigohealth.com/departments/orthopedic.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_orthopaedics.png",
      minAmount: 100,
      rank: 20,
      category: 1,
    },
    {
      id: "s12",
      department: "Physiotherapist",
      departmentv2: "Physiotherapy",
      generalTerm: "physio#therapy",
      imgUrl: "https://assets.bigohealth.com/departments/Phsysiotherapy.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_physiotherepy.png",
      minAmount: 0,
      rank: 15,
      category: 1,
    },
    {
      id: "s39",
      department: "Diabetologist",
      departmentv2: "Diabetology",
      generalTerm: "diabetes#sugar#madhumeh",
      imgUrl: "https://assets.bigohealth.com/departments/diabetology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_diabetology.png",
      minAmount: 100,
      rank: 1,
      category: 2,
    },
    {
      id: "s40",
      department: "Neurosurgeon",
      departmentv2: "Neurosurgery",
      generalTerm: "neuro#neuro surgeon",
      imgUrl: "https://assets.bigohealth.com/departments/neurosurgeon.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_neuro_surgeon.png",
      minAmount: 100,
      rank: 1,
      category: 2,
    },
    {
      id: "s38",
      department: "Allergist",
      departmentv2: "Allergy",
      generalTerm: "allergy",
      imgUrl: "https://assets.bigohealth.com/departments/Allergy.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_allergy.png",
      minAmount: 100,
      rank: 0,
      category: 1,
    },
    {
      id: "s36",
      department: "Unani",
      departmentv2: "Unani",
      generalTerm: "unani",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/unani.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_unani.png",
      minAmount: 0,
      rank: 0,
      category: 4,
    },
    {
      id: "s41",
      department: "Hepatologist",
      departmentv2: "Hepatologist",
      generalTerm: "liver",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_hepatologist.png",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_hepatologist.png",
      minAmount: 99,
      rank: 0,
      category: 2,
    },
    {
      id: "s42",
      department: "Liver Transplant",
      departmentv2: "Liver Transplant",
      generalTerm: "liver transplant",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/surgery_icons/liver/sur_liver_transplant.png",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/surgery_icons/liver/sur_liver_transplant.png",
      minAmount: 99,
      rank: 0,
      category: 2,
    },
    {
      id: "s31",
      department: "Sexologist",
      departmentv2: "Sexology",
      generalTerm: "sex#masturbation#night fall",
      imgUrl: "https://assets.bigohealth.com/departments/sexology.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_sexology.png",
      minAmount: 100,
      rank: 0,
      category: 1,
    },
    {
      id: "s30",
      department: "Yoga",
      departmentv2: "Yoga",
      generalTerm: "yog#yoga",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/Yog.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_yoga.png",
      minAmount: 0,
      rank: 0,
      category: 4,
    },
    {
      id: "s29",
      department: "Ayurveda",
      departmentv2: "Ayurveda",
      generalTerm: "ayurveda#ayurvedic",
      imgUrl: "https://assets.bigohealth.com/departments/Ayurveda.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_ayurveda.png",
      minAmount: 0,
      rank: 0,
      category: 4,
    },
    {
      id: "s21",
      department: "Plastic Surgeon",
      departmentv2: "Plastic Surgery",
      generalTerm: "plastic#plastic surgery",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/plastic+surgeon.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_plastic_surgeon.png",
      minAmount: 0,
      rank: 0,
      category: 3,
    },
    {
      id: "s19",
      department: "Homeopathy",
      departmentv2: "Homeopathy",
      generalTerm: "homeopath#homeo#homeopathy",
      imgUrl:
        "https://bigohealth-images.s3.amazonaws.com/Specialisation/englishwebp/Homeopath.webp",
      iconURL:
        "https://bigohealth-images.s3.amazonaws.com/App/Speciality/sp_homeopathy.png",
      minAmount: 0,
      rank: 0,
      category: 4,
    },
  ];

  const { specialisation } = await params;

  const specData = data.filter(
    (spec) => spec.department.toLowerCase() === specialisation.toLowerCase()
  );

  console.log("spec data: ", specData);

  return (
    <div className="text-3xl p-5">
      <h1>Specialisation Page</h1>
      <h2>{specialisation}</h2>
      <TawkToChat pageData={specData[0]} />
    </div>
  );
};

export default Page;
