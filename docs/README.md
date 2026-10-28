# My Account Commons

My Account Commons provides shared components you can use to add new tabs to the `vtex.my-account` app.

## Before you begin

- These components need to be children of the `vtex.my-account` app.

## Getting started

To add a new tab to My Account, create a separate app that extends `vtex.my-account`. My Account Commons provides the components you need to build the content of the tab. Follow these steps:

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

## How it works

### ContentWrapper

You can use it in your code like a React component with the JSX element: `<ContentWrapper>`.

```jsx
<ContentWrapper
  namespace="my-custom-page"
  title={`${orderTitle} ${orderNumber}`}
  backButton={backButton}>
  {({ handleError }) => children}
</ContentWrapper>
```

The `ContentWrapper` component has the following props:

| Prop name | Type | Description |
| --- | --- | --- |
| `title` | `String` | Defines the page title. Use either `title` or `titleId`. |
| `titleId` | `String` | Defines the page title from an Intl message ID. Use either `title` or `titleId`. |
| `backButton.title` | `String` | Back button label |
| `backButton.titleId` | `String` | Intl message ID translated and used as the back button label |
| `backButton.path` | `String!` | Path opened when the user clicks the back button |
| `headerContent` | `node` | JSX inserted as children of `vtex.styleguide/PageHeader` |
| `namespace` | `String!` | CSS namespace added to the page body |
| `children` | `Function!` | Returns the page content. It receives the render prop in the Render prop section. |

If you don't pass `backButton`, the back button redirects to the `/` path and uses the default `commons.back` message.

#### Render prop

The `ContentWrapper` uses the render prop pattern and returns an object to its children with the following props:

| Prop name | Type | Description |
| --- | --- | --- |
| `handleError` | `Function` | Shows a generic error message on the page. The user can dismiss the message. |

### BaseLoading

Use this component to implement your own loader. It analyzes the result of a GraphQL query and displays the loader skeleton or an error message if any error occurs, with a retry option that calls `refetch` on the query.

```jsx
<BaseLoading queryData={data} headerConfig={object}>
  {children}
</BaseLoading>
```

The `BaseLoading` component has the following props:

| Prop name | Type | Description |
| --- | --- | --- |
| `queryData` | `QueryResult!` | Apollo GraphQL query result |
| `headerConfig` | `Object!` | Props passed to `ContentWrapper`: `title`, `titleId`, `backButton`, and `headerContent` |
| `namespace` | `String` | Passes the namespace to `ContentWrapper`. `vtex-base-loading` is applied if none is passed. |
| `parseError` | `Function` | Parses the GraphQL error and returns a message ID |

### GenericError

`GenericError` wraps the `vtex.styleguide/Alert` component.

```jsx
<GenericError onDismiss={handleError} errorId={error} />
```

You must pass either `errorId` or `error`. If you pass both, `errorId` is used.

The `GenericError` component has the following props:

| Prop name | Type | Description |
| --- | --- | --- |
| `error` | `String` | Error message displayed on the `Alert`, as plain text |
| `errorId` | `String` | Intl message ID translated and shown on the `Alert` |
| `onDismiss` | `Function` | Called when the user clicks the close button |

### Router

`Router` exports the `react-router-dom` library. Use it to ensure all apps in the My Account ecosystem use the same router version, rather than installing your own.

```jsx
import React from 'react'
import { Route } from 'vtex.my-account-commons/Router'

import UserPoints from './components/UserPoints'

const MyAppPage = () => (
  <Route path="/points" exact component={UserPoints} />
)

export default MyAppPage
```
