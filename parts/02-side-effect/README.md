# 02. useEffect

### Formula
```
useEffect(() => {
    effect
  return () => {
    cleanup
  };
}, [input])
```

### Examples 
**1. On Every Component Render**
```
function MyComponent() {
    // ...
    React.useEffect(() => {
        runThisFunctionOnEveryRender();
    })
    // ...
}
```
**2. When component Mount**
```
function MyComponent() {
    // ...
    React.useEffect(() => {
        callMeOnlyOnce()
    }, [])
    // ...
}
```

**3. On Every Component Render with a Condition**
```
function MyComponent() {
    // ...
    React.useEffect(() => {
        runIfOneOfTheDepsWillChange(dep1, dep2);
    }, [dep1, dep2])
    // ...
}
```
**4. When Component Unmounts**
```
function MyComponent() {
    // ...
    React.useEffect(() => {
        document.addEventListener();

        return () => {
            document.removeEventListener();
        }
    }, [])
    // ...
}
```
