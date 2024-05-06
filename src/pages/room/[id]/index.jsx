import { doors, roomData, getRoomData } from "@/data";
import Room from "@/components/Room";

export default function Page({ id = 1 }) {
  return (
    <>
      <Room
        color={getRoomData(+id).color}
        data={doors(roomData.filter((room) => room.id !== id))}
      />
    </>
  );
}

export async function getStaticPaths() {
  const paths = roomData
    // .filter((data) => data.id > 0)
    .map((data) => ({
      params: {
        id: data.id.toString(),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id,
      key: params.id, // to destroy component on route change
    },
  };
}
