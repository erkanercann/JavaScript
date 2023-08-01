import "./App.css";
import Image from "./Components/imageGallery";

function App() {
    return (
        <div className="App">
            <Image name="Erkan" src="https://picsum.photos/200/300?random=1" />
            <Image />
            <Image name="Ercan" src="https://picsum.photos/200/300?random=2" />
            <Image />
            <Image />
            <Image name="Erdal" src="https://picsum.photos/200/300?random=3" />
            <Image name="Cihan" src="https://picsum.photos/200/300?random=4" />
            <Image name="Cem" src="https://picsum.photos/200/300?random=5" />
        </div>
    );
}

export default App;
