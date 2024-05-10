import React from 'react'
import { Days } from './Days'

export const DaysWather = () => {

  return (
    <div className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-0">
          <Days day={'Tomorrow'} urlImg={'./images/02d.png'} gradMin={'9'} gradMax={'20'} />
          <Days day={'Sun 7 Jun'} urlImg={'./images/02d.png'} gradMin={'16'} gradMax={'11'} />
          <Days day={'Mon 8 Jun'} urlImg={'./images/02d.png'} gradMin={'16'} gradMax={'11'} />
          <Days day={'Tue 9 Jun'} urlImg={'./images/02d.png'} gradMin={'16'} gradMax={'11'} />
          <Days day={'Wed 10 Jun'} urlImg={'./images/02d.png'} gradMin={'16'} gradMax={'11'} />          
    </div>
  )
}
