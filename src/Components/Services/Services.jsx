
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {
    return (
        <div className='max-w-[1024px] mx-auto px-4 py-16'>
            <div>
                <h1 className='text-center text-4xl font-bold pb-10'>Services</h1>
                <div className="divider"></div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;