
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className='grid grid-cols-3 gap-4 max-w-[1024px] mx-auto py-16'>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Services;