import {
  Card,
  Image,
  CardBody,
  HStack,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Card bg="transparent" borderRadius={10} h={250} w={350}>
      <Skeleton height="200px" />
      <CardBody bg="#344064" borderRadius={10} p={4}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
