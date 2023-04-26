import React, { Component } from "react";
import Event from "./Event"; //in src/EventList.js

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul
        className="EventList"
        style={{ margin: "16px", padding: "0px", marginTop: "36px" }}
      >
        {events.map((event) => (
          <li
            style={{
              listStyle: "none",
              border: "solid 1px gray",
              borderRadius: "5px",
              padding: "10px",
              margin: "18px",
            }}
            key={event.id}
          >
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
