# hooks-library

> React Hooks Library

[![NPM](https://img.shields.io/npm/v/hooks-library.svg)](https://www.npmjs.com/package/hooks-library)

## Install

```bash
npm install --save hooks-library
```

### Available hooks

[useAxiosGet](#useAxiosGet)  
[useBreakpoint](#useBreakpoint)  
[useFormInput](#useFormInput)

<a name="useAxiosGet"/>

### `useAxiosGet`

```jsx
import React, { Component } from 'react';
import { useAxiosGet } from 'hooks-library';

const Example = () => {
  const [{ data, isLoading, isError }] = useAxiosGet('url');

  return (
    <div>
      {isError && <div>Something went wrong...</div>}
      {isLoading ? <div>Loading...</div> : <div>{data}</div>}
    </div>
  );
};
```

<a name="useBreakpoint"/>

### `useBreakpoint`

```jsx
import React, { Component } from 'react';
import { useBreakpoint } from 'hooks-library';

const Example = () => {
  const brkPnt = useBreakpoint();

  return <div>{brkPnt}</div>;
};
```

<a name="useFormInput"/>

### `useFormInput`

```jsx
import React, { Component } from 'react';
import { useFormInput } from 'hooks-library';

const Example = () => {
  const value = useFormInput();

  return (
    <div>
      <input {...value} />
    </div>
  );
};
```

## License

MIT © [jdelucaa](https://github.com/jdelucaa)
