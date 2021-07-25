import { Flex,Text,Box,Stack,Heading } from "@chakra-ui/react";
import {HomeTable} from './HomeTable';
import {LineChart,Line, XAxis, YAxis, Tooltip} from 'recharts';
const fakeData = [
	{ day: "7/4", ppl: 2 },
	{ day: "7/11", ppl: 5 },
	{ day: "7/18", ppl: 3 },
	{ day: "7/25", ppl: 7 },
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
export const Overview = (props) =>{
  const date = new Date();
  return (
		<Stack>
			<Heading>
				Today Is {months[date.getMonth()]+" "} 
				{date.getDate()}
			</Heading>
      <Text>
        {fakeData[fakeData.length-1].ppl+" "}People Came Today
      </Text>
			<Flex alignContent="center" justify="center" gap="2rem">
				<Box mr={20}>
					<LineChart width={600} height={400} data={fakeData}>
						<Line type="monotone" dataKey="ppl" stroke="#334a5b" />
						<XAxis dataKey="day" />
						<YAxis />
						<Tooltip />
					</LineChart>
				</Box>
				<Box>
					<HomeTable />
				</Box>
			</Flex>
		</Stack>
  );
}