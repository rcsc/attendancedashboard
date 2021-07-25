import { 
  Flex, 
  Heading, 
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';

const tempPeople = [
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
	{ name: "Kevin Li" },
	{ name: "Cy Westbrook" },
];

const tableRows = tempPeople.map((person)=>
  <Tr>
    <Td>{person.name}</Td>
  </Tr>
);
export const HomeTable = (props) =>{
  return (
		<Flex overflowY="scroll" h={400}>
			<Table variant="simple" size="lg">
        <TableCaption>Attendance Table</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableRows}
        </Tbody>
			</Table>
		</Flex>
  );
}