import MissionItem from "../about_mission/about_mission_items";

const Mission = () => {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <MissionItem key={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default Mission;
