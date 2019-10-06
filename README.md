# hooks-library

> React Hooks Library

[![NPM](https://img.shields.io/npm/v/hooks-library.svg)](https://www.npmjs.com/package/hooks-library)

## Install

```bash
npm install --save hooks-library
```

## Usage

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

## License

MIT © [jdelucaa](https://github.com/jdelucaa)
