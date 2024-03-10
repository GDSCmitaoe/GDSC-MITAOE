import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from "react-loading-skeleton";

const Events = () => {
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://024d2ee9-45bb-4f07-b96e-d8d45785fa4e-00-1cnpp91i4dhvd.sisko.replit.dev/api/event');
                setUpcomingEvents(response.data.upcomingEvents);
                setPastEvents(response.data.pastEvents);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e, eventId) => {
        e.preventDefault();

        console.log(eventId, email)

        try {
            const response = await axios.post('https://024d2ee9-45bb-4f07-b96e-d8d45785fa4e-00-1cnpp91i4dhvd.sisko.replit.dev/api/certificate/generate', {
                email,
                eventId
            });
            // Handle the response, e.g., show a success message or download the certificate
            console.log('Certificate generated:', response.data);
        } catch (error) {
            console.error('Error generating certificate:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center px-16">
            {loading ? (
                // Show skeleton loading state
                // <div className={"max-w-md w-screen"}>
                //
                // </div>
                <div className="rounded-xl shadow-lg p-6">
                    <Skeleton width={400} height={400} className={""} count={3}/>
                </div>
            ) : (
                pastEvents.map(event => (
                    <div key={event._id} className="max-w-md w-full bg-[#1e1e1e] shadow-lg rounded-xl p-6">
                        <div className="flex flex-col">
                            <div className="relative h-62 w-full mb-3">
                                <img
                                    src={`https://024d2ee9-45bb-4f07-b96e-d8d45785fa4e-00-1cnpp91i4dhvd.sisko.replit.dev/images/events/${event.img}`}
                                    alt={event.title}
                                    className="w-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="flex-auto justify-evenly">
                                <div className="flex flex-wrap">
                                    <div className="w-full flex-none text-sm flex items-center text-gray-400">
                                        <span className="mr-1">{event.start_time} - {event.end_time}</span>
                                        <span
                                            className="mr-2 text-gray-400">{new Date(event.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center w-full justify-between min-w-0">
                                        <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-gdsc_blue4 truncate">
                                            <a href={event.link} target={"_blank"}>{event.title}</a>
                                        </h2>
                                    </div>
                                    <div className={"flex"}>
                                        <div
                                            className="flex items-center bg-gdsc_blue text-white text-xs px-2 py-1 mt-1 rounded-lg truncate">
                                            {event.tagline}
                                        </div>
                                        {event.venu.toLowerCase() !== 'online' ? (
                                            <div
                                                className="flex items-center bg-gdsc_red text-white text-xs px-2 py-1 mt-1 ml-2 rounded-lg truncate">
                                                {event.venu}
                                            </div>
                                        ) : (
                                            <div
                                                className="flex items-center bg-gdsc_yellow text-white text-xs px-2 py-1 mt-1 ml-2 rounded-lg truncate">
                                                {event.venu}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex space-x-2 mt-2 text-sm font-medium justify-start">
                                    <button
                                        onClick={() => document.getElementById('cert_modal').showModal()}
                                        className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-gdsc_green px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-lg hover:bg-gdsc_green5">
                                        <span>Generate Certificate</span>
                                    </button>
                                    <dialog id="cert_modal" className="modal sm:modal-middle modal-bottom">
                                        <div className="modal-box bg-[#1e1e1e]">
                                            <form onSubmit={(e) => handleSubmit(e, event.eventId)}>
                                                <label
                                                    className="input input-bordered flex items-center gap-2 bg-[#1e1e1e]">
                                                    <input
                                                        type="email"
                                                        placeholder="Enter your email"
                                                        value={email}
                                                        onChange={handleEmailChange}
                                                        required={true}
                                                        className="rounded-lg w-full grow"
                                                    />
                                                </label>
                                                <button type={"submit"}
                                                    className="bg-gdsc_green text-white rounded-lg px-4 py-2 mt-4 inline-block"
                                                >
                                                    Download Certificate
                                                </button>
                                            </form>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                )))}
        </div>
    );
};

export default Events;
