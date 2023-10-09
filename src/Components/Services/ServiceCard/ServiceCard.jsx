import PropTypes from 'prop-types'
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({data}) => {
  const {title, image, description } = data;
  const navigate = useNavigate()

  const handleServiceDetails = (data) => {
    navigate('/service-details', { state: { data } })
  }
  return (
    <Card
      // isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody className='grayscale hover:grayscale-0 transition-all delay-100'>
        <div className="flex flex-col gap-2">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover rounded-lg"
              height={200}
              shadow="md"
              src={image}
              width="100%"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-large font-medium mt-2">{title.slice(0, 25)+"..."}</h1>
                <h3 className="text-foreground/90">{description.slice(0, 100)+"..."}</h3>
              </div>
            </div>

            <div className="w-full">
              <Button
                onClick={()=>handleServiceDetails(data)}
                className="data-[hover]:bg-foreground/10 bg-neutral-700 text-white border-transparent border-2 hover:bg-foreground/10 hover:text-neutral-700 hover:border-2 hover:border-neutral-700 transition-all w-full rounded-lg"
                variant="light"
              > Learn More
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ServiceCard;

ServiceCard.propTypes = {
  data: PropTypes.any
}