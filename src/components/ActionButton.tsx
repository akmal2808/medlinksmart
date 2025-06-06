import { SelectedPage } from "@/utils/types";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-yellow-300 hover:text-white transition duration-300"
      onClick={() => setSelectedPage(SelectedPage.Team)}
      href={`#${SelectedPage.Team}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
