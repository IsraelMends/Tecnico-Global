interface MissionItemProps {
  text: string;
}

const MissionItem = ({ text }: MissionItemProps) => {
  return (
    <li className="flex items-center">
      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
      <span className="text-gray-600">{text}</span>
    </li>
  );
};

export default MissionItem;
