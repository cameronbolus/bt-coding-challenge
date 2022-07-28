import React from "react";
import './App.scss';
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
		if (!DataisLoaded) return <div>
			<h1> Loading... </h1> </div> ;

		return (
		<div className = "App">

			<h1> repos_url: </h1>
				<table >
					<tbody>
						<tr className="table-header">
							<th>Id</th>
							<th>Name</th>
							<th>Description</th>
							<th>Created at</th>
							<th>Updated at</th>
						</tr>
						{items.map((item) => (
							<tr key = { item.id } className="data">
								<td className="id">{ item.id }</td>
								<td>{ item.name }</td>
								<td>{ item.description }</td>
								<td>{ item.created_at }</td>
								<td>{ item.updated_at }</td>
							</tr>
						))
					}
						</tbody>
					</table>


		</div>
	);
}
}

export default App;
