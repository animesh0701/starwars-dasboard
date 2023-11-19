import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  HStack,
  Image,
  Text,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const SkeletonTable = () => {
  return (
    <TableContainer pl={10} pr={10}>
      <Table size="sm">
        <Tbody>
          <Tr>
            <Td>
              <SkeletonText height="50px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <SkeletonText height="50px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <SkeletonText height="50px" />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <SkeletonText height="50px" />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SkeletonTable;
