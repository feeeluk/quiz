"use client"

import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { phoneAFriendData } from "@/app/utils/context"
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function PhoneAFriendChart(){    

    const { phoneFriendData, setPhoneFriendData} = useContext(phoneAFriendData)
    let answers = [{"answer":"", "percentage": 0},{"answer":"", "percentage": 0},{"answer":"", "percentage": 0},{"answer":"", "percentage": 0}]
    phoneFriendData ? answers = phoneFriendData : ""
    console.log(answers)

    const [chartData, setChartData] = useState({
        datasets:[]
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        
        setChartData({
        labels: [`${answers[0].answer}`, `${answers[1].answer}`, `${answers[2].answer}`, `${answers[3].answer}` ],
            datasets: [
                {
                    label: 'Sales',
                    data: [answers[0].percentage, answers[1].percentage, answers[2].percentage, answers[3].percentage],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgb(53, 162, 235, 0.4)'
                }
            ]
        }) 

        setChartOptions({
            plugins: {
                legend: {
                    display: false,
                    position: 'top'
                },
                title: {
                    display: false,
                    text: "Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })
    }, [phoneFriendData])

    return(
        <>
        <div className="BarChart">
            <Bar data={chartData} options={chartOptions} />
        </div>
        </>
    )
}