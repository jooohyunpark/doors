import { roomData } from '@/data'

const Colors = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        display: 'flex',
        padding: '20px'
      }}
    >
      {roomData.map((d, i) => {
        return (
          <div
            key={i}
            style={{
              background: d.color,
              width: '20px',
              height: '20px',
              color: '#000'
            }}
          >
            {d.id}
          </div>
        )
      })}
    </div>
  )
}

export default Colors
