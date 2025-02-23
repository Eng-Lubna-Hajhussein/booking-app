import React from "react";
import avatarImg from "@/assets/avatar.png";
import linkedinIcon from "@/assets/icons/linkedin.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import instagramIcon from "@/assets/icons/instagram.svg";
import Image from "next/image";

const ConsultantProfile: React.FC = () => {
  return (
    <div className="md:col-span-7 bg-lightGray rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 pt-2">
        <div className="md:col-span-7  bg-lightGray rounded-xl  pt-3">
          <div className=" flex flex-col md:flex-row items-start text-right px-4 w-full">
            <div
              className="flex flex-col items-center md:items-start w-full md:w-3/4 px-2 text-center md:text-right"
              dir="rtl"
            >
              <h1 className="text-black text-md font-bold mt-2">سـارة أحمد</h1>
              <h4 className="text-black text-md mb-2 max-w-xs md:max-w-xs">
                مؤسس ، مستثمر ، شريك في اكبر شركات التقنية بالمملكة ، خبرة 35
                عاماً
              </h4>
              <div className="flex gap-2 justify-center md:justify-start">
                <Image src={twitterIcon} className="cursor-pointer" alt="Twitter Icon" />
                <Image src={instagramIcon} className="cursor-pointer" alt="Instagram Icon" />
                <Image src={linkedinIcon} className="cursor-pointer" alt="Linkedin Icon" />
              </div>
              <h4 className="text-black text-md font-extrabold mt-2 mb-8">
                متاح للجلسات
              </h4>
            </div>
            <div className="flex justify-center md:items-start md:justify-end w-full md:w-1/4 mb-4 md:mb-0">
              <Image
                src={avatarImg}
                alt="User Avatar"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-divider" />
      <div
        className="flex flex-col items-start justify-start text-right flex-grow p-4 py-6"
        dir="rtl"
      >
        <h1 className="text-black text-md font-bold">نبذة تعريفية</h1>
        <h4 className="text-black text-md mb-2">
          متخصّص في تطوير وادارة المنتجات الرقمية. مهتم في البزنس ولي عدة تجارب
          فيه. مستثمر. معد ومقدم بودكاست #سوالف_بزنس.
        </h4>
        <div className="mt-2">
          <h1 className="text-black text-md font-bold mt-2">نبذة</h1>
          <h4 className="text-black text-md mb-2">أشياء يمكنني أن أنصح بها:</h4>
          {[
            "اشتراك e-com",
            "اعتماد الوسائط الرقمية / المنصة",
            "بناء + تحجيم SaaS",
            "الاستثمار المبكر",
            "استراتيجيات نمو تويتر",
            "بناء المجتمع",
          ].map((advice,index) => (
            <p className="text-black text-md mb-2" key={index}>- {advice}</p>
          ))}
          <h4 className="text-black text-md mt-8">
            أحب مساعدة الآخرين ، وخاصة رواد الأعمال الجائعين.
          </h4>
          <h4 className="text-black text-md mt-8">
            توسيع نطاق مجتمع المؤسس الخاص حاليًا.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;
