import React from 'react'
import { Bar } from 'react-chartjs-2'

const Chartss = () => {
  return (
      <>
        <div>Chartss</div>
        < Bar
            data={{
                labels:['Red','Blue','Yellow','Green']
            }}
            width={450}
            height={300}
        />
      </>
    
  )
}

export default Chartss