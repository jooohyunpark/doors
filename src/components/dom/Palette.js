import { roomData } from '@/data'

const Palette = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        display: 'flex',
        padding: '30px'
      }}
    >
      {roomData.map((d, i) => {
        return (
          <div key={i}>
            <div
              style={{
                background: d.color,
                width: '30px',
                height: '30px',
                color: '#000'
              }}
            ></div>
            <p
              style={{
                background: '#000',
                color: '#fff'
              }}
            >
              {d.id}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default Palette
