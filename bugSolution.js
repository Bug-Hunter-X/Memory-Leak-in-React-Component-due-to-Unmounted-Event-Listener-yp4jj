```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      console.log('Window resized!');
      setCount(count + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup function to remove the event listener
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```