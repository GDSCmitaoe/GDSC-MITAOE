import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import fetchGCSJData from '../services/fetchGCSJData';

const Leaderboard = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);
    const [loadedIndex, setLoadedIndex] = useState(10); // Initial index up to which data is loaded
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchGCSJData((fetchedData) => {
            const filteredData = fetchedData
                .filter(row => row['Student Name'].toLowerCase().includes(searchQuery.toLowerCase()));
            setData(filteredData.slice(0, loadedIndex));
            setIsLoading(false);
        });
    }, [loadedIndex, searchQuery]);

    const handleExpandClick = () => {
        setIsExpanded(true);
        setLoadedIndex(loadedIndex + 203); // Load the next 10 items
    };

    return (
        <div className="px-24 max-md:px-4 text-left bg-gray-100 flex flex-col justify-center">
            <h2 className={"font-bold my-8 text-xl"}>Leaderboard</h2>
            <div className="mb-4 flex justify-between">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="border p-2 w-72 h-12 rounded outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                {!isExpanded && !isLoading && data.length >= 10 && (
                    <button className="mt-4 text-gdsc_blue font-bold py-2 px-4 rounded" onClick={handleExpandClick}>
                        Expand Table
                    </button>
                )}
            </div>

            <table className="bg-white w-full mb-10 shadow-lg rounded-lg overflow-hidden">
                <thead className="text-gray-600">
                <tr>
                    <th className="py-4 px-4 border-b border-gray-300">
                        Sr. No
                    </th>
                    <th className="py-4 px-4 border-b border-gray-300">
                        Student Name
                    </th>
                    {/* Add more table headers for other columns if needed */}
                </tr>
                </thead>
                <tbody className="text-gray-700">
                {isLoading ? (
                    // Skeleton loading for each row while data is being loaded
                    Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index} className="hover:bg-gray-200">
                            <td className="py-4 px-4">
                                <Skeleton width={50} height={20} />
                            </td>
                            <td className="py-4 px-4">
                                <Skeleton width={200} height={20} />
                            </td>
                            {/* Add more <td> elements for other columns if needed */}
                        </tr>
                    ))
                ) : (
                    // Render actual data once loaded
                    data.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-200">
                            <td className="py-4 px-4">
                                {index + 1}
                            </td>
                            <td className="py-4 px-4">
                                {row['Student Name']}
                            </td>
                            {/* Add more <td> elements for other columns if needed */}
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;