import React from "react";
import { shallow } from "enzyme";
import CitySearch from "./CitySearch";

describe("<CitySearch /> component", () => {
  test("render text input", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });

  test("selecting CitySearch input reveals the suggestions list", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.find(".city").simulate("focus");
    expect(CitySearchWrapper.state("showSuggestions")).toBe(true);
    expect(CitySearchWrapper.find(".suggestions").prop("style")).not.toEqual({
      display: "none",
    });
  });

  test("selecting a suggestion should hide the suggestions list", () => {
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.setState({
      query: "Berlin",
      showSuggestions: undefined,
    });
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("showSuggestions")).toBe(false);
    expect(CitySearchWrapper.find(".suggestions").prop("style")).toEqual({
      display: "none",
    });
  });
});

test("renders a list of suggestions", () => {
  const CitySearchWrapper = shallow(<CitySearch />);
  expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
});

test("renders text input correctly", () => {
  const CitySearchWrapper = shallow(<CitySearch />);
  const query = CitySearchWrapper.state("query");
  expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
});

test("change state when text input changes", () => {
  const CitySearchWrapper = shallow(<CitySearch />);
  CitySearchWrapper.setState({
    query: "Munich",
  });
  const eventObject = { target: { value: "Berlin" } };
  CitySearchWrapper.find(".city").simulate("change", eventObject);
  expect(CitySearchWrapper.state("query")).toBe("Berlin");
});
