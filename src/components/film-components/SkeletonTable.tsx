import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  SkeletonText,
} from "@chakra-ui/react"; //skeleton related imports from chakra UI

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
