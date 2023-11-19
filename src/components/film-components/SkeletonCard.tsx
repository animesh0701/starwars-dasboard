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
    <Card bg="transparent" borderRadius={10} h={250}>
      <Skeleton borderRadius={10} marginBottom={1.5} h={180} />
      <CardBody bg="#344064" borderRadius={10} p={4}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
