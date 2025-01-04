```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic here.  The function is defined, but the event listener is never removed.
    const handleResize = () => {
      console.log('Window resized!');
      setCount(count + 1);
    };

    window.addEventListener('resize', handleResize);
    // Missing cleanup function
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```