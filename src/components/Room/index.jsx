import Door from "@/components/Door";
import Scene from "@/components/Scene";
// import Floor from "./Floor";

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
