import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

const CardCustom = ({ image, title, description }) => {
  return (
    <Card isPressable className={"group lg:max-w-[31%] p-4 border-2 border-green-400 shadow-neon"}>
      <CardHeader className="flex gap-3">
        <Image
          className=""
          alt="nextui logo"
          height={50}
          radius="sm"
          src={image}
          width={50}
        />
      </CardHeader>
      <CardBody className="text-xl">
        {title}
      </CardBody>
      <Divider />
      <CardFooter>
        {description}
      </CardFooter>
    </Card>
  );
};

export default CardCustom;