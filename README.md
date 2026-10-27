# My Account Commons

My Account Commons is a bundle of canonical components that can be used to add new tabs to the `vtex.my-account` app.

> VTEX doesn't offer support for a customized My Account. For more information, contact the frontend developer responsible for the module.

## Getting started

The recommended way to add a new tab to My Account is to create a separate app that extends `vtex.my-account`. This app provides the components you need to build the content of that tab. For these components to work, they need to be children of the `vtex.my-account` app.

To add a new tab to My Account, follow these steps:

1. In the `manifest.json` file of your app, add `vtex.my-account` and `vtex.my-account-commons` as dependencies:

```json
"dependencies": {
  "vtex.my-account": "1.x",
  "vtex.my-account-commons": "1.x"
}
```

2. Import the components into your code:

```js
import {
  ContentWrapper,
  BaseLoading,
  GenericError,
} from 'vtex.my-account-commons'
```

3. Use `ContentWrapper` to render the page of your new tab. Its `children` must be a function:

```jsx
import React from 'react'
import { ContentWrapper } from 'vtex.my-account-commons'

const UserPoints = () => (
  <ContentWrapper namespace="my-custom-page" title="My points">
    {() => <div>Your content goes here.</div>}
  </ContentWrapper>
)

export default UserPoints
```

To add the tab to the My Account menu and map its route, use the `my-account-link` and `my-account-page` interfaces. For more information, read the [My Account](https://developers.vtex.com/docs/apps/vtex.my-account) documentation.

## Usages

### ContentWrapper

You can use it in your code like a React component with the jsx tag: `<ContentWrapper>`.

```jsx
<ContentWrapper
  namespace="my-custom-page"
  title={`${orderTitle} ${orderNumber}`}
  backButton={backButton}>
  {({ handleError }) => children}
</ContentWrapper>
```

The `ContentWrapper` component has the following props:

| Prop name            | Type        | Description                                                                                                                      |
| -------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `title`              | `String`    | The string that will appear on the page title. Use either `title` or `titleId`.                                                  |
| `titleId`            | `String`    | Intl message ID that will be translated and inserted on the page title. Use either `title` or `titleId`.                         |
| `backButton.title`   | `String`    | The string that will appear as a message on the back button.                                                                     |
| `backButton.titleId` | `String`    | Intl message ID that will be translated and inserted as the go back message.                                                     |
| `backButton.path`    | `String!`   | Location to which the user will be taken when they select the back button.                                                       |
| `headerContent`      | `node`      | JSX that will be inserted as children of the `vtex.styleguide/PageHeader`.                                                       |
| `namespace`          | `String!`   | CSS namespace that will be added to the page body.                                                                               |
| `children`           | `Function!` | Function that returns the content of the page. It receives the render prop described below.                                      |

If you don't pass `backButton`, the back button takes the user to the `/` path and uses the default `commons.back` message.

The `ContentWrapper` uses the render prop pattern and returns to its children an object with the following props:

#### Render prop

| Prop name     | Type       | Description                                                                                |
| ------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `handleError` | `Function` | Function that shows a generic error message on the page. The user can dismiss the message. |

### BaseLoading

This component should be used to implement your own Loader. It analyzes the result of a GraphQL query and displays the loader skeleton or an error message if any error occurs, with a retry option that calls `refetch` on the query.

```jsx
<BaseLoading queryData={data} headerConfig={object}>
  {children}
</BaseLoading>
```

The `BaseLoading` component has the following props:

| Prop name      | Type           | Description                                                                                                       |
| -------------- | -------------- | ----------------------------------------------------------------------------------------------------------------- |
| `queryData`    | `QueryResult!` | Apollo GraphQL query result.                                                                                      |
| `headerConfig` | `Object!`      | The props that will be passed to the `ContentWrapper`: `title`, `titleId`, `backButton`, and `headerContent`.     |
| `namespace`    | `String`       | The namespace prop that will be passed to the `ContentWrapper`. `vtex-base-loading` is applied if none is passed. |
| `parseError`   | `Function`     | Function that parses the GraphQL error and returns a message ID.                                                  |

### GenericError

A wrapper for the `vtex.styleguide/Alert` component.

```jsx
<GenericError onDismiss={handleError} errorId={error} />
```

You must pass either `errorId` or `error`. If you pass both, `errorId` is used.

The `GenericError` component has the following props:

| Prop name   | Type       | Description                                                             |
| ----------- | ---------- | ----------------------------------------------------------------------- |
| `error`     | `String`   | The error message that will be displayed on the `Alert`, as plain text. |
| `errorId`   | `String`   | Intl message ID that will be translated and inserted on the `Alert`.    |
| `onDismiss` | `Function` | Function that will be called when the user selects the close button.    |

### Router

Exports the `react-router-dom` library. Use it to make sure all apps in the My Account ecosystem use the same version of the router, instead of installing your own.

```jsx
import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import UserPoints from './components/UserPoints'

const MyAppPage = () => (
  <Route path="/points" exact component={UserPoints} />
)

export default MyAppPage
```
