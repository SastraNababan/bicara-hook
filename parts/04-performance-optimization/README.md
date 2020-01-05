# useMemo & useCallback

### useMemo return value
```
const memoizedValue = useMemo(
  () => computeExpensiveValue(a, b), [a, b]
);
```

### useMemo return callback/fn
```
const memoizedCallback = useCallback(
  doSomething(a, b),[a, b]
);
```

```
function Parent(){
  return(
    <div>
      <p> Parent Component </p>
    </div>
  )
}

function ChildComponent(){
  console.log('re-render')
  <div>
    <p> Child Component </p> 
  </div>
}
React.memo(ChildComponent)
```



React Memo vs useMemo what's the different ?
