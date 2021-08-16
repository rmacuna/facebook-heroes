import { Popover, Transition } from "@headlessui/react";

export default function NavMoreItem() {
  const navElementsLeft = [
    { name: "Watch", href: "https://www.facebook.com/watch?v=9Q0-X-K-xqQ" },
    { name: "Developers", href: "https://www.facebook.com/developers" },
    { name: "Oculus", href: "https://www.facebook.com/oculus" },
    { name: "Facebook pay", href: "https://www.facebook.com/likes" },
    { name: "Careers", href: "https://www.facebook.com/notes" },
    { name: "Marketplace", href: "https://www.facebook.com/photos" },
    { name: "Create page", href: "https://www.facebook.com/videos" },
  ];

  const navElementsCenter = [
    {
      name: "Create announce",
      href: "https://www.facebook.com/watch?v=9Q0-X-K-xqQ",
    },
    { name: "Groups", href: "https://www.facebook.com/developers" },
    { name: "Information", href: "https://www.facebook.com/oculus" },
    { name: "Local", href: "https://www.facebook.com/oculus" },
    { name: "Privacy", href: "https://www.facebook.com/likes" },
    { name: "Cookies", href: "https://www.facebook.com/notes" },
    { name: "Announce options", href: "https://www.facebook.com/photos" },
  ];

  const navElementsRight = [
    { name: "Services", href: "https://www.facebook.com/watch?v=9Q0-X-K-xqQ" },
    {
      name: "Data center and vote",
      href: "https://www.facebook.com/developers",
    },
    { name: "Funds collect", href: "https://www.facebook.com/oculus" },
    { name: "Information", href: "https://www.facebook.com/likes" },
    { name: "Locations", href: "https://www.facebook.com/notes" },
    { name: "Page categories", href: "https://www.facebook.com/photos" },
    { name: "Help", href: "https://www.facebook.com/videos" },
  ];

  return (
    <Popover className="relative">
      <Popover.Button as="li" className="navigation-item">
        More
      </Popover.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute z-10 -ml-6">
          <div className="p-6 bg-white rounded-lg shadow-md md:w-x580">
            <div className="pb-2 border-b border-gray-200">
              <h3 className="text-lg font-semibold">More on facebook</h3>
            </div>
            <div className="pt-2  grid grid-cols-3">
              <AnchorList elements={navElementsLeft} />
              <AnchorList elements={navElementsCenter} />
              <AnchorList elements={navElementsRight} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

const AnchorList = ({ elements }) => {
  return (
    <ul role="list" className="m-0 grid grid-cols-1 gap-3">
      {elements.map(({ name, href }) => {
        return (
          <li
            key={name}
            role="listitem"
            className="text-sm text-gray-600 hover:text-blue-500"
          >
            <a href={href}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};
