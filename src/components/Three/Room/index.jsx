import Door from "@/components/Three/Door";
import Scene from "@/components/Three/Scene";

const Room = ({ data = [], color = "#000000" }) => {
  return (
    <>
      <Scene>
        <color attach="background" args={[color]} />

        {data.map((door, i) => {
          return (
            <Door
              position={door.position}
              rotation={door.rotation}
              color={door.color}
              id={door.id}
              key={i}
            />
          );
        })}
      </Scene>
    </>
  );
};

export default Room;
