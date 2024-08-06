import { FaSpinner } from "react-icons/fa";
import { useDeleteItemMutation, useGetItemQuery, useUpdateItemMutation } from "../../redux/features/item/itemApi";
import Modal2 from "../../utilsComponents/Modal2";
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { categoryItem } from "../../utils/categoriesItem";
import { HiMiniXCircle } from "react-icons/hi2";
import { cloudinaryUpload } from "../../utils/getImageLink";
const MenageItem = () => {
    const editor = useRef(null);
    const [imageUrl, setImageUrl] = useState('')
    const [content, setContent] = useState('')
    const [deleteLoading, setDeleteLoading] = useState(false)
    const { data: itemData = [], error, isLoading, refetch } = useGetItemQuery()
    const [modalData, setModalData] = useState({})
    const [isOpen, setIsOpen] = useState(false)
    const [updatePost] = useUpdateItemMutation(undefined)
    const [deleteItem,] = useDeleteItemMutation(undefined)

    const open = (data) => {
        setIsOpen(true)
        setModalData(data)
        setImageUrl(data.cover_image)
    }
    const close = () => {
        setIsOpen(false)
        setModalData({})
        setImageUrl("")
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        setDeleteLoading(true)
        const form = e.target
        const title = form.title.value
        const price = form.price.value
        const stock = form.stock.value
        const category = form.category.value
        const data = { title, price, stock, category, cover_image: imageUrl, description: `${content ? content : modalData.description}` }
        if (!imageUrl) {
            const imageFile = e.target.cover_image.files[0];
            const res = await cloudinaryUpload(imageFile)
            const image = res.secure_url
            data.cover_image = image
            data.oldImageUrl = modalData.cover_image
        }
        const response = await updatePost({ id: modalData._id, payload: data })
        if (response) {
            setDeleteLoading(false)
            close()
            refetch()
        }
    }
    const handleDelete = async (id) => {
        setDeleteLoading(true)
        const response = await deleteItem({ id })
        if (response) {
            refetch()
            setDeleteLoading(false)
        }
    }
    return (
        <div>
            <div className="overflow-x-auto overflow-y-auto">
                <table className="min-w-full bg-white text-black">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Image</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Title</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Stock</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">price</th>
                            <th className="py-2 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemData.map(item => (
                            <tr key={item._id}>
                                <td className="py-2 px-4 border-b border-gray-200"><img src={item.cover_image} alt={item.item} className="w-12 h-12 object-cover rounded" /></td>
                                <td className="py-2 px-4 border-b border-gray-200 max-w-40">{item.title}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.stock}</td>
                                <td className="py-2 px-4 border-b border-gray-200">{item.price}</td>
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <button onClick={() => open(item)} className="mr-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 transition duration-200">Edit</button>
                                    <button onClick={() => handleDelete(item._id)} disabled={deleteLoading} className={`bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 transition duration-200 ${deleteLoading && 'cursor-not-allowed'}`}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal2 open={open} close={close} isOpen={isOpen} >
                <span className="text-black float-end cursor-pointer" onClick={close}>x</span>
                <form onSubmit={handelSubmit} className="text-black" >
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company_website" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input type="text" defaultValue={modalData?.title} name="title" id="title" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="Title" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Price
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input type="text" name="price" defaultValue={modalData?.price} id="price" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="price" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                                        Stock
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input type="number" defaultValue={modalData?.stock} name="stock" id="stock" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full border-2 rounded-none rounded-r-md py-1 ps-1 sm:text-sm border-gray-300" placeholder="Stock" />
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Select an Category</label>
                            <select defaultValue={modalData?.category} id="category" name='category' className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5     ">
                                <option  >Choose a Category</option>
                                {
                                    categoryItem.map(({ title, value }) => <option key={value} value={value}>{title}</option>)
                                }
                            </select>
                            <div className='text-black'>

                                <JoditEditor
                                    ref={editor}
                                    value={modalData.description}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    onChange={newContent => { }}
                                />

                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Cover photo
                                </label>

                                {
                                    imageUrl ? (
                                        <div className="relative">
                                            <img src={modalData?.cover_image} className="size-44" alt="" />
                                            <span onClick={() => {
                                                setImageUrl("")
                                            }
                                            } className="absolute text-black top-3 left-36 rounded-full  "><HiMiniXCircle size={20} /></span>
                                        </div>
                                    )
                                        :
                                        (
                                            <div className="relative">
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
                                                            PNG, JPG, GIF up to 10MB
                                                        </p>
                                                    </div>
                                                    <span onClick={() => {
                                                        setImageUrl(modalData.cover_image)
                                                    }
                                                    } className="absolute text-black top-0 right-0 rounded-full  "><HiMiniXCircle size={20} /></span>
                                                </div>
                                            </div>
                                        )
                                }
                            </div>
                            {/* S */}
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">

                            <button disabled={isLoading} type="submit" className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${deleteLoading && 'cursor-not-allowed'}`}>
                                {deleteLoading ? <FaSpinner className="animate-spin mr-2" /> : 'Save'}
                            </button>
                        </div>
                    </div>
                </form>
            </Modal2>
        </div>
    );
};

export default MenageItem;