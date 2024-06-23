import React from "react";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  breadcrumb: { label: string; link?: string; active?: boolean }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, subtitle, imageUrl, breadcrumb }) => {
  return (
    <section
      id="page-header"
      className="w-full bg-cover bg-center min-h-[300px] flex items-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div id="title" className="max-lg:px-[2rem] px-[12rem]">
        <div id="content" className="text-white">
          <h2 className="text-[42px] font-extrabold">{title}</h2>
          <p className="text-[17px] mb-[15px] whitespace-pre-line">{subtitle}</p>
          <ol id="breadcrumb" className="p-0 flex gap-2 text-[12px] font-medium">
            {breadcrumb.map((item, index) => (
              <li key={index} className={item.active ? "text-[#FE5F00] uppercase" : "uppercase"}>
                {item.link ? <a href={item.link}>{item.label}</a> : item.label}
                {index < breadcrumb.length - 1 && " / "}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;