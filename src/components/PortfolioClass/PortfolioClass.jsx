import { Component } from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";

export default class PortfolioClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects,
      selected: "All",
    }
  }

  handlerSelectFilter = (filter) => {
    this.setState({ selected: filter });
  };

  getProjects = () => {
    return this.state.selected === "All"
      ? this.state.projects
      : this.state.projects.filter(
          (project) => project.category === this.state.selected
        );
  };

  render() {
    const filters = ["All", "Websites", "Flayers", "Business Cards"];

    return (
      <div className="container">
        <Toolbar
          filters={filters}
          selected={this.state.selected}
          onSelectFilter={this.handlerSelectFilter}
        />
        <ProjectList projects={this.getProjects()} />
      </div>
    );
  }
}