export interface Service {
  id: number;
  title: string;
  description: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Service One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    title: "Service Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.",
  },
  {
    id: 3,
    title: "Service Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
  },
];
