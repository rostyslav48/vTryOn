import "./App.css";

function App() {
  const handleWidgetOpen = async () => {
    const widget: any = document.querySelector("tint-vto");
    if (widget) {
      await widget.open();

      fetch("model.webp").then((b) => widget.usePhoto(b));
    }
  };

  return (
    <button onClick={handleWidgetOpen} type="button">
      Open widget
    </button>
  );
}

export default App;
