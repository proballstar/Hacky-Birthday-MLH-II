import { useEffect, useState } from "react"
import axios from 'axios';

export default function Page() {
    
    const [colleges, setCollege] = useState([])

    async function getColleges() {
        await axios.get(`https://college-unlocked.epiccodewizard2.repl.co/colleges/all`)
            .then(res => res.data)
            .then(data => setCollege(data.sort((a,b) => b.graduation_rate-a.graduation_rate).filter(v => v.graduation_rate <= 100)))
    }

    useEffect(() => {
        getColleges()
    }, [])

    return (
        <div>
            {Object.keys(colleges[10] || [])}
            {colleges.map((values, index) => {
                return (
                    <div key={`college-listing-${index}`} className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{values.name}</h5>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{values.graduation_rate}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{values.is_private ? 'Private': 'Public'}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{values.enroll} students</span>
                        </div>
                    </div>
                    
                )
            })}
        </div>
    )
}