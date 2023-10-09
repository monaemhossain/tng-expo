
import { PropTypes } from 'prop-types';
import ServiceCard from './ServiceCard/ServiceCard';
import { useLoaderData } from 'react-router-dom';
import { Divider } from '@nextui-org/react';

const Services = ({ eventData }) => {


    const events = useLoaderData()

    if (!eventData) {
        eventData = events
    }
    // console.log(eventData);
    return (
        <div className='max-w-[1024px] mx-auto px-4 py-8' data-aos="fade-up">
            <div className='grid justify-center items-center'>
                <h1 className='text-center text-4xl font-bold pb-2'>Services</h1>
                <Divider className="bg-foreground-600 h-1" />
            </div>
            <div className='max-w-lg mt-4 mx-auto text-center'>
                <p>Streamlined registration, on-site assistance, tech-equipped spaces, and attendee amenities for an optimal event experience.</p>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                {
                    eventData && eventData?.map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
                }
            </div>
        </div>
    );
};
Services.propTypes = {
    eventData: PropTypes.array,
}

export default Services;