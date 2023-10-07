
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 max-w-[1024px] mx-auto px-4 py-16'>
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