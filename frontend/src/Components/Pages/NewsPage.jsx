import React from "react";

const newsData = [
  {
    id: 1,
    title: "New Advancements in Heart Surgery",
    description:
      "Doctors are now using AI-powered tools to make heart surgeries safer and more effective. This advancement is expected to reduce risks and improve recovery times.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667824/NewAdvancementsinHeartSurgery_cw1ynf.jpg",
    date: "12 Sept 2025",
  },
  {
    id: 2,
    title: "Dental Care Awareness Camp",
    description:
      "A free dental care camp will be organized this weekend in multiple hospitals across the city. Patients can get free consultations and basic treatments.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667820/DentalCareAwarenessCamp_rhsuu1.jpg",
    date: "11 Sept 2025",
  },
  {
    id: 3,
    title: "Mental Health Support Programs",
    description:
      "Hospitals are focusing on mental wellness programs. These include stress management workshops, online counseling, and awareness sessions.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667820/MentalHealthSupportPrograms_qbcruz.avif",
    date: "10 Sept 2025",
  },
  {
    id: 4,
    title: "Child Vaccination Drive",
    description:
      "A large-scale vaccination drive is being conducted to protect children from seasonal flu and other viral infections. Parents are encouraged to register online.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667820/ChildVaccinationDrive_uq2nyw.jpg",
    date: "09 Sept 2025",
  },
  {
    id: 5,
    title: "Nutrition Tips for a Healthy Lifestyle",
    description:
      "Experts recommend adding more fruits, vegetables, and whole grains to your diet while reducing processed food intake for long-term health benefits.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667821/NutritionTipsforaHealthyLifestyle_lcshhl.jpg",
    date: "08 Sept 2025",
  },
  {
    id: 6,
    title: "Yoga & Meditation Workshops",
    description:
      "Hospitals are collaborating with wellness centers to offer free yoga and meditation workshops, helping people manage stress and improve flexibility.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667824/YogaMeditationWorkshops_imqo45.webp",
    date: "07 Sept 2025",
  },
  {
    id: 7,
    title: "Diabetes Awareness Week",
    description:
      "Doctors emphasize regular blood sugar checkups and lifestyle changes to prevent diabetes-related complications. Free camps are scheduled this week.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667819/DiabetesAwarenessWeek_kdklbc.webp",
    date: "06 Sept 2025",
  },
  {
    id: 8,
    title: "Women’s Health & Wellness Camp",
    description:
      "Special awareness sessions on women’s health, including gynecology and nutrition, are being organized to empower women with better healthcare access.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667822/WomenHealthWellnessCamp_io6wpd.webp",
    date: "05 Sept 2025",
  },
  {
    id: 9,
    title: "Free Eye Checkup Program",
    description:
      "Hospitals are launching free eye camps this month to help detect early vision problems. Spectacles will be provided at discounted rates for needy patients.",
    image:
      "https://res.cloudinary.com/dgbymqjtk/image/upload/v1757667820/FreeEyeCheckupProgram_wulobx.avif",
    date: "04 Sept 2025",
  },
];

const NewsPage = () => {
  return (
    <div className=" bg-gray-50 py-10 px-4 md:px-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Health News & Updates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {news.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{news.description}</p>
              <div className="text-sm text-gray-500">{news.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
