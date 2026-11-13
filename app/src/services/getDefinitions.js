import orgChart from "../schemas/organization_chart";
import typeVocabLookup from "./typeVocabLookup";

export function getDefinitions() {
  let orgs = [];
  let persons = [];
  let positionStatus = []
  let officialStatus = []

  Object.keys(typeVocabLookup).forEach((type) => {
    if (typeVocabLookup[type].type === "org") {
      orgs.push(type);
    }
    if (typeVocabLookup[type].type === "position") {
      persons.push(type);
    }
    if (typeVocabLookup[type].type === "positionStatus") {
      positionStatus.push(type);
    }
    if (typeVocabLookup[type].type === "officialStatus") {
      officialStatus.push(type);
    }

  });

  orgChart.definitions.organisation.properties.type.examples = orgs.sort();
  orgChart.definitions.department.properties.type.examples = orgs.sort();
  orgChart.definitions.position.properties.positionType.examples = persons.sort();
  orgChart.definitions.position.properties.positionStatus.examples = positionStatus.sort();
  orgChart.definitions.person.properties.officialStatus.examples = officialStatus.sort();;

  return orgChart;
}
