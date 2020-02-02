# React Hook Performance Optimization

## React Memo
  - `Higher order component`, similar to `React.PureComponent` but for function components
  - Only affects props changes
  - Not works for object & array prop. Solution Options :
    - Move variabel to outside function
    - Create custom comparation function
    - Save in component state
   




## useMemo & useCallback

### useMemo return value prop
```
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b), [a, b]
);
```

### useCallback return callback or function prop
```
const memoizedCallback = useCallback(
  doSomething(a, b),[a, b]
);
```

```
useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
```