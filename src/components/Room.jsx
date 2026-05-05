import Door from "@/components/Door";
import Scene from "@/components/Scene";

const Room = ({ data = [], color = "#000000" }) => {
  return (
    <Scene>
      <color attach="background" args={[color]} />

      {data.map((door) => (
        <Door
          key={door.id}
          position={door.position}
          rotation={door.rotation}
          color={door.color}
          id={door.id}
        />
      ))}
    </Scene>
  );
};

export default Room;
