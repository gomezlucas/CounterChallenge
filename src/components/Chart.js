import React from 'react';
import { Bar } from 'react-chartjs-2';





const ResponsivePie = ({ dataColours }) => {
    let values = Object.values(dataColours)

    let data = {
        labels: ['60-52s', '51-42s', '41-32s', '31-22s', '21-12s', '11-0s', 'Not clicked', 'Not able to'],
        datasets: [
            {
                label: 'People who have fallen',
                data: [...values],
                backgroundColor: [
                    'rgb(128, 0, 128,0.6)',
                    'rgb(0, 0, 255,0.6)',
                    'rgb(0, 128, 0,0.6)',
                    'rgb(255, 255, 0,0.6)',
                    'rgb(255, 165, 0,0.6)',
                    'rgb(255, 0, 0,0.6)',
                    'rgb(128, 128, 128,0.6)',
                    'rgb(255, 255, 255,0.6)',
                ]
            }
        ]
    };
      return (
        <div>
            <Bar
                data={data}
                width={100}
                height={300}
                options={{
                    maintainAspectRatio: false,
                    title:
                    {
                        display: true,
                        text: 'Happy April Fools Day!!',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'bottom'
                    }
                }
                }
            />

        </div>
    )
}



export default ResponsivePie 