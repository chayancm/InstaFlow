import { InstagramDuoToneBlue } from "@/icons";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Connect To Instagram and automate your posts, comments and DMs",
    icon: <InstagramDuoToneBlue />,
    strategy: "INSTAGRAM",
  },
];
