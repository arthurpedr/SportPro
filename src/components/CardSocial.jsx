export default function CardsSocial({ icon, icon2, link, link2, title, description }) {
  return (
    <div className="w-[90vw] md:w-100 h-20 flex justify-center items-center rounded-[10px] gap-4 bg-[#e7e3ff] dark:bg-[#1C1D20] px-2 border border-[#155dfc]">
            <div className="flex flex-col justify-center w-84 h-12.25 text-[#1C1D20] dark:text-[#E9E9E9] ml-3">
              <p className="font-bold md:text-[20px]">{title}</p>
              <p className="text-gray-400 font-normal text-[14px] md:text-[16px]">{description}</p>
            </div>
            <div className="flex gap-4 w-37.5">
              { icon && <a href={link} target="_blanc" rel="noopener noreferrer"><img className="p-1 w-10 rounded-full object-cover bg-[#155dfc]" src={icon} alt="Ícone"/></a>}
              { icon2 && <a href={link2} target="_blanc" rel="noopener noreferrer"><img className="p-1 w-10 rounded-full object-cover bg-[#155dfc]" src={icon2} alt="Ícone"/></a>}
            </div>
          </div>
  );
}