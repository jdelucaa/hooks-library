import { cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import useBreakpoint from './useBreakpoint';

afterEach(cleanup);

const resizeTo = size => {
  act(() => {
    global.innerWidth = size;
    global.dispatchEvent(new Event('resize'));
  });
};

describe('useBreakpoint tests', () => {
  it('should return lg as default', async () => {
    const { result } = renderHook(() => useBreakpoint());
    // The default window.innerWidth set by Jest is 1024px
    expect(result.current).toEqual('lg');
  });

  it('should return xs', async () => {
    const { result } = renderHook(() => useBreakpoint());
    resizeTo(200);
    expect(result.current).toEqual('xs');
  });

  it('should return sm', async () => {
    const { result } = renderHook(() => useBreakpoint());
    resizeTo(320);
    expect(result.current).toEqual('sm');
  });

  it('should return md', async () => {
    const { result } = renderHook(() => useBreakpoint());
    resizeTo(720);
    expect(result.current).toEqual('md');
  });
});
