import { InstagramIcon } from "../assets/icons/InstagramIcon";

const footerData = [
  {
    title: "Important Links",
    items: [
      {
        name: "Terms & Privacy",
        href: "/terms"
      }
    ],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <div className="pt-10  lg:pt-20 lg:pb-16 bg-[#1b1c24] radius-for-skewed ">
        <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
              <div className="flex justify-center lg:justify-start items-center grow basis-0">
              </div>
              <div className="w-36 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                  href="https://www.instagram.com/krucksdev/"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <div className="w-full lg:w-2/3  lg:pl-16 lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-primaryText">
                  {footerData[0].title}
                </h3>
                <ul>
                  {footerData[0].items.map((item, index) => (
                    <li key={`${item.name}-${index}`} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href={item.href}
                        aria-label={item.name}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
