import "./App.css";

function App() {
  const handleWidgetOpen = async () => {
    const widget: any = document.querySelector("tint-vto");
    if (widget) {
      await widget.open();

      await widget.useWebcam().then((wcam: any) => {
        if (!wcam)
          fetch("model.webp")
            .then((r) => r.blob())
            .then((b) => widget.usePhoto(b));
      });
    }
  };

  return (
    <button onClick={handleWidgetOpen} type="button">
      Open widget
    </button>
  );
}

export default App;
