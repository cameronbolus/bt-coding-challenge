import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor - initializing state
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};

	}

	// ComponentDidMount is used to fetch API and
	// execute the code
	componentDidMount() {
		fetch(
"https://api.github.com/orgs/BoomTownROI/repos")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})

	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>//if data isn't loading, this will show
			<h1> Loading... </h1> </div> ;

		return (
		<div className = "App">
			<h1> repos_url: </h1> {
				items.map((item) => (
				<ul key = { item.id } >
					<li>id: { item.id },</li>
					<li>name: { item.name },</li>
					<li>description: { item.description }</li>
          <li>created_at: { item.created_at }</li>
          <li>updated_at: { item.updated_at }</li>
					</ul>
				))
			}

		</div>
	);
}
}

export default App;
