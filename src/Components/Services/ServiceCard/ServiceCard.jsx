
import { Card, CardBody, Image, Button } from "@nextui-org/react";

const ServiceCard = () => {

  return (
    <Card
      // isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
      shadow="sm"
    >
      <CardBody>
        <div className="flex flex-col gap-2">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover rounded-lg"
              height={200}
              shadow="md"
              src="https://media.istockphoto.com/id/613553644/photo/halo-cosplay.jpg?s=1024x1024&w=is&k=20&c=6BP4zHxZqItYwNkDlcfRiSlALk6aW2hSVolHkYpqxxM="
              width="100%"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex flex-col gap-1">
                <h1 className="text-large font-medium mt-2">Frontend Radio</h1>
                <h3 className="text-foreground/90">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, blanditiis! Tempore cupiditate dignissimos eligendi impedit!</h3>
              </div>
            </div>

            <div className="w-full">
              <Button
                className="data-[hover]:bg-foreground/10 bg-neutral-800 text-white border-transparent border-2 hover:bg-foreground/10 hover:text-black hover:border-2 hover:border-black transition-all w-full rounded-lg"
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