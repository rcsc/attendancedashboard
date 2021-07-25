import logo from './logo.svg';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomeTable } from './components/HomeTable';
import { Box, Text, Heading,Container,Flex } from "@chakra-ui/react";
import './App.css';
import { Overview } from './components/Overview';

function App() {
    return (
		<Router>
			<Box className="App" minH="100vh">
				<Heading
					fontSize="4vw"
					bgGradient="linear(to-l, #60df51, #3edee7)"
					bgClip="text"
					padding="2rem"
					textAlign="center"
				>
					RCSC Attendance Dashboard
				</Heading>
				<Flex justify="center">
					<Route exact path="/" component={HomeTable} />
					<Route path="/overview" component={Overview} />
				</Flex>
			</Box>
		</Router>
	);
}

export default App;
