"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import React, { useEffect } from "react";

const Certification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = [
    {
      title: "Developer Intern @Tatvasoft | Ahmedabad, India",
      link: "https://drive.google.com/file/d/1792PWsNM0uVQDvsgWamzyp4QEC2PrzSy/view?usp=drive_link",
      description:
        "I have worked here as an intern for 1 month on learning real-world software development by working on a Virtual Community Support System, contributing to requirement analysis, development, and deployment using ASP.NET, Angular, PostgreSQL, HTML, CSS, and JavaScript.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/tatvasoft.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "PHP Developer @DigiFarm,Navsari, India",
      link: "https://drive.google.com/file/d/1OyxSEQHUDvBKlQV15j5o_zZSo0O0oKkc/view?usp=drive_link",
      description:
        "Developing and maintaining scalable web applications using PHP and CodeIgniter, implementing MVC architecture, database integrations, and performance-optimized features in a collaborative development environment.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/Digifarm.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Data Science Intern @CODSOFT",
      link: "https://drive.google.com/file/d/1IrTSk3zBQEU2HHiemkaINCMzjMHjivny/view?usp=drive_link",
      description:
        "I have worked on real-world machine learning projects including Titanic survival prediction, movie rating analysis, and Iris classification using Python.Gained hands-on experience in data preprocessing, feature engineering, model building, and evaluation.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Images/codesoft.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="sm:px-12 py-6">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Certification;
