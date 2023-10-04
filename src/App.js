import './App.css';

function App() {
  const gifStyle = {
    display: 'block',
    margin: '0 auto', // This centers the GIF horizontally
    maxWidth: '100%', // Ensure the GIF doesn't exceed the container width
  };

  return (
    <div>
      <img
        src="https://media.tenor.com/MCL_y9BGN9IAAAAC/futurama-good-news.gif"
        alt="Good News GIF"
        style={gifStyle}
        width="400" // Adjust the width to your desired size
      />
      <iframe
        title="Google Form"
        src="https://forms.gle/rZVG6nKoLHdMbhtJ8"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
      <img
        src="https://media.tenor.com/ekUcLfSGNAQAAAAC/abhi-maza-aayega-na-bhidu-johnny-lever.gif"
        alt="Good News GIF"
        style={gifStyle}
        width="400" // Adjust the width to your desired size
      />
    </div>
  );
}

export default App;
