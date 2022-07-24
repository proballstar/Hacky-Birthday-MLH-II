import { useEffect, useState } from "react"
import axios from "axios"

export default function Page() {

    const [advice, setAdvice] = useState<any[]>([])

    async function getAdvice() {
        axios.get(`https://college-unlocked.epiccodewizard2.repl.co/advice/all`)
            .then(res => res.data)
            .then(data => setAdvice(data))
    }

    useEffect(() => {
        getAdvice()
    }, [])

    return (
        <div className="p-6 space-y-4">
            {advice.map((values, index) => {
                return (
                    <div key={`spec-advice-${values.aid}`}>
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mt-4">
                        <img className="w-full" src={values.cover} alt="Sunset in the mountains" />
                        <div className="p-3">
                            <div>
                            <div className="font-bold text-xl mb-2">{values.title}</div>
                            <p className="text-gray-700 text-base flex overflow-ellipsis text-ellipsis">
                                By {values.uid}
                            </p>       
                            <div dangerouslySetInnerHTML={values.desc} />
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{values.rating}/10</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{values.college_name}</span>
                        </div>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}