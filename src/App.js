import "./styles/main.scss";

import qrCodeImage from "./images/image-qr-code.png";

const App = () => {
    return (
        <main>
            <div className="card">
                <img src={qrCodeImage} alt="qr-code" />
                <h2>Improve your front-end skills by building projects</h2>
                <p>
                    Scan the QR code to visit Frontend Mentor and take your
                    coding skills to the next level
                </p>
            </div>
        </main>
    );
};

export default App;
