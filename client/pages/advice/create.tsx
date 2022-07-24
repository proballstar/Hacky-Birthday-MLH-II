import { Formik } from 'formik'
import axios from 'axios'
import { useState } from 'react'
import React from 'react';
import { PlusCircleIcon, RefreshIcon } from "@heroicons/react/outline";
import { useMoralis } from 'react-moralis';

export default function Page() {
    
    const [cover, setCover] = useState<File | null>()
    const moralis = useMoralis()

    return (
        <div>
            <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Send Advice</h2>
            </div>
            <Formik
                initialValues={{
                    title: '',
                    college: '',
                    desc: '',
                    rating: 0
                }}
                onSubmit={async (values, helpers) => {
                    const data = new FormData()
                    data.append("title", values.title)
                    data.append("description", values.desc)
                    data.append("college_name", values.college)
                    data.append("cover", cover)
                    data.append("rating", String(values.rating))
                    data.append("uid", moralis.user.get('ethAddress'))
                    await axios.post(`https://college-unlocked.epiccodewizard2.repl.co/advice/create`, data)
                    console.table(values)
                    helpers.setSubmitting(false)
                }}
            >
                {formik => (
                    <form className='px-4 py-6' onSubmit={formik.handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title:</label>
                        <input value={formik.values.title} onChange={formik.handleChange} name='title' type="text" id="name" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="The Awesomeness awaits" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="college" className="block mb-2 text-sm font-medium text-gray-900">College:</label>
                        <input value={formik.values.college} onChange={formik.handleChange} name='college' type="text" id="college" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Carnegie Mellon University" required />
                        </div>
                    <div className="mb-6">
                        <label htmlFor="desc" className="block mb-2 text-sm font-medium text-gray-900">Description:</label>
                        <input value={formik.values.desc} onChange={formik.handleChange} name='desc' type="text" id="college" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="My university was ..." required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900">Rating (out of 5):</label>
                        <input value={formik.values.rating} onChange={formik.handleChange} name='rating' type="number" id="rating" className="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={String(0)} required />
                    </div>    
                    <div className="mb-6">
                        <label htmlFor="cover" className="block mb-2 text-sm font-medium text-gray-900">Cover:</label>
                        <input
                            name='cover'
                            id='cover'
                            type='file'
                            onChange={(e) => setCover(e.target.files![0])}
                            required
                            className='form-file block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none'
                        />
                      </div>
                      
                      {/* TODO: Add Loader Widget  */}
                <button
                    className="animate-bounce p-2 border-2 border-blue-900 font-semibold text-blue-800 rounded-lg m-2 outline-none"
                    onClick={() => formik.handleSubmit}
                >
                    <div className="flex">
                        {formik.isSubmitting ? (
                            <div>
                                <RefreshIcon width={30} className="animate-spin" />
                            </div>
                    ) : (
                        <div className='flex px-2 py-1'>
                            <PlusCircleIcon width={30} className='mx-2' /> Submit
                        </div>
                    )}{" "}
                    </div>
                    </button>
                </form>
                )}
            </Formik>
        </div>
    )
}