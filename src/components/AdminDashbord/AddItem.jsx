import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import { categoryItem } from '../../utils/categoriesItem';
import { cloudinaryUpload } from '../../utils/getImageLink';
import axios from 'axios';
import { FaSpinner } from 'react-icons/fa';
import { usePostItemMutation } from '../../redux/features/item/itemApi';



const AddItem = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [postData] = usePostItemMutation(undefined)

    const handelSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const form = e.target
        const title = form.title.value
        const price = form.price.value
        const stock = form.stock.value
        const category = form.category.value
        const imageFile = e.target.cover_image.files[0];
        const res = await cloudinaryUpload(imageFile)
        const image = res.secure_url
        const data = { title, price, stock, category, cover_image: image, description: `${content}` }
        const itemUpdateRes = await postData(data)
        if (itemUpdateRes) {
            setIsLoading(false)
            e.target.reset();
            setContent('')
        }


    }

    return (
        <div>
            <div>
                <div className=" w-[80%] mx-auto  h-full overflow-y-auto text-black">

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={handelSubmit} className='overflow-y-auto'>
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                                Title
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">

                                                <input type="text" required name="title" id="title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                                Price
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">

                                                <input type="text" required name="price" id="price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="price" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="col-span-3 sm:col-span-2">
                                            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                                Stock
                                            </label>
                                            <div className="mt-1 flex rounded-md shadow-sm">

                                                <input type="number" name="stock" id="stock" required className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="Stock" />
                                            </div>
                                        </div>
                                    </div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Select an Category</label>
                                    <select id="category" name='category' required className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5     ">
                                        <option  >Choose a Category</option>
                                        {
                                            categoryItem.map(({ title, value }) => <option key={value} value={value}>{title}</option>)
                                        }
                                    </select>
                                    <div className='text-black overflow-y-auto'>

                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            tabIndex={1} // tabIndex of textarea
                                            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                            onChange={newContent => { }}
                                        />

                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            Cover photo
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label htmlFor="cover_image" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="cover_image" name="cover_image" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 5MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                                    <button disabled={isLoading} type="submit" className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isLoading && 'cursor-not-allowed'}`}>
                                        {isLoading ? <FaSpinner className="animate-spin mr-2" /> : 'Save'}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;