# BMDS Organigramming Tool

> **Prototype notice:** This application is a prototype that was used as part of a learning project at the Federal Ministry for Digital and State Modernisation (BMDS). It is not finished software and is not intended to be treated as a production-ready solution.

## About this fork

This repository is a fork of the [Organigramming Berlin project](https://github.com/technologiestiftung/organigramming-berlin), an open-source tool for creating machine-readable and graphical administrative organization charts.

The original project was developed by [Technologiestiftung Berlin](https://www.technologiestiftung-berlin.de/), through its [Open Data Informationsstelle Berlin (ODIS)](https://odis-berlin.de/), with support from the Berlin Senate Chancellery and Investitionsbank Berlin using funds from the State of Berlin.

Technologiestiftung Berlin forked and adapted the project for a BMDS learning project. This fork is a learning-project prototype, not a finished or production-ready application. It may still contain content or behavior inherited from the Berlin version.

As part of the learning project, a draft ontology for representing BMDS organization charts was also developed. The draft is available in the [lod-vocabulary-bund repository](https://github.com/technologiestiftung/lod-vocabulary-bund) and can be browsed on the [ontology website](https://technologiestiftung.github.io/lod-vocabulary-bund/). It is a proposal only and requires further development.

## Getting started

From the repository root, change to the `app` directory and install the dependencies:

```sh
cd app
yarn install
```

## Development

Start the development server from the `app` directory:

```sh
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads when you make changes, and lint errors are shown in the console.

## Production build

To create an optimized production build in the `build` directory, run from `app`:

```sh
yarn build
```

Although a build can be created, this prototype has not thereby been validated as production-ready software.

## Development notes

### Data schema

The organization chart data structure is defined in [organization_chart.json](./app/src/schemas/organization_chart.json).

### User interface schemas

The organization form is defined in [OrganisationTab.js](./app/src/components/Sidebar/OrganisationTab.js). The document form is defined in [DocumentTab.js](./app/src/components/Sidebar/DocumentTab.js).

### Validation rules

Validation rules are defined in [validationRules.js](./app/src/validation/validationRules.js). If you add a rule set for a specific organization, add its key to the schema in [organization_chart.json](./app/src/schemas/organization_chart.json) as well.

### RDF vocabulary

Add new vocabulary to [typeVocabLookup.json](./app/src/services/typeVocabLookup.json).

Where possible, avoid gendered position titles. If a gendered title is needed, use a colon (`:`) for technical reasons (for example, use `Geschäftsleitung` instead of `Geschäftsleitende:r`). Use camelCase for the `name` field. For example:

```json
{
  "Beauftragte:r für EU- und Städtepartnerschaften": {
    "vocab": "bundorgs",
    "name": "BeauftragteRFuerEUUndStaedtepartnerschaften",
    "type": "position"
  }
}
```

## Acknowledgements

This fork builds on the work of the original [Organigramming Berlin project](https://github.com/technologiestiftung/organigramming-berlin). The original project was developed by Technologiestiftung Berlin and ODIS, with support from the Berlin Senate Chancellery and Investitionsbank Berlin using funds from the State of Berlin.

The application also relies on Dabeng's [react-orgchart](https://github.com/dabeng/react-orgchart), based on Wesnolte's [jOrgChart](https://github.com/wesnolte/jOrgChart). The icons used in the application come from [Bootstrap Icons](https://icons.getbootstrap.com/).
