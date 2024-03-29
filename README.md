# React-Timeline-Components

<details>
    <summary>personal note: steps to update npm package version</summary>
    
```
npm version patch
git push --tags
```

after running the above commands in terminal, create a [new release](./React-Timeline-Components/releases/new) in github to trigger the [Github Actions workflow](https://github.com/AnweshGangula/React-Timeline-Components/actions/workflows/npm_publish.yml) to update the package in npm
</details>


## Installation

A React Component that display a timeline of information provided in a JSON format.

Install this [npm package](https://www.npmjs.com/package/react-timeline-components) with below command

```bash
npm i react-timeline-components
```

You can check out a demo at the [following link](https://anweshgangula.github.io/React-Timeline-Components).


After installing the package, you can import the components like this - `import { HorizontalTimeline } from 'react-timeline-components';`

![Horizontal Timeline Component with code example](./GitHub_Assets/Horizontal_Timeline_Component.jpg)
